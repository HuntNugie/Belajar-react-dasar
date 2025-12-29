import User from "../models/User.js";
import {cekPassword} from "../utils/hashing.js";

export const Login = async ({email, password}) => {
    const data = await User.findUnique({
        where: {email},
        include: {profile: true},
    });
    const cek = await cekPassword(password, data.password);
    if (!cek) {
        throw new Error("username atau password salah");
    }

    return data;
};
