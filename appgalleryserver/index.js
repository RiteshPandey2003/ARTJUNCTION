import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import user_route from "./route/user_route.js"
const app = express();
app.use(express.json());

dotenv.config();
app.listen(3001,(req,res) => {
    console.log("server listen")
})
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("database connnected");
})

app.use('/api/user',user_route);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    return res.status(statusCode).json({
     success : false,
     message,
     statusCode : statusCode
    });
 })