import React, {useEffect, useState} from "react"

export const AuthContext = React.createContext({})

export const AuthProvider = (props) =>{

    let [token, setToken] = useState({})
    const [user, setUser] =React.useState({
        username:'',
        token:'',
        pictureUrl:''
    })


useEffect(()=>{

    const userStorage = localStorage.getItem('user');
    if(userStorage){
        setUser(JSON.parse(userStorage))
    }
},[])


    return(

        <AuthContext.Provider value={{user, setUser, token, setToken}}>
            {props.children}
        </AuthContext.Provider>

    )
    
}