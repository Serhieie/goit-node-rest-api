const Joi = require("joi");

const subscriptionList = ["starter", "pro", "business"];
const userRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const registrationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(userRegex).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().validate(...subscriptionList),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(userRegex).required(),
  password: Joi.string().min(6).required(),
});

const userSchemas = {
  loginSchema,
  registrationSchema,
};

module.exports = { userSchemas };
