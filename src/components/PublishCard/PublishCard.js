import { pushPostAPI } from "../../api/pushPostAPI.js";
import { Form, FormBody, Inputs, PublicationCard, UserAvatar } from "./style";
import { useContext, useState } from "react";
import Context from "../../contexts/auth.js";

export default function PublishCard({ userImage, userPosts, getPosts }) {

    const { user } = useContext(Context);


    const [pressed, setPressed] = useState(false);

    const [post, setPost] = useState({
        link: '',
        message: ''
    });

    async function publish(event) {
        event.preventDefault();

        setPressed(true);

        const pushPostRes = await pushPostAPI(user.token, post);
        if (!pushPostRes.success) {
            setPressed(false);
            alert("There was an error publishing your link");
            return (pushPostRes.error);
        };

        setPost({
            link: '',
            message: ''
        });

        getPosts();
        setPressed(false);
    }

    return (
        <PublicationCard data-test="publish-box">
            <UserAvatar><img src={userImage} alt="user-avatar" /></UserAvatar>
            <FormBody>
                <h6>What are you going to share today?</h6>
                <Form onSubmit={publish}>
                    <Inputs>
                        <input
                            data-test="link"
                            disabled={pressed}
                            required
                            type="text"
                            placeholder="http://..."
                            value={post.link}
                            onChange={e => setPost({ ...post, link: e.target.value })}
                        />
                        <input
                            data-test="description"
                            disabled={pressed}
                            required
                            type="text"
                            placeholder="Awesome article about #javascript"
                            value={post.message}
                            onChange={e => setPost({ ...post, message: e.target.value })}
                        />
                        <button
                            data-test="publish-btn"
                            disabled={pressed}
                            type="submit"
                        > {pressed ? "Publishing..." : "Publish"}</button>
                    </Inputs>
                </Form>
            </FormBody>
        </PublicationCard>
    );

}