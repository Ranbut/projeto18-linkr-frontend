import styled from 'styled-components';
import { SlPaperPlane} from "react-icons/sl";

export default function InputBox(){
    return(
        <Container data-test="comment" >

            <img alt='userPicture' src='https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2023/01/the-last-of-us-tv-series-zombies-infected-explained-1.jpg' />

            <input type='text' placeholder='write a comment...' data-test="comment-input"/>

            <div className='planeIcon'  data-test="comment-submit">
             <SlPaperPlane />
            </div>

        </Container>
        
    )
}


const Container = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px #353535 solid;
    width: 90%;
    margin:10px 40px 1px 40px;
    padding: 12px 12px 16px 0;

    img{
        height: 45px;
        width: 45px;
        border-radius: 304px;
        margin-right:22px;
    }

    input{
        display: flex;
        width:99%;
        align-items: center;
        background: #252525;
        border-radius: 8px 0 8px 8px;
        height: 39px;
        padding-left:12px;
        border-color: transparent;
        color: #ACACAC;

            ::placeholder {
            font-family: 'Lato';
            font-style: italic;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #575757;;
            }

            :focus{
            outline: none;
             background-color: none;
            }
        }

    .planeIcon{
        display: flex;
        height: 39px;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #F3F3F3;
        padding-right:16px;
        background-color: #252525;
        margin-left:-10px;
        border-radius: 8px 8px;
    }
    
`