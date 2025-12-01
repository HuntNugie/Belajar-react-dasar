import { Router } from "express";
import { index } from "../controllers/CategoryController.js";

const route = Router();

route.get("/all",index);

export default route
