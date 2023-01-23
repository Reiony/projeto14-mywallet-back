import { Router } from "express";
import { authValidationToken } from "../middlewares/authValidation.middleware";

const router = Router();
router.use(authValidationToken);
router.post("/transactions", registerTransaction);
router.get("/transactions", getTransaction);
export default router;
