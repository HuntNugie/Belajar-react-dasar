import {Navlink} from "../components/Navlink";

export default function Register() {
    return (
        <>
            <h4 className="text-center mb-4">Register Admin</h4>
            <form>
                <div className="mb-2">
                    <label className="form-label">Nama</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-2">
                    <label className="form-label">NIM</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-2">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-2">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button className="btn btn-dark w-100">Register</button>
            </form>
            <p className="text-center mt-3">
                Sudah punya akun?
                <Navlink name={"login"} to={"/login"} />
            </p>
        </>
    );
}
