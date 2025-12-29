import {Navigate, Route, Routes} from "react-router-dom";
import AuthLayout from "./layouts/Auth.layouts";
import Login from "./pages/Login.page";
import Register from "./pages/Register.page";
import AdminLayout from "./layouts/Admin.layouts";
import Dashboard from "./pages/Dashboard.page";
import Guest from "./routes/Guest.route";
import {Protected} from "./routes/Protected.route";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={"/login"} />} />
                <Route
                    element={
                        <Guest>
                            <AuthLayout />
                        </Guest>
                    }
                >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route
                    element={
                        <Protected>
                            <AdminLayout />
                        </Protected>
                    }
                >
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
