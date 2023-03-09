import { useNavigate } from "react-router-dom";
import { HeaderBody } from "./style";
import { BsChevronDown } from 'react-icons/bs';
import { useState } from "react";
import OutBtn from "./OutBtn";

export default function Header({ userImage, token, setToken }) {

    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <HeaderBody>

                <div className="left">
                    <h4>linkr</h4>
                </div>

                <div className="right">
                    <BsChevronDown onClick={()=> setIsVisible(!isVisible)}/>
                    <img alt="userIcon" src={userImage} />
                </div>

            </HeaderBody >

            { isVisible ? <OutBtn token={token} setToken={setToken}/> : ""}
            
        </>

    );
}