const { Contact } = require("../../models/contact");

const updateContactFavorite = async (id, newData) => {
  return await Contact.findByIdAndUpdate(id, newData, { new: true });
};

module.exports = updateContactFavorite;
