import styled from "styled-components"
import Comment from "./Comment"
import InputBox from "./InputBox"


export default function CommentZone(){
    return(
        <Container data-test="comment-box">
         <Comment />
         <InputBox />
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
