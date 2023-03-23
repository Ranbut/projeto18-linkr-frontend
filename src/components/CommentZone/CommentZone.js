import styled from "styled-components"
import axios from "axios";
import Comment from "./Comment"
import InputBox from "./InputBox"

import { useContext, useEffect, useState } from "react";
import Context from "../../contexts/auth.js";


export default function CommentZone(props){
    const { user } = useContext(Context);
    const {postId, countTrigger, setCountTrigger} = props

    const [comments, setComments] = useState([])
    //const [commentCount, setCommentCount] = useState(comments.length)

    const config = {
        headers: {
            Authorization: 'Bearer ' + user.token
        }
    };

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/get-comments/${postId}`, config)
        .then((res) => {
            setComments(res.data)
        ;
        })
        .catch((err) => {
            console.log(err);
        });
    },[comments])

    return(
        <Container data-test="comment-box">

        {comments.length===0 ? "" : 
        
            comments.map((c,i)=>

                <Comment 
                key={i}
                postId={c.postId}
                postOwnerId={c.postOwnerId}
                commentId={c.commentId}
                userId={c.userId}
                username={c.username}
                pictureUrl={c.pictureUrl}
                message={c.message}
                />

            )
        
        
        
        
        }

        
         {user.token ? <InputBox  postId={postId} countTrigger={countTrigger} setCountTrigger={setCountTrigger}/> : ""}
        </Container>
    )
}


export const Container = styled.div`
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    background: #1E1E1E;
    border-radius: 0 0  16px 16px;
    margin-top: -8px;
    padding: 0 0 25px 0;
    `
