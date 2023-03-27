import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import Context from "../../contexts/auth.js";


export default function Comment(props) {
    const { user } = useContext(Context);
    const { postOwnerId, userId, username, message, pictureUrl } = props
    const [followStatus, setFollowStatus] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/followers`, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }).then((res) => {
            if (res.data[0].followId && userId === res.data[0].followId) {
                setFollowStatus("• following")
            }
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])


    function handleUserClick(comUserId) {
        navigate(`/user/${comUserId}`, { replace: true })
    }

    return (
        <Container data-test="comment" >

            <img alt='userPicture' src={pictureUrl} onClick={() => handleUserClick(userId)} />

            <div className='right'>

                <div className='top'>
                    <h1 onClick={() => handleUserClick(userId)}> {username} </h1>
                    <h2> {postOwnerId === userId ? "• post’s author" : followStatus}</h2>
                </div>

                <h3>{message}</h3>
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
        cursor: pointer;
    }

    .right{
        display: flex;
        flex-direction: column;

        .top{
            display: flex;
            margin-bottom: 6px;

            h1{
                font-family: 'Lato';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 17px;
                color: #F3F3F3;
                margin-right: 6px;
                cursor: pointer;
            }

            h2{
                font-family: 'Lato';
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: #565656;
            }
        }

        h3{
            font-family: 'Lato';
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #ACACAC;
        }
    }
    
`