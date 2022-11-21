import { Router } from "express";
import { signUpMiddleware, signInMiddleware } from "../middlewares/userMiddlewares.js";
import {signUp, signIn} from "../controllers/userControllers.js"

const router = Router();

router.post("sign-up", signUpMiddleware , signUp )
router.post("sign-in", signInMiddleware , signIn )

export default router;