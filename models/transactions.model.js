import Joi from "joi";

export const transactionsSchema = Joi.object({
  type: Joi.string().required().valid("entry", "exit"),
  description: Joi.string().required().min(3),
  value: Joi.number().required(),
  user:Joi.object().required(),
  createdAt: Joi.string().required(),
});
