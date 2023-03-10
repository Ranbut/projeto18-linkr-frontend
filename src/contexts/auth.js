import { createContext } from "react"

const Context = createContext({
    username:'',
    token:'',
    pictureUrl:''
});

export default Context;