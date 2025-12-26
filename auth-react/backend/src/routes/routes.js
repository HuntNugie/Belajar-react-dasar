import {Router} from "express";
import apiRoute from "./api.route.js";

const route = Router();

// ini untuk default route
route.get("/", (req, res) => {
    return res.json({
        status: "ok",
        message: "selamat anda berhasil datang",
    });
});

route.use("/api", apiRoute);

export default route;
