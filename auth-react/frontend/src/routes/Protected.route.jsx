import {Navigate} from "react-router-dom";
import {Loading} from "../components/Loading";
import UseAuth from "../hooks/UseAuth";

export const Protected = ({children}) => {
    const {loading, isAuth} = UseAuth();

    if (loading) {
        return <Loading />;
    }

    if (!isAuth) {
        return <Navigate to={"/login"} replace />;
    }

    return children;
};
