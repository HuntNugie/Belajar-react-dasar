import express from "express";
import cors from "cors";
import route from "./routes/index.route.js";
import { config } from "dotenv";
config();
// buat app
const app = express();

// buat cors
app.use(cors());
// buat json
app.use(express.json());

// untuk route 
app.use("/api",route);

// untuk server
app.listen(process.env.URL_PORT,()=>{
    console.log(`berjalan di port ${process.env.URL_PORT}`)
});

