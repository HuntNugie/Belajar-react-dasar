import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Admin/Navbar";

export default function AdminLayout() {
    return (
        <>
            <Navbar/>
            <div className="container mt-5">
                <div className="card bg-secondary text-light shadow">
                    <div className="card-body text-center">
                       <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}
