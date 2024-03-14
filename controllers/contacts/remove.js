const { HttpError, ctrlWrapper } = require("../../helpers");
const { deleteContact } = require("../../services/contacts");

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await deleteContact(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json({
    message: "delete success",
  });
};

module.exports = {
  remove: ctrlWrapper(remove),
};
