import { Router } from "express";
import { signInBodyValidation } from "../middlewares/signInBodyValidation.middleware.js";
import { signUpBodyValidation } from "../middlewares/signUpBodyValidation.middleware.js";
import {signUpUser, signInUser} from "../controllers/userControllers.js"

const router = Router();

router.post("/sign-up", signUpBodyValidation , signUpUser )
router.post("/sign-in", signInBodyValidation , signInUser )

export default router;