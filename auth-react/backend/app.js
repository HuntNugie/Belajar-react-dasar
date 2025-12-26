import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import route from "./src/routes/routes.js";
import { Log } from "./src/middlewares/log.middleware.js";

const app = express();

// setup untuk cors
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

// setup untuk menerima body json
app.use(express.json())

// setup untuk cookie parser
app.use(cookieParser())


// untuk route
app.use(Log,route)

export default app;