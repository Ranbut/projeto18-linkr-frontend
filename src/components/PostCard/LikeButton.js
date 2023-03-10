import { useContext, useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai/index.js';
import styled from 'styled-components';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import axios from 'axios';
import { AuthContext } from '../../contexts/auth.js';

export default function LikeButton(props){
    const [liked, isLiked] = useState(false);
    const [listLikes, setListLikes] = useState([]);
    const [userId, setUserId] = useState(0);
    const { token } = useContext(AuthContext)
    
    function likeVerify(){
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/like/list/${props.postId}`,
        {headers: {
            "Authorization": `Bearer ${token}`
        }});
        promise.then((r) => {
            isLiked(r.data.userLikedThisPost)
            setListLikes(r.data.likes)
            setUserId(r.data.userId)
        })
    }

    useEffect(() =>{
        likeVerify()
        console.log(listLikes)
    }, [])

    function like(){
       
            const promise = axios.post(`${process.env.REACT_APP_API_URL}/like/${props.postId}`, 
            {}, {headers: {
                Authorization: `Bearer ${token}`
            }})
            promise.then(() => {likeVerify();
            return});
            promise.catch((err) => console.log(err))

    };

    function tooltipMessage(){
        if (liked) {
            if (listLikes.length !== 0) {
                const newArray = listLikes.filter(i => i.id !== userId)
                switch (listLikes.length) {
                    case 1:
                        return `Você`
                    case 2:
                        return `Você e ${newArray[0].username}`
                    case 3:
                        return `Você, ${newArray[0].username} e outra pessoa`
                    default:
                        return `Você, ${newArray[0].username} e outras ${newArray.length - 1} pessoas`
                }
            }
            
        } else{
            if (listLikes.length !== 0) {
                switch (listLikes.length) {
                    case 0:
                        return `Ninguém curtiu isso`
                    case 1:
                        return `${listLikes[0].username}`
                    case 2:
                        return `${listLikes[0].username} e ${listLikes[1].username}`
                    case 3:
                        return `${listLikes[0].username}, ${listLikes[1].username} e outra pessoa`
                    default:
                        return `${listLikes[0].username}, ${listLikes[1].username} e outras ${listLikes.length - 2} pessoas`
                }
            }
        }
    }

    return(
        <Content>
            <LikeDiv onClick={() => like()} liked={liked}>
                {liked 
                ? 
                <AiFillHeart /> 
                : 
                <AiOutlineHeart />}    
            </LikeDiv>
            <div>
                <a id={`like-box `+props.postId}>{listLikes.length} likes</a>
                <Tooltip anchorId={`like-box `+props.postId} content={()=> tooltipMessage()} />  
            </div>
        </Content>
    )
}

const LikeDiv = styled.div`
    cursor: pointer;
    svg{
        font-size: 30px;
        color: ${(props) => (props.liked ? "red" : "white")};
        margin-top: 5px;
    }
    p{
        font-family: 'Lato', sans-serif;
        font-size: 11px;
        line-height: 13px;
        color: white;
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

    a{
        font-family: 'Lato', sans-serif;
        font-size: 11px;
        line-height: 13px;
        color: #FFFFFF; 
        -webkit-touch-callout: none;  
        -webkit-user-select: none;    
        -khtml-user-select: none;     
        -moz-user-select: none;       
        -ms-user-select: none;        
        user-select: none;    
    }
`