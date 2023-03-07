import { useState } from "react";
import Header from "../../components/Header/Header";
import { Form, FormBody, Inputs, PublicationPageBody, PublicationCard, UserAvatar, Body } from "./style";
import test_image from "../../assets/test-user-avatar.png";
import PostCard from "../../components/PostCard/PostCard";

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

    const [pressed, setPressed] = useState(false);
    const [post, setPost] = useState({
        linkShared: '',
        text: ''
      });

      async function publish(event){
        event.preventDefault();

        setPressed(true);
        setuserPosts(userPosts => [...userPosts, post]);
        setPressed(false);
        setPost({
            linkShared: '',
            text: ''
          });
    }

    return(
        <Body>
            <Header />
            <PublicationPageBody>
                <h4>timeline</h4>
                <PublicationCard>
                    <UserAvatar><img src={test_image} alt="user-avatar" /></UserAvatar>
                    <FormBody>
                    <h6>What are you going to share today?</h6>
                    <Form onSubmit={publish}>
                        <Inputs>
                            <input disabled={pressed} required type="text" placeholder="http://..." value={post.linkShared} onChange={e => setPost({...post, linkShared: e.target.value})}/>
                            <input disabled={pressed} required type="text" placeholder="Awesome article about #javascript" value={post.text} onChange={e => setPost({...post, text: e.target.value} )}/>
                            <button disabled={pressed} type="submit"> {pressed ? "Publishing..." : "Publish"}</button>
                        </Inputs>
                    </Form>
                    </FormBody>
                </PublicationCard>
                {userPosts.map(
                    (postProp) => <PostCard userName={userName} userAvatar={test_image} userPost={postProp}/>
                )}
            </PublicationPageBody>
        </Body>
    );
}