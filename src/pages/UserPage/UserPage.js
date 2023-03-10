
import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header/Header.js";
import { getPostAPI } from "../../api/getPostAPI.js";
import { getUserByTokenAPI } from "../../api/getUserByTokenAPI.js";
import { PageBody, Loading, TrendingBox, TrendingTitle, Hashtag } from "./style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import PublishCard from "../../components/PublishCard/PublishCard.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import Context from "../../contexts/auth.js";

export default function UserPage() {
    const { id } = useParams();

    const { user, setUser } = useContext(Context);
    const [load, setLoad] = useState(true);
    const [userPosts, setUserPosts] = useState([]);
    const [trending, setTrending] = useState([]);

    async function getUserInfo(currentToken) {
        const getUserRes = await getUserByTokenAPI(currentToken);
        if (getUserRes.success) {
            setUser(getUserRes.userInfo);
            return;
        }
    }

    async function getPosts() {
        const getPostRes = await getPostAPI();
        if (getPostRes.success) {
            setUserPosts(getPostRes.postsRetrived);
            setLoad(false);
            return;
        }
    }

    function renderTimeline() {
        if (trending.length > 0) {
            return (
                <>
                    {trending?.map(
                        (postProp) => <PostCard userPost={postProp} key={postProp.id} />
                    )}
                </>
            );
        }
        else {
            return (<Loading>There are no posts yet</Loading>);
        }
    }

    useEffect(() => {
        getUserInfo(user.token);
        getPosts();
        axios.get(`${process.env.REACT_APP_API_URL}/user/${id}/post`, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
            .then((res) => {
                setTrending(res.data);
                console.log(`${process.env.REACT_APP_API_URL}/user/${id}/post`);
                console.log(res.data, "res");
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, [id]);

    return (
        <>
            <Header userImage={user.pictureUrl} token={user.token} setToken={user.setToken} />
            <PageBody>
                <div>
                    <h4>timeline</h4>
                    <PublishCard userImage={user.pictureUrl} userPosts={userPosts} getPosts={getPosts} />
                    {load ? (<Loading>Loading...</Loading>) : renderTimeline()}
                </div>
                <TrendingBox>
                    <TrendingTitle>trending</TrendingTitle>
                    <div>
                        {trending?.map(e => <Hashtag>{e.hashtag}</Hashtag>)}
                    </div>
                </TrendingBox>
            </PageBody>
        </>
    );
}
