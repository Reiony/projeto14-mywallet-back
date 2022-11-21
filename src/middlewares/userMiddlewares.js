import {signUpUserSchema, signInUserSchema} from "../models/userSchema";

export async function signUpMiddleware (req, res, next) {
    const user = req.body;

    if (!user.name|| !user.email || !user.password){
        res.sendStatus(400)
        return
    }
    const {error} = signUpUserSchema.validate(user, {abortEarly: false});
    if (error){
        res.sendStatus (400)
        return
    }
    next();
}

export async function signInMiddleware (req, res, next) {
    const user = req.body;

    if (!user.email || !user.password){
        res.sendStatus(400)
        return
    }
    const {error} = signInUserSchema.validate(user, {abortEarly: false});
    if (error){
        res.sendStatus (400)
        return
    }
    next();
}