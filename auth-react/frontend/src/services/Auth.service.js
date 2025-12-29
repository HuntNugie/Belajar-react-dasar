import api from "../utils/axios";

export const Login = (payload) => {
    return api.post("/api/auth/login", payload);
};

export const Register = (payload) => {
    return api.post("/api/auth/register", payload);
};

