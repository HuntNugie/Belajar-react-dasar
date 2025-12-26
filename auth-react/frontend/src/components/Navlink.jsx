import { Link } from "react-router-dom";

export const Navlink = ({to,name})=>{
    return (<>
    <Link className="text-warning" to={to}>{name}</Link>
    </>)
}