import Joi from "joi";

export const transactionsSchema = Joi.object({
  user: Joi.object().required(),
  type: Joi.string().required().valid("entry", "exit"),
  description: Joi.string().required().min(3),
  value: Joi.number().required(),
  createdAt: Joi.string().required(),
});
