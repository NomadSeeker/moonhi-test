import Joi from "joi";

export const validOperation = Joi.object({
    number1: Joi.number().required(),

    number2: Joi.number().required(),

    type: Joi.string()
    .valid('+', '-', '*', '/')
    .required()
    .messages({
        'any.only': 'Invalid operation. Allowed operations are: +, -, *, /',
    }),
});