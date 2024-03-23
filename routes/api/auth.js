const express = require("express");
const { validateBody, autenticate, upload } = require("../../middlewares");
const { userSchemas } = require("../../models/user");
const {
  register,
  login,
  getCurrent,
  logout,
  updtAvatar,
  verifyEmail,
  resentVerifyEmail,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(userSchemas.registrationSchema), register);
router.post("/login", validateBody(userSchemas.loginSchema), login);
router.get("/current", autenticate, getCurrent);
router.post("/logout", autenticate, logout);
router.patch("/avatars", autenticate, upload.single("avatar"), updtAvatar);
router.get("/verify/:verificationCode", verifyEmail);
router.post("/verify", validateBody(userSchemas.verifySchema), resentVerifyEmail);

module.exports = router;
