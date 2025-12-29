import { Router } from "express";
import { regisValid } from "../validation/register.validation.js";
import { handleValidation } from "../middlewares/handleValidation.middleware.js";
import { checkMe, register } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRoute = Router();


// untuk checkme
authRoute.get("/me",authMiddleware,checkMe)

// untuk register
authRoute.post("/register",regisValid,handleValidation,register)

export default authRoute;