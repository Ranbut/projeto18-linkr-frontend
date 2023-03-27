import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header/Header.js";
import {
    PageBody, Loading, TrendingBox,
    TrendingTitle, Hashtag, UserInfo,
    FollowButton
} from "../Timeline/style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import axios from "axios";
import Context from "../../contexts/auth.js";
import { useNavigate, useParams } from "react-router";
import { getUserPostOldAPI } from "../../api/getPostAPI.js";
import InfiniteScroll from "react-infinite-scroller";


export default function UserPage() {
    const { id } = useParams();
    const { user } = useContext(Context);
    const [load, setLoad] = useState(true);
    const [userPosts, setUserPosts] = useState([]);
    const [trending, setTrending] = useState([]);
    const navigate = useNavigate();
    const [follow, setFollow] = useState([]);
    const [update, setUpdate] = useState(false);
    const [pageUser, setPageUser] = useState([]);
    const [hasMoreOldPosts, setHasMoreOldPosts] = useState(true)


    function getPosts() {
        axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
            .then((res) => {
                setUserPosts(res.data);
                setLoad(false);
            })
            .catch((err) => {
                console.log(err.message, 'getPosts');
            })
    }


    function renderTimeline() {
        if (userPosts.length > 0) {
            return (
                <InfiniteScroll
                    pageStart={0}
                    loadMore={checkOldPosts}
                    hasMore={hasMoreOldPosts}
                    loader={<Loading>Cheking for more posts...</Loading>}
                >
                    {userPosts.map(
                        (postProp) => <PostCard
                            getPosts={getPosts}
                            currentUser={user.id}
                            userPost={postProp}
                            key={((postProp.repostUserName) ?
                                "Repost" + postProp.repostUserName + postProp.id
                                : postProp.id)}
                        />
                    )}
                </InfiniteScroll>
            );
        }
        else {
            return (
                <Loading data-test="message">
                    <p>No posts found from your friends</p>
                </Loading>
            );
        }
    }

    function toggleFollow() {
        setUpdate(true);
        axios.post(`${process.env.REACT_APP_API_URL}/follow/${id}`, {}, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
            .then(() => {
                setUpdate(false);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }


    async function checkOldPosts() {
        const lastDate = (userPosts[userPosts.length - 1].createdAt);

        const getPostRes = await getUserPostOldAPI(Number(id), lastDate);
        if (getPostRes.success) {
            const oldPosts = getPostRes.postsRetrived;
            if (oldPosts.length === 0) {
                setHasMoreOldPosts(false);
                return;
            }

            setUserPosts(userPosts.concat(oldPosts));
            return;
        }
    }

    useEffect(() => {
        getPosts();
        axios.get(`${process.env.REACT_APP_API_URL}/get-user/${id}`)
            .then((res) => {
                setPageUser(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        axios.get(`${process.env.REACT_APP_API_URL}/trending`)
            .then((res) => {
                setTrending(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [id]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/followers`, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }).then((res) => {
            setFollow(res.data)
        }).catch((err) => {
            console.log(err.message);
        })
        if (Number(id) !== user.id) {
            axios.get(`${process.env.REACT_APP_API_URL}/user`, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }).then((res) => {
                setFollow(res.data)
            }).catch((err) => {
                console.log(err.message);
            })
        }
    }, [update]);

    return (
        <>
            <Header />
            <PageBody>
                <div>
                    <UserInfo>
                        <div>
                            <img src={pageUser?.pictureUrl} alt="user-avatar" />
                            <h4>{`${pageUser?.username} posts`}</h4>
                        </div>
                        {follow.some(e => e.followId === Number(id)) ?
                            <FollowButton
                                data-test="follow-btn"
                                onClick={toggleFollow}
                                disabled={update}
                                color="unfollow"
                                display={Number(id) === user.id}
                            >
                                UnFollow
                            </FollowButton>
                            :
                            <FollowButton
                                data-test="follow-btn"
                                onClick={toggleFollow}
                                disabled={update}
                                color="follow"
                                display={Number(id) === user.id}
                            >
                                Follow
                            </FollowButton>}
                    </UserInfo>

                    {load ? (<Loading>Loading...</Loading>) : renderTimeline()}

                </div>
                <TrendingBox>
                    <TrendingTitle data-test="trending">trending</TrendingTitle>
                    <div>
                        {trending.map(e =>
                            <Hashtag data-test="hashtag"
                                key={e.hashtag}
                                onClick={() =>
                                    navigate(`/hashtag/${e.hashtag.replace("#", "")}`)}
                            >
                                {e.hashtag}
                            </Hashtag>
                        )}
                    </div>

                </TrendingBox>
            </PageBody>
        </>
    );
}