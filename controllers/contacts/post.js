const { ctrlWrapper } = require("../../helpers");
const { createContact } = require("../../services/contacts");

const post = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await createContact(req.body, owner);
  res.status(201).json(result);
};

module.exports = {
  post: ctrlWrapper(post),
};
