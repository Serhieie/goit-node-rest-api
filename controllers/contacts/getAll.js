const { HttpError, ctrlWrapper } = require("../../helpers");
const { getAllContacts } = require("../../services/contacts");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page, limit } = req.query;
  const result = await getAllContacts(owner, page, limit);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
