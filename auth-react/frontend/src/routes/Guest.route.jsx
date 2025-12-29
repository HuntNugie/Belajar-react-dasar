import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import UseAuth from "../hooks/UseAuth";

export default function Guest ({children}){
    const {isAUth,loading} = UseAuth();
    const navigate = useNavigate();
    if(loading){
        return <Loading/>
    }
    if(isAUth){
        navigate("/dashboard")
    }
    return children
}