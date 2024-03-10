const { Contact } = require("../models/contact");

const getAllContacts = async () => {
  return await Contact.find({}, "-createdAt -updatedAt");
};

const getContactById = async (id) => {
  return await Contact.findById(id);
};

const updateContact = async (id, newData) => {
  return await Contact.findByIdAndUpdate(id, newData, { new: true });
};

const updateContactFavorite = async (id, newData) => {
  return await Contact.findByIdAndUpdate(id, newData, { new: true });
};

const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};

const createContact = async (contactData) => {
  return await Contact.create(contactData);
};

module.exports = {
  getAllContacts,
  getContactById,
  updateContact,
  updateContactFavorite,
  deleteContact,
  createContact,
};
