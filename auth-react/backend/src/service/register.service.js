import User from "../models/User.js";
import {hashPassword} from "../utils/hashing.js";

export const createUser = async (data) => {
    try {
        const hashedPass = await hashPassword(data.password);
        const add = await User.create({
            data: {
                email: data.email,
                password: hashedPass,
                profile: {
                    create: {
                        nama: data.nama,
                        nim: data.nim,
                    },
                },
            },
            include: {
                profile: true,
            },
        });
        return add;
    } catch (error) {
        throw {
            error
        }
    }
};
