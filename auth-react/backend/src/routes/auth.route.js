import { Router } from "express";
import { regisValid } from "../validation/register.validation.js";
import { handleValidation } from "../middlewares/handleValidation.middleware.js";
import { register } from "../controllers/auth.controller.js";

const authRoute = Router();

authRoute.post("/register",regisValid,handleValidation,register)

export default authRoute;