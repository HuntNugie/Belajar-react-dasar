import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function UseAuth(){
    const auth = useContext(AuthContext);
    return auth
}