import { Router } from "express";
import { index } from "../controllers/BlogController.js";

const blogRoute = Router();

blogRoute.get("/all",index)

export default blogRoute