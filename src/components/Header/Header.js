import { HeaderBody } from "./style";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { AiOutlineSearch } from "react-icons/ai";
import OutBtn from "./OutBtn";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export default function Header({ userImage, token, setToken }) {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [er, setEr] = useState("");
    const [isVisible, setIsVisible] = useState(false)
    const [chevronSide, setChevronSide] = useState(true)

    useEffect(() => {
        async function getUsernameSearch() {
            if (search && search.length >= 3) {
                try {
                    const requisition = await axios.get(`http://localhost:5000/user/${search}`, { headers: { "Authorization": `Bearer ${token.token}` } });
                    setResult(requisition.data);
                    setEr("")
                    console.log(requisition.data, "req");
                } catch (error) {
                    if (error.response.status === 404) {
                        setEr(error.response.data);
                        setResult([])
                    }
                };
            }
            else {
                setResult([]);
            }
        }
        getUsernameSearch();
    }, [search]);


    function handleChevron() {
        setIsVisible(!isVisible)
        setChevronSide(!chevronSide)
    }

    function RenderUsernameResults({ user_id, picture_url, username }) {
        return (
            <UsernameBox key={user_id}>
                <Link key={user_id} to={`/user/${user_id}`} onClick={() => setSearch([])}>
                    <IconImage src={picture_url} alt={`picture of ${username}`}></IconImage>
                    <span className='username'>{username}</span>
                </Link>
            </UsernameBox>
        )
    }

    return (
        <>
            <ContainerHeader>

                <div className="left">
                    <h4>linkr</h4>
                </div>

                <SectionSearch>
                    <ContainerInput>
                        <DebounceInput
                            placeholder="Search for people and friends"
                            minLength={3}
                            debounceTimeout={300}
                            onChange={event => setSearch(event.target.value)}
                            value={search}
                        />
                        <BsSearch />
                    </ContainerInput>
                    <ReturnSearch>
                        {er ?
                            <UsernameBox>
                                <span>{"Person was not found!"}</span>
                            </UsernameBox>
                            :
                            result.map(value => {
                                const { id, picture_url, username } = value

                                return (
                                    <RenderUsernameResults key={id}
                                        user_id={id}
                                        picture_url={picture_url}
                                        username={username}
                                    />)
                            })}
                    </ReturnSearch>
                </SectionSearch>

                <div className="right">
                    {chevronSide ? <BsChevronDown onClick={() => handleChevron()} /> : <BsChevronUp onClick={() => handleChevron()} />}
                    <img alt="userIcon" src={userImage} />
                </div>

            </ContainerHeader >

            {isVisible ? <OutBtn token={token} setToken={setToken} /> : ""}

        </>

    );
}

const ContainerHeader = styled.div`
position: absolute;
top: 13px;
right: 110px;
left: 110px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const SectionSearch = styled.div`
max-width: 563px;
width: 50%;
min-width: 350px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 8px;
background-color:#E7E7E7;
`
const ContainerInput = styled.div`
background-color: #FFFFFF;
width: 99.8%;
display: flex;
justify-content: flex-start;
align-items: center;
border-radius: 8px;
input{
    width: 100%;
    height: 32px;
    border:none;
    padding-left: 10px;
}
svg{
    color: black;
    
    width: 21px;
    height: 21px;
    margin: 10px
}
`
const ReturnSearch = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 10px;
`
const UsernameBox = styled.div`
a{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration:none;
    
    margin: 8px;
}
span{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    
    color: #515151;
}
`;
const IconImage = styled.img`
width: 42px;
height: 42px;
border-radius: 26.5px;
margin: 5px;
`;