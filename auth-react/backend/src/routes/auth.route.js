import { Router } from "express";
import { regisValid } from "../validation/register.validation.js";
import { handleValidation } from "../middlewares/handleValidation.middleware.js";
import { checkMe, login, register } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { loginValid } from "../validation/login.valid.js";

const authRoute = Router();


// untuk checkme
authRoute.get("/me",authMiddleware,checkMe)

// untuk register
authRoute.post("/register",regisValid,handleValidation,register)

// untuk login
authRoute.post("/login",loginValid,handleValidation,login)
export default authRoute;