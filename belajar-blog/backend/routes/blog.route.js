import { Router } from "express";
import { index, show } from "../controllers/BlogController.js";

const blogRoute = Router();

// untuk filter mau berapa banyak
blogRoute.get("/query",show)

// untuk mengambil seluruh nya
blogRoute.get("/all",index)

export default blogRoute