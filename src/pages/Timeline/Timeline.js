import { useState } from "react";
import Header from "../../components/Header/Header";
import { PublicationPageBody, Body } from "./style";
import PostCard from "../../components/PostCard/PostCard";
import PublishCard from "../../components/PublishCard/PublishCard";
import test_image from "../../assets/test-user-avatar.png";

export default function Publication(){


    //Temp
    const userName = "Juvenal Juvêncio";

    const [userPosts, setuserPosts] = useState([
        {
            linkShared: 'https://medium.com/@pshrmn/a-simple-react-router',
            text: 'Muito maneiro esse tutorial de Material UI com React, deem uma olhada!'
        },
        {
            linkShared: 'https://medium.com/@pshrmn/a-simple-react-router',
            text: 'Muito maneiro esse tutorial de Material UI com React, deem uma olhada!'
        }
    ]);

    return(
        <Body>
            <Header />
            <PublicationPageBody>
                <h4>timeline</h4>
                <PublishCard userPosts={userPosts} setuserPosts={setuserPosts}/>
                {userPosts.map(
                    (postProp) => <PostCard userName={userName} userAvatar={test_image} userPost={postProp}/>
                )}
            </PublicationPageBody>
        </Body>
    );
}