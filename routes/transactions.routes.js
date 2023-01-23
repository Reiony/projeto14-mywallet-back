import { Router } from "express";
import { getTransaction, registerTransaction } from "../controllers/transactions.controllers.js";
import { authValidationToken } from "../middlewares/authValidation.middleware.js";

const router = Router();
router.use(authValidationToken)
router.post("/transactions", registerTransaction);
router.get("/transactions", getTransaction);

export default router;
