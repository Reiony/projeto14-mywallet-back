import dayjs from "dayjs";
import { transactionsSchema } from "../models/transactions.model";

export async function transactionsSchemaValidation (req,res,next){
    const {type, value, description} = req.body;
    const user = res.locals.user;
    const transactionFormat = {
        value,
        description,
        type,
        user: user._id,
        createdAt: dayjs().format("DD/MM/YYYY")
    }
    const { error } = transactionsSchema.validate(transactionFormat, {abortEarly: false})
    if (error){
        console.log(error);
        res.sendStatus(401);
        return;
    }
    res.locals.transaction = transactionFormat;
    next();
}