const express = require("express");
const {
  getAll,
  getById,
  remove,
  post,
  update,
  updateFavorite,
} = require("../../controllers/contacts");

const router = express.Router();

const { validateBody, isValidId, autenticate } = require("../../middlewares");
const { contactSchemas } = require("../../models/contact");

router.get("/", autenticate, getAll);

router.get("/:id", autenticate, isValidId, getById);

router.post("/", autenticate, validateBody(contactSchemas.createContactSchema), post);

router.patch(
  "/:id/favorite",
  autenticate,
  isValidId,
  validateBody(contactSchemas.updateFavoriteSchema),
  updateFavorite
);

router.delete("/:id", isValidId, remove);

router.put("/:id", isValidId, validateBody(contactSchemas.updateContactSchema), update);

module.exports = router;
