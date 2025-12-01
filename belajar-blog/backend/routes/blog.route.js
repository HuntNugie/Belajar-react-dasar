import {Router} from "express";
import {index, show, store,filter} from "../controllers/BlogController.js";

const blogRoute = Router();

// untuk filter mau berapa banyak
blogRoute.get("/query", show);

// untuk mengambil seluruh nya
blogRoute.get("/all", index);

// untuk search blog nya
blogRoute.get("/search",filter);

// untuk tambah data
blogRoute.post("/add-blog", store);
export default blogRoute;
