import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import { getPostUserAPI } from "../../api/getPostAPI.js";
import { getUserByIdAPI } from "../../api/getUserByTokenAPI.js";
import { PageBody, Loading, TrendingBox, TrendingTitle, Hashtag, UserInfo } from "./style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import { AuthContext } from "../../contexts/auth.js";
import { UserContext } from "../../contexts/user.js";
import { useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

export default function UserPage(){

    const { id } = useParams();

    document.body.style.backgroundColor = '#333333';

    const { token, setToken } = useContext(AuthContext);
    const [load, setLoad] = useState(true);
    const { user, setUser } = useContext(UserContext);
    const [userPosts, setUserPosts] = useState([]);
    const [trending, setTrending] = useState([]);
    const navigate = useNavigate();

    async function getUserInfo() {
        const getUserRes = await getUserByIdAPI(id);
        if (getUserRes.success) {
            setUser(getUserRes.userRetrived);
            console.log(getUserRes.userRetrived);
            return;
        }
    }

    async function getPosts() {
        const getPostRes = await getPostUserAPI(id);
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
                        (postProp) => <PostCard currentUser={0} userPost={postProp} key={postProp.id} />
                    )}
                </>
            );
        }
        else {
            return (<Loading data-test="message">There are no posts yet</Loading>);
        }
    }

    useEffect(() => {
        getUserInfo();
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
            <Header userImage={user.pictureUrl} token={token} setToken={setToken}/>
            <PageBody>
                <div>
                    <UserInfo>
                        <img src={user.pictureUrl} alt="user-avatar" />
                        <h4>{user.username}</h4>
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