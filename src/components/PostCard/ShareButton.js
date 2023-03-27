import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Context from "../../contexts/auth.js";
import { BiRepost } from "react-icons/bi";
import { ModalBox, ModalButton, customStyles } from './styled.js';
import Modal from 'react-modal';

export default function ShareButton(props) {
    const [shared, isShared] = useState(false);
    const [listShares, setListShares] = useState([]);
    const { user } = useContext(Context);
    const [shareModal, setShareModal] = useState(false);

    function handleShareModal() {
        setShareModal(!shareModal);
    }

    function ShareVerify() {
        axios.get(`${process.env.REACT_APP_API_URL}/share/${props.postId}`,
            {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            .then((r) => {
                isShared(r.data.userSharedThisPost);
                setListShares(r.data.shares);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        ShareVerify()
    }, []);

    function share() {
        axios.post(`${process.env.REACT_APP_API_URL}/share/${props.postId}`, {}, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
            .then(() => {
                ShareVerify();
                handleShareModal();
            })
            .catch((err) => {
                alert(err.message);
                handleShareModal();
            });

    };

    return (
        <Content>
            <ShareDiv
                data-test="repost-btn"
                onClick={handleShareModal}
                shared={shared}>
                {shared
                    ?
                    <BiRepost color='green' />
                    :
                    <BiRepost color='white' />}
            </ShareDiv>
            <div>
                <p
                    data-test="repost-counter"
                    id={`reposts-box ${props.postId}`}
                >
                    {listShares.length} re-posts
                </p>

            </div>
            <Modal
                isOpen={shareModal}
                style={customStyles}
                contentLabel="Share Modal"
                ariaHideApp={false}
            >
                <ModalBox>
                    <h2>Do you want to re-post
                        <br /> this link? </h2>
                    <div>
                        <ModalButton
                            type="cancel"
                            data-test="cancel"
                            onClick={handleShareModal}>
                            No, cancel
                        </ModalButton>
                        <ModalButton
                            type="confirm"
                            data-test="confirm"
                            onClick={() => share()}>
                            Yes, share!
                        </ModalButton>
                    </div>
                </ModalBox>
            </Modal>
        </Content>
    )
}

const ShareDiv = styled.div`
    cursor: pointer;
    svg{
        font-size: 30px;
    }
    p{
        font-family: 'Lato', sans-serif;
        -webkit-touch-callout: none;  
        -webkit-user-select: none;    
        -khtml-user-select: none;     
        -moz-user-select: none;       
        -ms-user-select: none;        
        user-select: none;           
    }

`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;

    p{
        font-family: 'Lato', sans-serif;
        -webkit-touch-callout: none;  
        -webkit-user-select: none;    
        -khtml-user-select: none;     
        -moz-user-select: none;       
        -ms-user-select: none;        
        user-select: none;    
    }
`