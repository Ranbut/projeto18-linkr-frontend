import { useNavigate } from "react-router-dom";
import { HeaderBody } from "./style";
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import OutBtn from "./OutBtn";

export default function Header({ userImage, token, setToken }) {

    const [isVisible, setIsVisible] = useState(false)

    const [form,setForm] = useState({
        username:'',
    })



    const [input, setInput] = useState('false')

    function handleFilter(e){
       e.preventDefault()

    }
    

     function handleForm(e){
      setForm({
        ...form,
        [e.target.name] : e.target.value
    })    
    }
    



    return (
        <>
            <HeaderBody>

                <div className="left">
                    <h4>linkr</h4>
                </div>

                <div className="middle">
                { input === true ?
                <></>:

                    <form onSubmit={handleFilter}>
                    <input placeholder="Search for people"
                    name="username" 
                    onChange={handleForm} 
                    value={form.username} 
                    type="text" 
                    required>
                    </input>
                    <button type="submit"><AiOutlineSearch/></button>
                </form>
                    }
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