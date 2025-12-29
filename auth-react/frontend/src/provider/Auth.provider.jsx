import {useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import {Login, Logout, Register} from "../services/Auth.service";
import axios from "axios";

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const request = async () => {
            try {
                const check = await axios.get(`${import.meta.env.VITE_SERVER_BACKEND}/api/auth/me`, {
                    withCredentials: true,
                });
                const data = check.data;
                setUser(data);
                setIsAuth(true);
            } catch (error) {
                console.log(error.response.data);
                setIsAuth(false);
            } finally {
                setLoading(false);
            }
        };
        request();
    }, []);

    useEffect(()=>{
        window.addEventListener("logout",handleLogout);
        return ()=>{
            window.removeEventListener("logout",handleLogout)
        }
    },[])
    const handleRegister = async (payload) => {
        const res = await Register(payload);
        return res;
    };

    const handleLogin = async (auth) => {
        try {
            const res = await Login(auth);
            setUser(res.data);
            setIsAuth(true);
        } catch {
            setIsAuth(false);
            setUser(null)
        }
    };

    const handleLogout = async()=>{
        try {
            await Logout();
            setIsAuth(false);
            setUser(null)
        } catch {
            console.log("gagal")
        }
    }
    return <AuthContext.Provider value={{user, handleRegister, loading, isAuth,handleLogin,handleLogout}}>{children}</AuthContext.Provider>;
}


