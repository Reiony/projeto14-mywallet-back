import express from "express";
import cors from "cors";
import authRoutes from "../routes/auth.routes.js"
import transactionRoutes from "../routes/transactions.routes.js"
const app = express();

app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(transactionRoutes);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
