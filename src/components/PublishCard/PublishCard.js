import { pushPostAPI } from "../../api/pushPostAPI.js";
import { Form, FormBody, Inputs, PublicationCard, UserAvatar } from "./style";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth.js";

export default function PublishCard({userImage, userPosts, getPosts}){

    const { token } = useContext(AuthContext);

    const [pressed, setPressed] = useState(false);

    const [post, setPost] = useState({
        link: '',
        message: ''
      });

      async function publish(event){
        event.preventDefault();

        setPressed(true);

        console.log(post);
        const pushPostRes = await pushPostAPI(token, post);
        if (!pushPostRes.success) { setPressed(false); alert("There was an error publishing your link"); return (pushPostRes.error); };

        getPosts();
        setPressed(false);
    }

    return(
        <PublicationCard>
        <UserAvatar><img src={userImage} alt="user-avatar" /></UserAvatar>
        <FormBody>
        <h6>What are you going to share today?</h6>
        <Form onSubmit={publish}>
            <Inputs>
                <input disabled={pressed} required type="text" placeholder="http://..." value={post.link} onChange={e => setPost({...post, link: e.target.value})}/>
                <input disabled={pressed} required type="text" placeholder="Awesome article about #javascript" value={post.message} onChange={e => setPost({...post, message: e.target.value} )}/>
                <button disabled={pressed} type="submit"> {pressed ? "Publishing..." : "Publish"}</button>
            </Inputs>
        </Form>
        </FormBody>
    </PublicationCard>
    );

}