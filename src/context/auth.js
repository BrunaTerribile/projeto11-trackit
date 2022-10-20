import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    
    const [user, setUser] = useState({})
    const [userData, setUserData] = useState({})

    function signIn(email, password, name, photo){
        if(email !== '' && password !== ''){
            setUser({
                email: email,
                password: password,
                name: name,
                image: photo
            })
            console.log("dados recebidos com sucesso - auth")
        }  
    }
    
    return (
        <AuthContext.Provider value={{signIn, user, userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}