import joi from "joi";


export const transactionsSchema = joi.object({
    value: joi.number().required(),
    type: joi.string().required(),
    description: joi.string().required()
});