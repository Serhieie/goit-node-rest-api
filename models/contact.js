const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const generList = ["work", "main", "other"];

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: generList,
      default: "main",
    },
  },
  { versionKey: false, timestamps: true }
);

const Joi = require("joi");

const createContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
  type: Joi.string().validate(...generList),
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

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

const schemas = {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
};

module.exports = { Contact, schemas };
