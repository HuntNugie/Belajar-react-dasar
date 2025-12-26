import {body} from "express-validator";
import User from "../models/User.js";
import User_profile from "../models/User_profile.js";
export const regisValid = [
    body("email")
    .notEmpty()
    .withMessage("email tidak boleh kosong")
    .isEmail()
    .withMessage("format email tidak benar")
    .custom(async (value, {req}) => {
        const data = await User.findUnique({
            where: {
                email: value,
            },
        });
        if (data) {
            throw new Error("email sudah di gunakan orang lain");
        }
        return true;
    }),
    body("password").notEmpty().withMessage("password tidak boleh kosong"),
    body("confirm_password")
    .notEmpty()
    .withMessage("konfirmasi password tidak boleh kosong")
    .custom((value, {req}) => {
        if (req.body.password !== value) {
            throw new Error("konfirmasi password dan password tidak sama");
        }
        return true;
    }),
    body("nama")
    .notEmpty()
    .withMessage("nama tidak boleh kosong")
    .trim()
    .matches(/^[\p{L}\s'-]+$/u)
    .withMessage("nama tidak valid"),
    body("nim")
    .notEmpty()
    .withMessage("nim tidak boleh kosong")
    .trim()
    .custom(async (value, {req}) => {
        const isAda = await User_profile.findUnique({
            where: {nim: value},
        });
        if (isAda) {
            throw new Error("nim tersebut sudah di gunakan orang lain");
        }
        return true;
    }),
];
