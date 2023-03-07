import { Form, FormBody, Inputs, PublicationCard, UserAvatar } from "./style";
import { useState } from "react";
import test_image from "../../assets/test-user-avatar.png";

export default function PublishCard({userPosts, setuserPosts}){

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
    );

}