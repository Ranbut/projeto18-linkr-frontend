
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import { getPostAPI } from "../../api/getPostAPI.js";
import { getUserByTokenAPI } from "../../api/getUserByTokenAPI.js";
import { PageBody, Loading, TrendingBox, TrendingTitle, Hashtag } from "./style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import PublishCard from "../../components/PublishCard/PublishCard.js";
import { AuthContext } from "../../contexts/auth.js";
import { UserContext } from "../../contexts/user.js";
import { useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Timeline(){
    const { id } = useParams();

    document.body.style.backgroundColor = '#333333';

    const { token, setToken } = useContext(AuthContext);
    const [ load, setLoad ] = useState(true);
    const { user, setUser } = useContext(UserContext);
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
        if (userPosts.length > 0) {
            return (
                <>
                    {userPosts.map(
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
        getUserInfo(token);
        getPosts();
        axios.get(`${process.env.REACT_APP_API_URL}/user/${id}/post`, {headers: {"Authorization":`Bearer ${token.token}`}})
            .then((res) => {
                setTrending(res.data);
                console.log(trending, "trending");
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, [id]);

    return (
        <>
            <Header userImage={user.pictureUrl} token={token} setToken={setToken}/>
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
