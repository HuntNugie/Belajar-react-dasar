import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <div className="card bg-secondary text-light shadow" style={{width: 400}}>
                    <div className="card-body">
                       <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}
