import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Context from "../../contexts/auth.js";
import { BiRepost } from "react-icons/bi";

export default function ShareButton(props) {
    const [shared, isShared] = useState(false);
    const [listShares, setListShares] = useState([]);
    const { user } = useContext(Context);

    function ShareVerify() {
        axios.get(`${process.env.REACT_APP_API_URL}/share/${props.postId}`,
            {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
        .then((r) => {
            isShared(r.data.userSharedThisPost)
            setListShares(r.data.shares)
        })
        .catch((err) => {
            console.log(err)
        });
    }

    useEffect(() => {
        ShareVerify()
    }, []);

    function share() {

        axios.post(`${process.env.REACT_APP_API_URL}/share/${props.postId}`,
            {}, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        .then(() => {
            ShareVerify();
        })
        .catch((err) => console.log(err));

    };

    return (
        <Content>
            <ShareDiv
                data-test="repost-btn"
                onClick={() => share()} 
                shared={shared}>
                {shared
                    ?
                    <BiRepost color='green' />
                    :
                    <BiRepost color='white'/>}
            </ShareDiv>
            <div>
                <p
                    data-test="repost-counter"
                    id={`reposts-box ${props.postId}`}
                >
                    {listShares.length} re-posts
                </p>

            </div>
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