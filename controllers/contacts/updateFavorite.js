const { HttpError, ctrlWrapper } = require("../../helpers");
const { updateContactFavorite } = require("../../services/contacts");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await updateContactFavorite(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  updateFavorite: ctrlWrapper(updateFavorite),
};
