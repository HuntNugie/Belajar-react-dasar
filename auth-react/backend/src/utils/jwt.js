import jwt from "jsonwebtoken";
import {config} from "dotenv";
config();

export const ttd = (payload) => {
    return jwt.sign(payload, process.env.SECRET_JWT, {expiresIn: "3m"});
};

export const verif = (token) => {
    return jwt.verify(token, process.env.SECRET_JWT);
};
