import {createUser} from "../service/register.service.js";

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
