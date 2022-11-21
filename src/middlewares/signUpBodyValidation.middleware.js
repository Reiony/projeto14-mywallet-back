import { usersCollection } from "../database/db.js";
import {usersSchema} from "../models/userSchema.js";
export async function signUpBodyValidation (req, res, next) {
    const user = req.body;
    const {error} = usersSchema.validate(user, {abortEarly: false});

    if (error){
        const errors = error.details.map((detail) => detail.message);
        res.status(400).send(errors);
        return
    }

    const userExists = await usersCollection.findOne({ email: user.email });
    if (userExists) {
        res.status(409).send({message: "Esse e-mail já está cadastrado"});
        return
    }
    if (!user.name|| !user.email || !user.password){
        res.sendStatus(400)
        return
    }
    next();
}