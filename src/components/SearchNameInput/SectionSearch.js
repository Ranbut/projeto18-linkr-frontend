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

const SectionSearchInput = ({ display }) => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const { user } = useContext(Context);

    useEffect(() => {
        async function getUsernameSearch() {
            if (search.length >= 3) {
                try {
                    const requisition = await axios.get(`${process.env.REACT_APP_API_URL}/user/${search}`, {
                        headers: {
                            "Authorization": `Bearer ${user.token}`
                        }
                    });

                    if (requisition.data === []) {
                        setResult([]);
                    } else {
                        setResult(requisition.data);
                    }
                } catch (error) {
                    if (error.response.status === 404) {
                        setResult([]);
                    }
                };
            } else {
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
                    {follow ? <Follow>following</Follow> : <></>}
                </Link>
            </UsernameBox>
        );
    }

    console.log(search.length, 'search')
    console.log(result.length, 'result')

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
            {
                search.length > 2 && result.length === 0 ?
                    <ReturnSearch size={result.length}>
                        <UsernameBox>
                            <span>Person was not found!</span>
                        </UsernameBox>
                    </ReturnSearch>
                    :
                    search.length > 2 ?
                        <ReturnSearch size={result.length}>
                            {result.map(value => {
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
                        :
                        <></>
            }
        </SectionSearch>
    );
}

export default SectionSearchInput