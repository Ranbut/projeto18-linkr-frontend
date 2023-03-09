import { useState } from "react";
import { icons } from "react-icons";
import { HeaderBody } from "./style";
import {AiOutlineSearch} from "react-icons/ai"
import {RiArrowDownSLine} from "react-icons/ri"
export default function Header(){

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
        <HeaderBody>
    <span>linkr</span>

<section>
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
    </section>

    <span>
        <p><RiArrowDownSLine/></p>
<img src="#" alt="foto"/> 
    </span>
        </HeaderBody>
        );
}
