const { HttpError, ctrlWrapper } = require("../helpers");
const {
  getAllContacts,
  getContactById,
  updateContact,
  updateContactFavorite,
  deleteContact,
  createContact,
} = require("../services/contactsServices");

const getAll = async (req, res) => {
  const result = await getAllContacts();
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const update = async (req, res) => {
  const { id } = req.params;
  const result = await updateContact(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await updateContactFavorite(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

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

const post = async (req, res) => {
  const result = await createContact(req.body);
  res.status(201).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  update: ctrlWrapper(update),
  remove: ctrlWrapper(remove),
  updateFavorite: ctrlWrapper(updateFavorite),
  post: ctrlWrapper(post),
};
