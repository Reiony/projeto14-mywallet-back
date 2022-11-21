import { usersCollection } from "../database/db.js";
import {usersSchema} from "../models/userSchema.js";
import bcrypt from "bcrypt";
export async function signInBodyValidation (req, res, next) {
    const user = req.body;
    const userExists = await usersCollection.findOne({ email: user.email });
    if (!user.email || !user.password){
        res.sendStatus(400)
        return
    }

    if (!userExists) {
        res.status(401).send({ message: "Usuário não existe." })
        return
    }

    const passwordOk = bcrypt.compareSync(user.password, userExists.password)
    if (!passwordOk){
        res.sendStatus(401)
        return
    }
    next();
}