import {
    SectionSearch, ContainerInput,
    ReturnSearch, UsernameBox, IconImage
} from "./styled.js";
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import Context from "../../contexts/auth.js";
import { useContext, useEffect, useState } from 'react';

const SectionSearchInput = ({ display }) => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [er, setEr] = useState("");
    const { user } = useContext(Context);


    useEffect(() => {
        async function getUsernameSearch() {
            if (search && search.length >= 3) {
                try {
                    const requisition = await axios.get(`${process.env.REACT_APP_API_URL}/user/${search}`, {
                        headers: {
                            "Authorization": `Bearer ${user.token}`
                        }
                    });
                    setResult(requisition.data);
                    setEr("");
                } catch (error) {
                    if (error.response.status === 404) {
                        setEr(error.response.data);
                        setResult([]);
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
            <UsernameBox data-test="user-search" key={user_id}>
                <Link
                    key={user_id}
                    to={`/user/${user_id}`}
                    onClick={() => setSearch("")}
                >
                    <IconImage
                        data-test="avatar"
                        src={picture_url}
                        alt={`picture of ${username}`} />
                    <span className='username'>{username}</span>
                </Link>
            </UsernameBox>
        );
    }

    return (
        <SectionSearch display={display}>
            <ContainerInput>
                <DebounceInput
                    placeholder="Search for people and friends"
                    minLength={3}
                    debounceTimeout={300}
                    onChange={event => setSearch(event.target.value)}
                    value={search}
                    data-test="search"
                />
                <BsSearch />
            </ContainerInput>
            <ReturnSearch size={result.length}>
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
    );
}

export default SectionSearchInput