import {
    HeaderBody, SectionSearch, ContainerInput,
    ReturnSearch, UsernameBox, IconImage, Logo
} from "./style.js";
import OutBtn from "./OutBtn";
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import Context from "../../contexts/auth.js";


export default function SearchBar() {

    const { user, setUser } = useContext(Context);
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [er, setEr] = useState("");
    const [isVisible, setIsVisible] = useState(false)
    const [chevronSide, setChevronSide] = useState(true)
    const [form, setForm] = useState({
        username: '',
    })
    const [input, setInput] = useState('false')

    function handleFilter(e) {
        e.preventDefault()

    }


    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleChevron() {
        setIsVisible(!isVisible)
        setChevronSide(!chevronSide)
    }


    useEffect(() => {
        async function getUsernameSearch() {
            if (search && search.length >= 3) {
                try {
                    const requisition = await axios.get(`http://localhost:5000/user/${search}`, {
                        headers: {
                            "Authorization": `Bearer ${user.token}`
                        }
                    });
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

    function RenderUsernameResults({ user_id, picture_url, username }) {
        return (
            <UsernameBox key={user_id}>
                <Link key={user_id} to={`/user/${user_id}`} onClick={() => setSearch([])}>
                    <IconImage data-test="avatar" src={picture_url} alt={`picture of ${username}`}></IconImage>
                    <span className='username'>{username}</span>
                </Link>
            </UsernameBox>
        )
    }

    return (
        <>
            <HeaderBody>
                <Logo>Linkr</Logo>
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
                                const { id, pictureUrl, username } = value

                                return (
                                    <RenderUsernameResults key={id}
                                        user_id={id}
                                        picture_url={pictureUrl}
                                        username={username}
                                    />)
                            })}
                    </ReturnSearch>
                </SectionSearch>

                <div className="right">
                    {chevronSide ? <BsChevronDown onClick={() => handleChevron()} /> : <BsChevronUp onClick={() => handleChevron()} />}
                    <img data-test="avatar" alt="userIcon" src={user.pictureUrl} />
                </div>

            </HeaderBody>
            {isVisible ? <OutBtn token={user.token} setToken={setUser} /> : ""}
        </>
    )

}
