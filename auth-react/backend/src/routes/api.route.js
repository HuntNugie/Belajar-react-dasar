import { Router } from "express";
import authRoute from "./auth.route.js";

const apiRoute = Router();

apiRoute.use("/auth",authRoute)

export default apiRoute