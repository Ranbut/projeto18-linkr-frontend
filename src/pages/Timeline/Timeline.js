import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import { getPostAPI } from "../../api/getPostAPI.js";
//import { getUserByTokenAPI } from "../../api/getUserByTokenAPI.js";
import { PublicationPageBody, Body } from "./style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import PublishCard from "../../components/PublishCard/PublishCard.js";
//import { AuthProvider } from "../../contexts/auth.js";
//import { UserContext } from "../../contexts/user.js";
//import { useContext } from "react";

export default function Publication(){

    //const { token } = useContext(AuthProvider);

    //const { user, setUser } = useContext(UserContext);

    const [userPosts, setUserPosts] = useState([]);
    
    /*async function getUserInfo (){
        const getUserRes = await getUserByTokenAPI(token);
        if (getUserRes.success) {
             setUser(getUserRes.userInfo); 
             return; 
        }
        else{

        }
    }*/

    async function getPosts (){
        const getPostRes = await getPostAPI();
        if (getPostRes.success) {
            setUserPosts(getPostRes.postsRetrived); 
             return; 
        }
        else{

        }
    }

    useEffect(() => {
        //getUserInfo();
        getPosts();
      }, []);

    console.log(userPosts);

    return(
        <Body>
            <Header />
            <PublicationPageBody>
                <h4>timeline</h4>
                <PublishCard userPosts={userPosts} setuserPosts={setUserPosts}/>
                {userPosts.map(
                    (postProp) => <PostCard userPost={postProp} key={postProp.id}/>
                )}
            </PublicationPageBody>
        </Body>
    );
}