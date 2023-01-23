import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dayjs from "dayjs";

const app = express();

app.use(express.json());
app.use(cors());
app.use(authRoutes);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
