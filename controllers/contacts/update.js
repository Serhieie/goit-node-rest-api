const { HttpError, ctrlWrapper } = require("../../helpers");
const { updateContact } = require("../../services/contacts");

const update = async (req, res) => {
  const { id } = req.params;
  const result = await updateContact(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  update: ctrlWrapper(update),
};
