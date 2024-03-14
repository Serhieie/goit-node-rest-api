const { HttpError, ctrlWrapper } = require("../../helpers");
const { getAllContacts } = require("../../services/contacts");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await getAllContacts(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  getById: ctrlWrapper(getById),
};
