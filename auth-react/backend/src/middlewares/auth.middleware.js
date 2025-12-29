import {verif} from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({status: "not ok", message: "tidak ada token"});
    }
    try {
        const payload = verif(token);
        req.payload = payload;
        next();
    } catch (error) {
        return res.status(401).json({status: "not ok", message: "token sudah tidak valid"});
    }
};
