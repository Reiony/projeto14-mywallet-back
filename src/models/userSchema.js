import joi from "joi";

export const signUpUserSchema = joi.object({
    name:joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
})

export const signInUserSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
})