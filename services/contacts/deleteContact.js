const { Contact } = require("../../models/contact");

const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};

module.exports = deleteContact;
