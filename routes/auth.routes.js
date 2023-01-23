import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { signInBodyValidation, ValidateUserSchema } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/sign-up", ValidateUserSchema, signUp);
router.post("/sign-in",signInBodyValidation, signIn );

export default router;