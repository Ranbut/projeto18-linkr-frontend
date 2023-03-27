import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import { PageBody, TrendingBox, TrendingTitle, Hashtag } from "../Timeline/style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import { useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import Context from "../../contexts/auth.js";
import InfiniteScroll from "react-infinite-scroller";
import { getHashtagPostOldAPI } from "../../api/getPostAPI.js";
import PageLoad from "../../components/Load/Load.js";


export default function HashtagSearch() {

    const { user } = useContext(Context);
    const [load, setLoad] = useState(true);
    const [posts, setPosts] = useState([]);
    const [trending, setTrending] = useState([]);
    const { hashtag } = useParams();
    const navigate = useNavigate();
    const [hasMoreOldPosts, setHasMoreOldPosts] = useState(true)


    function renderTimeline() {
        if (posts.length > 0) {
            return (
                <InfiniteScroll
                    pageStart={0}
                    loadMore={checkOldPosts}
                    hasMore={hasMoreOldPosts}
                    loader={<PageLoad />}
                >
                    {posts.map(
                        (postProp) => <PostCard
                            getPosts={() => setLoad(false)}
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
    }

    async function checkOldPosts() {
        const lastDate = (posts[posts.length - 1].createdAt);

        const getPostRes = await getHashtagPostOldAPI(hashtag, lastDate);
        if (getPostRes.success) {
            const oldPosts = getPostRes.postsRetrived;
            if (oldPosts.length === 0) {
                setHasMoreOldPosts(false);
                return;
            }

            setPosts(posts.concat(oldPosts));
            return;
        }
    }

    useEffect(() => {
        setLoad(true);
        axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`)
            .then((res) => {
                setLoad(false);
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
        axios.get(`${process.env.REACT_APP_API_URL}/trending`)
            .then((res) => {
                setTrending(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, [hashtag]);

    return (
        <>
            <Header />

            <PageBody>
                <div>
                    <h4 data-test="hashtag-title">{`#${hashtag}`}</h4>
                    <h5 name="mobile">{`#${hashtag}`}</h5>
                    {load ? <PageLoad /> : renderTimeline()}
                </div>
                <TrendingBox data-test="trending">
                    <TrendingTitle>trending</TrendingTitle>
                    <div>
                        {trending.map(e =>
                            <Hashtag
                                data-test="hashtag"
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