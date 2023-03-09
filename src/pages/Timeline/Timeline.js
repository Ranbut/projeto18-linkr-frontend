import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import { getPostAPI } from "../../api/getPostAPI.js";
import { getUserByTokenAPI } from "../../api/getUserByTokenAPI.js";
import { PublicationPageBody, Body, Loading } from "./style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import PublishCard from "../../components/PublishCard/PublishCard.js";
import { AuthContext } from "../../contexts/auth.js";
import { UserContext } from "../../contexts/user.js";
import { useContext } from "react";

export default function Publication(){

    const { token, setToken } = useContext(AuthContext);
    const [ load, setLoad ] = useState(true);
    const { user, setUser } = useContext(UserContext);
    const [userPosts, setUserPosts] = useState([]);
    
    async function getUserInfo (currentToken){
        const getUserRes = await getUserByTokenAPI(currentToken);
        if (getUserRes.success) {
             setUser(getUserRes.userInfo); 
             return; 
        }
    }

    async function getPosts (){
        const getPostRes = await getPostAPI();
        if (getPostRes.success) {
            setUserPosts(getPostRes.postsRetrived); 
            setLoad(false);
            return; 
        }
    }

    function renderTimeline(){
        if(userPosts.length > 0){
            return(
                <>
                    {userPosts.map(
                        (postProp) => <PostCard userPost={postProp} key={postProp.id}/>
                    )}
                </>
            );
        }
        else{
            return(<Loading>There are no posts yet</Loading>);
        }
    }

    useEffect(() => {
        getUserInfo(token);
        getPosts();
      }, []);

    return(
        <Body>
            <Header userImage={user.pictureUrl} token={token} setToken={setToken}/>
            <PublicationPageBody>
                <h4>timeline</h4>
                <PublishCard userImage={user.pictureUrl} userPosts={userPosts} getPosts={getPosts}/>
                {load ? (<Loading>Loading...</Loading>) : renderTimeline()}
            </PublicationPageBody>
        </Body>
    );
}