const express = require("express");
const { validateBody, autenticate } = require("../../middlewares");
const { userSchemas } = require("../../models/user");
const { register, login, getCurrent, logout } = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(userSchemas.registrationSchema), register);
router.post("/login", validateBody(userSchemas.loginSchema), login);
router.get("/current", autenticate, getCurrent);
router.post("/logout", autenticate, logout);

module.exports = router;
