import { Router } from "express";
import {getTransactions, registerTransactions } from "../controllers/transactions.controllers.js";
import { authValidationToken } from "../middlewares/authValidation.middleware.js";
import { transactionsSchemaValidation } from "../middlewares/transactions.middleware.js";

const router = Router();

router.use(authValidationToken);

router.post("/transactions", transactionsSchemaValidation, registerTransactions);
router.get("/transactions", getTransactions);

export default router;