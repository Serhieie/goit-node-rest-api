const { Contact } = require("../../models/contact");

const createContact = async (contactData, owner) => {
  return await Contact.create({ ...contactData, owner });
};

module.exports = createContact;
