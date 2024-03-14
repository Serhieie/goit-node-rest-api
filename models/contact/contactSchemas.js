const Joi = require("joi");

const generList = ["work", "main", "other"];

const createContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
  type: Joi.string().valid(...generList),
});

const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
  type: Joi.string(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean(),
});

const contactSchemas = {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
};

module.exports = { contactSchemas };
