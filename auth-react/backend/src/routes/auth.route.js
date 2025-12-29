import { Router } from "express";
import { regisValid } from "../validation/register.validation.js";
import { handleValidation } from "../middlewares/handleValidation.middleware.js";
import { checkMe, login, logout, register } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { loginValid } from "../validation/login.valid.js";

const authRoute = Router();


// untuk checkme
authRoute.get("/me",authMiddleware,checkMe)

// untuk register
authRoute.post("/register",regisValid,handleValidation,register)

// untuk login
authRoute.post("/login",loginValid,handleValidation,login)

// untuk logout
authRoute.post("/logout",authMiddleware,logout)
export default authRoute;