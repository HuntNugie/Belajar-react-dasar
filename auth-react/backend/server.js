import app from "./app.js";
import { config } from "dotenv";
config();

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`sedang berjalan di port ${process.env.SERVER_PORT}`)
})
