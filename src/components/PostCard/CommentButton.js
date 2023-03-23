import styled from 'styled-components';
import { AiOutlineComment } from 'react-icons/ai/index.js';

export default function CommentButton(props){
    const {commentCount} = props

    return(
        <Container>

            <div className='commentButton' data-test="comment-btn">
                <AiOutlineComment />
            </div>
            
            <p data-test="comment-counter">{commentCount} comments</p>

        </Container>
        
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 15px 0 15px 0;

    .commentButton{
        font-size: 30px;
        color: #FFFFFF;
    }
    

`