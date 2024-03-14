const { Contact } = require("../../models/contact");

const getContactById = async (id) => {
  return await Contact.findById({ _id: id });
};

module.exports = getContactById;
