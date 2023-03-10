import {
    HeaderBody, SectionSearch, ContainerInput,
    ReturnSearch, UsernameBox, IconImage
} from "./style";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import OutBtn from "./OutBtn";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom';
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
            <HeaderBody>

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

            </HeaderBody >

            {isVisible ? <OutBtn token={token} setToken={setToken} /> : ""}

        </>

    );
}