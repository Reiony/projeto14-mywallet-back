import express from "express";
import cors from "cors";
import usersRoutes from "./routers/userRoute.js"

//Initial Configs
const app = express();
app.use(express.json());
app.use(cors());
app.use(usersRoutes);

const port = 5000;
app.listen (port, ()=>console.log(`Server running at port: ${port}`));