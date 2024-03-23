const { HttpError, ctrlWrapper } = require("../../helpers");
const { getContactById } = require("../../services/contacts");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  getById: ctrlWrapper(getById),
};
