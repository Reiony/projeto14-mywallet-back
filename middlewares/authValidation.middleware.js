import bcrypt from "bcrypt";
import { usersCollection } from "../database/database";
import { userSchema } from "../models/user.model";

export async function ValidateUserSchema(req, res, next) {
  const user = req.body;

  const { error } = userSchema.validate(user, { abortEarly: false });

  if (error) {
    const verifyErrors = error.details.map((e) => e.message);
    res.status(400).send(verifyErrors);
    return;
  }

  const userValidate = await usersCollection.findOne({ email: user.email });
  if (userValidate) {
    res.status(400).send({ message: "Email já cadastrado!" });
    return;
  }
  res.locals.user = user;
  next();
}

export async function signInBodyValidation(req, res, next) {
  const { email, password } = req.body;

  try {
    const checkUser = await usersCollection.findOne({ email: email });
    if (!checkUser) {
      res.sendStatus(401);
      return;
    }
    const verifyPassword = bcrypt.compareSync(password, checkUser.password);
    if (!verifyPassword) {
      res.sendStatus(401);
      return;
    }
    res.locals.user = checkUser;
  } catch (err) {
    const errors = err.details.map((detail) => detail.message);
    res.status(400).send(errors);
    return;
  }
}
