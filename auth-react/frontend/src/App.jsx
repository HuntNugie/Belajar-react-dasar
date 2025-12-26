import {Navigate, Route, Routes} from "react-router-dom";
import AuthLayout from "./layouts/Auth.layouts";
import Login from "./pages/Login.page";
import Register from "./pages/Register.page";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={"/login"} />} />
                <Route element={<AuthLayout/>}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
