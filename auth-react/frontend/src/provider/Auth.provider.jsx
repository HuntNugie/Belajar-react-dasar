import { useState } from "react";
import AuthContext from "../context/AuthContext";
import { Register } from "../services/Auth.service";

export default function AuthProvider({children}){
const [user,setUser] = useState({});



const handleRegister = async(payload)=>{
    try {
        const register = await Register(payload)
        setUser(register)
    } catch (error) {
        console.log(error)
        throw {error};
    }
}


    return <AuthContext.Provider value={{user,handleRegister}}>
        {children}
    </AuthContext.Provider>
}