import styled from "styled-components"
import Comment from "./Comment"
import InputBox from "./InputBox"

import { useContext } from "react";
import Context from "../../contexts/auth.js";


export default function CommentZone(props){
    const { user } = useContext(Context);
    const {postId} = props
    return(
        <Container data-test="comment-box">
         <Comment postId={postId} />
         <InputBox  postId={postId} />
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
