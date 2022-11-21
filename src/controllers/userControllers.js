import bcrypt from "bcrypt";
import { v4 as uuidV4 } from 'uuid';
import { usersCollection, sessionsCollection } from "../database/db.js";


export async function signUpUser(req, res) {
    const user = req.body;

    try {
        const passwordHash = bcrypt.hashSync(user.password, 10);
        await usersCollection.insertOne({ ...user, password: passwordHash });
        res.sendStatus(201);
    } catch (err) {
        console.log(err)
        res.sendStatus(500).send(err.message);
    }
}

export async function signInUser(req, res) {
    const { email } = req.body;
    const token = uuidV4();
    try {
        const userExists = await usersCollection.findOne({ email });
        await sessionsCollection.insertOne({
            token,
            userId: userExists._id,
        });
        res.status(201).send(userExists.name);
    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
}