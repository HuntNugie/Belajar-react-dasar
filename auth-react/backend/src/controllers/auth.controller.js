import {Login} from "../service/login.service.js";
import {createUser} from "../service/register.service.js";
import {ttd} from "../utils/jwt.js";

export const register = async (req, res) => {
    try {
        const data = await createUser(req.body);
        return res.status(200).json({
            status: "ok",
            data,
        });
    } catch (error) {
        return res.status(400).json(error);
    }
};

export const checkMe = (req, res) => {
    return res.status(200).json(req.payload);
};

export const login = async (req, res) => {
    try {
        const result = await Login(req.body);
        const token = ttd(result);
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            maxAge: 60 * 10 * 1000,
        });
        return res.status(200).json(result);
    } catch (error) {
        return res.status(401).json(error);
    }
};
