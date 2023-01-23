import { transactionsCollection } from "../database/database";

export async function registerTransaction(req, res) {
  const transaction = res.locals.transaction;
  try {
    await transactionsCollection.insertOne(transaction);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    return;
  }
}

export async function getTransaction(req, res) {
  const user = res.locals.user;
  try {
    const findTransactions = await transactionsCollection
      .find({ user: user._id })
      .toArray();
    res.status(200).send(findTransactions);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    return;
  }
}
