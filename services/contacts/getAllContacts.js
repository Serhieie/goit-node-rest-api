const { Contact } = require("../../models/contact");

const getAllContacts = async (owner, page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  return await Contact.find({ owner }, "-createdAt -updatedAt", { skip, limit }).populate(
    "owner",
    "name email"
  );
};

module.exports = getAllContacts;
