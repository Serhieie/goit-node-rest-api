const express = require("express");
const {
  getAll,
  getById,
  remove,
  post,
  update,
  updateFavorite,
} = require("../../controllers/contactsControllers");

const router = express.Router();

const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/", validateBody(schemas.createContactSchema), post);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateFavorite
);

router.delete("/:id", isValidId, remove);

router.put("/:id", isValidId, validateBody(schemas.updateContactSchema), update);

module.exports = router;
