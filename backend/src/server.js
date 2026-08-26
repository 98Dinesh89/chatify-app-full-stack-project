import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";


dotenv.config();


const app = express();
const PORT = process.env.PORT || 6767;


app.use(express.json()); //req.body


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT, () => {
    console.log("Server is running at port: " + PORT + " -----------------------------------------------------------------------------");
    connectDB();
});