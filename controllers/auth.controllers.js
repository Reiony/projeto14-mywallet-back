import { usersCollection, sessionsCollection} from "../database/database.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

export async function signUp(req, res) {
  const user = res.locals.user;
  const passwordHashed = bcrypt.hashSync(user.password, 10);

  try {
    await usersCollection.insertOne({ ...user, password: passwordHashed });
    res.status(201).send("User created successfully");
    return;
  } catch (err) {
    const errors = err.details.map((detail) => detail.message);
    res.status(400).send(errors);
    return;
  }
}

export async function signIn(req, res) {
    const user = res.locals.user;
    const token = uuidV4();
  
    try {
      await sessionsCollection.insertOne({ token, userId: user._id });
      res.status(201).send({message:"User Logged In successfully", token});
      return;
    } catch (err) {
      const errors = err.details.map((detail) => detail.message);
      res.status(400).send(errors);
      return;
    }
  }