import { Link } from "react-router-dom";
import { Navlink } from "../components/Navlink";

export default function Login() {
    return (
        <>
            <h4 className="text-center mb-4">Login Admin</h4>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="email@example.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="********" />
                </div>
                <button className="btn btn-dark w-100"> <Link to={"/dashboard"}>Dashboard</Link> </button>
            </form>
            <p className="text-center mt-3">
                Belum punya akun?
                <Navlink name={"Register"} to={"/register"}/>
            </p>
        </>
    );
}
