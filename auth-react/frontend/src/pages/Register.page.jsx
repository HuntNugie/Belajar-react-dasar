import {useState} from "react";
import {Navlink} from "../components/Navlink";
import UseAuth from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const {handleRegister} = UseAuth();
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirm_password: "",
        nama: "",
        nim: "",
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const handleSUbmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await handleRegister(form);
            navigate("/login");
        } catch (error) {
            error.error.response.data.error.map(el=>{
                console.log(el.msg)
            })
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h4 className="text-center mb-4">Register Admin</h4>
            <form onSubmit={handleSUbmit}>
                <div className="mb-2">
                    <label className="form-label">Nama</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setForm((prev) => ({...prev, nama: e.target.value}))}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">NIM</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setForm((prev) => ({...prev, nim: e.target.value}))}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        onChange={(e) => setForm((prev) => ({...prev, email: e.target.value}))}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setForm((prev) => ({...prev, password: e.target.value}))}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setForm((prev) => ({...prev, confirm_password: e.target.value}))}
                    />
                </div>
                <button className="btn btn-dark w-100" disabled={loading}>{loading ? "tunggu sebentar" : "Register"}</button>
            </form>
            <p className="text-center mt-3">
                Sudah punya akun?
                <Navlink name={"login"} to={"/login"} />
            </p>
        </>
    );
}
