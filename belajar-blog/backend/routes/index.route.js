import {Router} from "express"
import blogRoute from "./blog.route.js";
import categoryRoute from "./category.route.js"

const route = Router();

route.use("/blog",blogRoute)
route.use("/category",categoryRoute)

export default route