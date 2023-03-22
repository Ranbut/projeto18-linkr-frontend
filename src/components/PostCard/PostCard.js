import { Link, useNavigate } from "react-router-dom";
import LinkPreview from "../LinkPreview/LinkPreview";
import { PostBody, PostInfo, UserAvatar, SpacingMarging, Options, EditField, ModalBox, PostContainer } from "./style";
import { AiOutlineHeart } from "react-icons/ai";
import { TbTrashFilled } from "react-icons/tb";
import { TiPencil } from "react-icons/ti";
import { useState, useRef, useEffect, useContext } from "react";
import { putPostEditAPI } from "../../api/putPostEditAPI";
import { ReactTagify } from "react-tagify";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import CommentZone from "../CommentZone/CommentZone";
import axios from "axios";
import Modal from "react-modal";
import Context from "../../contexts/auth.js";

export default function PostCard({ getPosts, currentUser, userPost }) {

    const { user, setUser } = useContext(Context);
    const [message, setMessage] = useState(userPost.message);
    const [isEditing, setEditing] = useState(false);
    const [pressed, setPressed] = useState(false);
    const navigate = useNavigate();
    const [deleteModal, setDeleteModal] = useState(false);
    const [openComment, setOpenComment] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
    };

    function handleDeleteModal() {
        setDeleteModal(!deleteModal);
    }

    function deletePost() {
        axios.delete(`${process.env.REACT_APP_API_URL}/posts/delete/${userPost.id}`)
            .then(() => {
                handleDeleteModal()
                getPosts()
            })
            .catch((err) => {
                alert(err.response.data);
            })
    }


    //Aqui pode ser também ajustado para fazer as tags links com parâmetros, selecionando as hashtags

    const renderedText =
        <ReactTagify
            tagStyle={{
                color: "#FFFFFF",
                cursor: "pointer"
            }}
            tagClicked={(tag) => navigate(`/hashtag/${tag.replace("#", "")}`)}
        >
            {message}
        </ReactTagify>

    async function edit(messageData) {
        const pushPostRes = await putPostEditAPI(user.token, messageData, userPost.id);
        if (!pushPostRes.success) {
            alert("There was an error editing your post message");
            setPressed(false);
            return (pushPostRes.error);
        }
        else {
            setMessage(messageData);
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

                    <TiPencil data-test="edit-btn" onClick={() => setEditing(!isEditing)} title="Editar Post" style={{ marginLeft: '-50px', marginTop: '23px' }} color='white' size='20px' />
                    <TbTrashFilled
                        data-test="delete-btn"
                        title="Deletar Post"
                        style={{ marginLeft: '12.53px', marginTop: '23px' }}
                        color='white' size='20px'
                        onClick={handleDeleteModal}
                    />

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

    return (
        <PostContainer>
        <PostBody data-test="post">
            <UserAvatar>
                <img
                    title={userPost.username}
                    src={userPost.pictureUrl}
                    alt="user-avatar" />
                <LikeButton postId={userPost.id} />
                <CommentButton />
            </UserAvatar>
            <PostInfo>
                <Options>
                    <h6 data-test="username">{userPost.username}</h6>
                    <>{renderPostOptions()}</>
                </Options>
                {isEditing ?
                    <EditField
                        data-test="edit-input"
                        disabled={pressed}
                        ref={inputRef}
                        onKeyDown={handleKeyDown}
                    /> :
                    <p data-test="description">{renderedText}</p>
                }
                <Link data-test="link" to={userPost.link} style={{ textDecoration: 'none' }}>
                    <LinkPreview link={userPost} />
                </Link>
                <SpacingMarging />
            </PostInfo>
            <Modal
                isOpen={deleteModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ModalBox>
                    <h2>Deseja realmente apagar o post?</h2>
                    <div>
                        <button data-test="cancel" onClick={handleDeleteModal}>Cancelar</button>
                        <button data-test="confirm" onClick={deletePost}>Apagar</button>
                    </div>
                </ModalBox>
            </Modal>
        </PostBody>
        {openComment ?  <CommentZone /> : ""}
        </PostContainer>
    );
}