import Joi from "joi";

export const userSchema = joi.object({
    name: Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().required().min(4),
})