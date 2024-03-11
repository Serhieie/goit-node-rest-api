const { Contact } = require("../../models/contact");

const updateContact = async (id, newData) => {
  return await Contact.findByIdAndUpdate(id, newData, { new: true });
};

module.exports = updateContact;
