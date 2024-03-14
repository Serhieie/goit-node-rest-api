const createContact = require("./createContact");
const deleteContact = require("./deleteContact");
const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const updateContact = require("./updateContact");
const updateContactFavorite = require("./updateContactFavorite");

module.exports = {
  updateContactFavorite,
  createContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContact,
};
