import {Router} from "express"
import blogRoute from "./blog.route.js";

const route = Router();

route.use("/blog",blogRoute)

export default route