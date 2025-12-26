import {Router} from "express";
import authRoute from "./auth.route.js";

const route = Router();

// ini untuk default route
route.get("/", (req, res) => {
    return res.json({
        status: "ok",
        message: "selamat anda berhasil datang",
    });
});

// ini untuk sistem auth
route.use("/auth", authRoute);

export default route;
