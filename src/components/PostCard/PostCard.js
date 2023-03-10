import { Link, useNavigate } from "react-router-dom";
import LinkPreview from "../LinkPreview/LinkPreview";
import { PostBody, PostInfo, UserAvatar, SpacingMarging, Options, EditField } from "./style";
import { AiOutlineHeart } from "react-icons/ai";
import { TbTrashFilled } from "react-icons/tb";
import { TiPencil } from "react-icons/ti";
import { useState, useRef, useEffect, useContext } from "react";
import { putPostEditAPI } from "../../api/putPostEditAPI";
import { AuthContext } from "../../contexts/auth";
import { ReactTagify } from "react-tagify";


export default function PostCard({ currentUser, userPost }) {

    const { token } = useContext(AuthContext);
    const [message, setMessage] = useState(userPost.message);
    const [isEditing, setEditing] = useState(false);
    const [pressed, setPressed] = useState(false);
    const navigate = useNavigate();


    //Aqui pode ser também ajustado para fazer as tags links com parâmetros, selecionando as hashtags

    const renderedText =
        <ReactTagify
            tagStyle={{
                color: "#FFFFFF",
                cursor: "pointer"
            }}
            tagClicked={(tag) => navigate(`/hashtag/${tag.replace("#", "")}`)}
            data-test="description"
        >
            {message}
        </ReactTagify>


    function getHashTags(string) {
        const words = string.split(' ');
        const hashtags = [];
        for (let i = 0; i < words.length; i++) {
            if (words[i].startsWith('#')) {
                hashtags.push(words[i]);
            }
        }
        return hashtags;
    }

    async function edit(messageData) {

        const checkMessage = getHashTags(messageData);

        if (checkMessage.length !== 0) {
            setPressed(false);
            return alert("You can't edit or add hashtags of the post.\nOnly the main message are allowed.");
        }

        const hashtagsMessage = getHashTags(message);

        const pushPostRes = await putPostEditAPI(token, messageData, hashtagsMessage, userPost.id);
        if (!pushPostRes.success) {
            alert("There was an error editing your post message");
            setPressed(false);
            return (pushPostRes.error);
        }
        else {
            setMessage(messageData + " " + hashtagsMessage.join(' '));
            setEditing(false);
            setPressed(false);
            return;
        }
    }

    function renderPostOptions() {

        const isFromUser = currentUser === userPost.userId;

        if (isFromUser) {
            return (
                <>

                    <TiPencil data-test="edit-btn" onClick={() => setEditing(!isEditing)} title="Editar Post" style={{ marginLeft: '-50px' ,marginTop: '23px'}} color='white' size= '20px'/>
                    <TbTrashFilled data-test="delete-btn" title="Deletar Post" style={{ marginLeft: '12.53px' ,marginTop: '23px'}} color='white' size= '20px'/>

                </>
            );
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setPressed(true);
            edit(event.target.value);
        }
        if (event.key === 'Escape')
            setEditing(false);
    };

    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    return(
        <PostBody data-test="post">
            <UserAvatar>
                <img 
                title={userPost.username} 
                src={userPost.pictureUrl} 
                alt="user-avatar" 
                />
                <AiOutlineHeart 
                data-test="like-btn" 
                title="Like Post" 
                style={{marginLeft: '33px'}} 
                color='white' 
                size= '14px'
                />
                <p data-test="counter">0 likes</p>
            </UserAvatar>
            <PostInfo>
                <Options>
                    <h6 data-test="username">{userPost.username}</h6>
                    <>{renderPostOptions()}</>
                </Options>
                {isEditing ? <EditField data-test="edit-input" disabled={pressed} ref={inputRef} onKeyDown={handleKeyDown} /> : <p>{renderedText}</p>}
                <Link to={userPost.link} style={{ textDecoration: 'none' }}>
                    <LinkPreview data-test="link" link={userPost} />
                </Link>
                <SpacingMarging />
            </PostInfo>
        </PostBody>
    );
}