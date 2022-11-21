import bcrypt from "bcrypt";
import { v4 as uuidV4 } from 'uuid';
import { usersCollection, sessionsCollection } from "../database/db.js";


export async function signUpUser(req, res) {
    const user = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);

    try {
        const userAlreadyExists = await usersCollection.findOne({ email });
        if (userAlreadyExists) {
            res.status(409).send({ message: "Usuário já existente!" })
        }
        await usersCollection.insertOne(user);
        res.sendStatus(200);
    } catch (err) {
        console.log(err)
        res.sendStatus(500).send(err.message);
    }
}

export async function signInUser(req, res) {
    const { email, password } = req.body;
    const token = uuidV4();
    try {
        const userExists = await usersCollection.findOne({ email });
        if (userExists && bcrypt.compareSync(password, userExists.password)) {
            await sessionsCollection.insertOne({
                token,
                userId: userExists._id,
            });
            res.status(201).send({token});
        }
    } catch (err) {
        console.log(err)
        res.sendStatus(401);
    }
}