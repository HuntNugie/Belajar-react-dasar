import {useNavigate} from "react-router-dom";
import {Navlink} from "../components/Navlink";
import UseAuth from "../hooks/UseAuth";
import {useEffect, useState} from "react";

export default function Login() {
    const {isAuth, handleLogin} = UseAuth();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await handleLogin(form);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    const navigateTo = useNavigate();
    useEffect(() => {
        if (isAuth) {
            navigateTo("/dashboard");
        }
    }, [isAuth]);
    return (
        <>
            <h4 className="text-center mb-4">Login Admin</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        placeholder="email@example.com"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className="form-control"
                        placeholder="********"
                    />
                </div>
                <button className="btn btn-dark w-100" disabled={loading}>
                    {loading ? "tunggu sebentar" : "Login"}
                </button>
            </form>
            <p className="text-center mt-3">
                Belum punya akun?
                <Navlink name={"Register"} to={"/register"} />
            </p>
        </>
    );
}
