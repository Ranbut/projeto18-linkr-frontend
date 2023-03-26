import {
    HeaderBody
} from "./styled.js";
import OutBtn from "./OutBtn";
import { useContext, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Context from "../../contexts/auth.js";
import SectionSearchInput from "../SearchNameInput/SectionSearch.js";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {

    const { user, setUser } = useContext(Context);
    const [isVisible, setIsVisible] = useState(false);
    const [chevronSide, setChevronSide] = useState(true);
    const navigate = useNavigate();
    
    function handleChevron() {
        setIsVisible(!isVisible);
        setChevronSide(!chevronSide);
    }

    return (
        <>
            <HeaderBody>
                <h4 onClick={() => navigate("/timeline")}>Linkr</h4>
                <SectionSearchInput />
                <div className="right">
                    {chevronSide ? <BsChevronDown /> : <BsChevronUp />}
                    <img
                        data-test="avatar"
                        onClick={() => handleChevron()}
                        alt="userIcon"
                        src={user.pictureUrl}
                    />
                </div>

            </HeaderBody>
            {isVisible ? <OutBtn token={user.token} setToken={setUser} /> : ""}
        </>
    );
}