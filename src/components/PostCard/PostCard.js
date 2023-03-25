import axios from "axios";
import { useState, useRef, useEffect, useContext } from "react";
import Modal from "react-modal";
import { ReactTagify } from "react-tagify";
import { Link, useNavigate } from "react-router-dom";
import { TbTrashFilled } from "react-icons/tb";
import { BiRepost } from "react-icons/bi";
import { TiPencil } from "react-icons/ti";
import { putPostEditAPI } from "../../api/putPostEditAPI";
import LikeButton from "./LikeButton.js";
import CommentButton from "./CommentButton.js";
import CommentZone from "../CommentZone/CommentZone.js";
import Context from "../../contexts/auth.js";
import ShareButton from "./ShareButton.js";
import LinkPreview from "../LinkPreview/LinkPreview.js";
import {
    PostBody, PostInfo, UserAvatar,
    Options, EditField,
    ModalBox, customStyles, ModalButton, PostContainer, ShareHeader
} from "./styled.js";

export default function PostCard({ getPosts, currentUser, userPost }) {

    const { user } = useContext(Context);
    const [message, setMessage] = useState(userPost.message);
    const [isEditing, setEditing] = useState(false);
    const [pressed, setPressed] = useState(false);
    const navigate = useNavigate();
    const [deleteModal, setDeleteModal] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    const [commentCount, setCommentCount] = useState(0);;
    const [countTrigger, setCountTrigger] = useState(commentCount);
    const inputRef = useRef(null);
    const renderedText =
        <ReactTagify
            tagStyle={{
                color: "#FFFFFF",
                cursor: "pointer"
            }}
            tagClicked={(tag) => navigate(`/hashtag/${tag.replace("#", "")}`)}
        >
            {message}
        </ReactTagify>;


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setPressed(true);
            edit(event.target.value);
        }
        if (event.key === 'Escape')
            setEditing(false);
    };

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }

    }, [isEditing]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/get-comments/${userPost.id}`)
            .then((res) => {
                setCommentCount(res.data.length)
                    ;
            })
            .catch((err) => {
                console.log('get-comments retornou ' + err.message);
            });
    }, [countTrigger]);

    function handleDeleteModal() {
        setDeleteModal(!deleteModal);
    }

    function deletePost() {
        axios.delete(`${process.env.REACT_APP_API_URL}/posts/delete/${userPost.id}`)
            .then(() => {
                handleDeleteModal();
                getPosts();
            })
            .catch((err) => {
                alert(err.response.data);
            });
    }

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

    function toggleCommentZone() {
        if (user.token) {
            setOpenComment(!openComment);
        } else {
            alert("Faça login para acessar os comentários.");
        }
    }

    return (
        <PostContainer>
            {(userPost.repostUserName) ?
                <ShareHeader>
                    <BiRepost /> Re-posted by {userPost.repostUserName}
                </ShareHeader>
                : ""
            }
            <PostBody data-test="post">
                <UserAvatar>
                    <img
                        title={userPost.username}
                        src={userPost.pictureUrl}
                        alt="user-avatar" />

                    <LikeButton postId={userPost.id} />

                    <div onClick={toggleCommentZone}>
                        <CommentButton commentCount={commentCount} setCommentCount={setCommentCount} />
                    </div>

                    <ShareButton postId={userPost.id} />
                </UserAvatar>
                <PostInfo>
                    <Options>
                        <h6 data-test="username">{userPost.username}</h6>
                        <div>{renderPostOptions()}</div>
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
                </PostInfo>
            </PostBody>
            <Modal
                isOpen={deleteModal}
                style={customStyles}
                contentLabel="Delete Modal"
                ariaHideApp={false}
            >
                <ModalBox>
                    <h2>Are you sure you want
                        <br /> to delete this post?</h2>
                    <div>
                        <ModalButton
                            type="cancel"
                            data-test="cancel"
                            onClick={handleDeleteModal}>
                            No, go back
                        </ModalButton>
                        <ModalButton
                            type="confirm"
                            data-test="confirm"
                            onClick={deletePost}>
                            Yes, delete it
                        </ModalButton>
                    </div>
                </ModalBox>
            </Modal>
            {openComment ? <CommentZone postId={userPost.id} countTrigger={countTrigger} setCountTrigger={setCountTrigger} /> : ""}
        </PostContainer>
    );
}