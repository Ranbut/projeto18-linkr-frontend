import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import { getPostAPI, getPostRecentsAPI } from "../../api/getPostAPI.js";
import { PageBody, Loading, TrendingBox, TrendingTitle, Hashtag, LoadPost } from "./style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import PublishCard from "../../components/PublishCard/PublishCard.js";
import { useContext } from "react";
import Context from "../../contexts/auth.js";
import axios from "axios";
import { useNavigate } from "react-router";
import { GoSync } from "react-icons/go";
import useInterval from "use-interval";

export default function Timeline() {

    const { user } = useContext(Context);
    const [load, setLoad] = useState(true);
    const [userPosts, setUserPosts] = useState([]);
    const [userNewPosts, setUserNewPosts] = useState([]);
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
    
    useInterval(() => {
        checkNewPosts();
      }, 15000);

    async function checkNewPosts(){
        const getPostRes = await getPostRecentsAPI(Math.max(...userPosts.map(o => o.id)));
        if (getPostRes.success) {
            const newPosts = getPostRes.postsRetrived;

            setUserNewPosts(newPosts);
            return;
        }
    }

    function addNewPosts(){
        setUserPosts(...userNewPosts, ...userPosts);
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
    }, [userPosts]);

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

                {userNewPosts.length !== 0 ?
                <LoadPost onClick={addNewPosts} data-test="load-btn">
                    <div>
                    {userNewPosts.length} new posts, load more!
                    <GoSync style={{margin: "0px 20px"}} color="white" size='16'/>
                    </div>
                </LoadPost>
                :
                <></>
                }
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