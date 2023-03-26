import {
    SectionSearch, ContainerInput,
    ReturnSearch, UsernameBox, IconImage,
    Follow
} from "./styled.js";
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import Context from "../../contexts/auth.js";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const SectionSearchInput = ({ display }) => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [er, setEr] = useState("");
    const { user } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        async function getUsernameSearch() {
            if (search && search.length >= 3) {
                try {
                    const requisition = await axios.get(`${process.env.REACT_APP_API_URL}/user/${search}`, {
                        headers: {
                            "Authorization": `Bearer ${user.token}`
                        }
                    });

                    if (requisition.data === []) {
                        setEr(true);
                        setResult([]);
                    } else {
                        setResult(requisition.data);
                        setEr("");
                    }
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

    function RenderUsernameResults({
        user_id, picture_url, username, follow
    }) {
        return (
            <UsernameBox
                data-test="user-search"
                onClick={() => navigate(`/user/${user_id}`)}
                key={user_id}>
                <Link
                    key={user_id}
                    to={`/user/${user_id}`}
                    onClick={() => setSearch("")}
                >
                    <IconImage
                        data-test="avatar"
                        src={picture_url}
                        alt={`picture of ${username}`}
                    />
                    <span className='username'>{username}</span>
                    {follow ? <Follow>follow</Follow> : <></>}
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
                        const { id, pictureUrl, username, isFollowing } = value
                        return (
                            <RenderUsernameResults
                                key={id}
                                user_id={id}
                                picture_url={pictureUrl}
                                username={username}
                                follow={isFollowing}
                            />)
                    })}
            </ReturnSearch>
        </SectionSearch>
    );
}

export default SectionSearchInput