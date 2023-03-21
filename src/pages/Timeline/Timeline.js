import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import { getPostAPI } from "../../api/getPostAPI.js";
import { PageBody, Loading, TrendingBox, TrendingTitle, Hashtag } from "./style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import PublishCard from "../../components/PublishCard/PublishCard.js";
import { useContext } from "react";
import Context from "../../contexts/auth.js";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Timeline() {

    const { user } = useContext(Context);
    const [load, setLoad] = useState(true);
    const [userPosts, setUserPosts] = useState([]);
    const [trending, setTrending] = useState([]);
    const navigate = useNavigate();


    async function getPosts() {
        const getPostRes = await getPostAPI();
        if (getPostRes.success) {
            setUserPosts(getPostRes.postsRetrived);
            setLoad(false);
            return;
        }
    }

    function renderTimeline() {
        if (userPosts.length > 0) {
            return (
                <>
                    {userPosts.map(
                        (postProp) => <PostCard
                            getPosts={getPosts} currentUser={user.id} userPost={postProp} key={postProp.id} />
                    )}
                </>
            );
        }
        else {
            return (<Loading data-test="message">There are no posts yet</Loading>);
        }
    }

    useEffect(() => {
        getPosts();
        axios.get(`${process.env.REACT_APP_API_URL}/trending`)
            .then((res) => {
                setTrending(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, []);

    return (
        <>
            <Header userImage={user.pictureUrl} />
            <PageBody>
                <div>

                    <PublishCard
                        userImage={user.pictureUrl}
                        userPosts={userPosts}
                        getPosts={getPosts}
                    />

                    {load ? (<Loading>Loading...</Loading>) : renderTimeline()}
                </div>
                <TrendingBox data-test="trending">
                    <TrendingTitle>trending</TrendingTitle>
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