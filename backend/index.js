import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import MemberRoute from "./routes/MemberRoute.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(MemberRoute)

app.listen(process.env.APP_PORT, ()=>{
    console.log('Server up and running...');
});