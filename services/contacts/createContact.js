const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const createContact = async (contactData, owner) => {
  const contactInDb = await Contact.findOne({ email: contactData.email });
  if (contactInDb) throw HttpError(409, "Contact with this email is already consist");
  return await Contact.create({ ...contactData, owner });
};

module.exports = createContact;
