import React, {useState} from "react"

export const AuthContext = React.createContext({})

export const AuthProvider = (props) =>{

    let [token, setToken] = useState({})

    return(

        <AuthContext.Provider value={{token, setToken}}>
            {props.children}
        </AuthContext.Provider>

    )
    
}