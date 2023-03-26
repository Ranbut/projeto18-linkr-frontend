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
                <>
                    {userPosts.map(
                        (postProp) => <PostCard
                            currentUser={0}
                            userPost={postProp}
                            key={postProp.id} />
                    )}
                </>
            );
        }
        else {
            return (
                <Loading data-test="message">
                    You don't follow anyone yet. Search for new friends!
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
        axios.get(`${process.env.REACT_APP_API_URL}/user`, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }).then((res) => {
            setFollow(res.data)
        }).catch((err) => {
            console.log(err.message);
        })
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