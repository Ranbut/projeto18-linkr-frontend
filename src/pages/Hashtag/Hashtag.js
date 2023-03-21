import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import { PageBody, Loading, TrendingBox, TrendingTitle, Hashtag } from "../Timeline/style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import { useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import Context from "../../contexts/auth.js";

export default function HashtagSearch() {

    const { user } = useContext(Context);
    const [load, setLoad] = useState(true);
    const [posts, setPosts] = useState([]);
    const [trending, setTrending] = useState([]);
    const { hashtag } = useParams();
    const navigate = useNavigate();

    function renderTimeline() {
        if (posts.length > 0) {
            return (
                <>
                    {posts.map(
                        (postProp) => <PostCard
                            getPosts={posts} currentUser={user.id} userPost={postProp} key={postProp.id} />
                    )}
                </>
            );
        }
        else {
            return (<Loading data-test="message">There are no posts yet</Loading>);
        }
    }

    useEffect(() => {
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
            <Header/>

            <PageBody>
                <div>
                    <h4 data-test="hashtag-title">{'#'}{hashtag}</h4>
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