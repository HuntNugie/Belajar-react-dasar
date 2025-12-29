import { useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import { Loading } from "../Loading";

export const Navbar = () => {
    const {handleLogout} = UseAuth();
    const [loading,setLoading] = useState(false);

    const handleKlik = async(e)=>{
        e.preventDefault();
        try {
            setLoading(true)
            await handleLogout();
        } finally {
            setLoading(false)
        }    
    }

    if(loading){
        return <Loading/>
    }
    return (
        <>
            <nav className="navbar navbar-dark bg-black">
                <div className="container-fluid">
                    <span className="navbar-brand">Admin Panel</span>
                    <button onClick={handleKlik} className="btn btn-outline-light btn-sm">
                        Logout
                    </button>
                </div>
            </nav>
        </>
    );
};
