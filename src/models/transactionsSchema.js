import joi from "joi";


export const transactionSchema = joi.object({
    value: joi.number().required(),
    type: joi.string().required(),
    description: joi.string().required()
});