const { register } = require("./register");
const { login } = require("./login");
const { getCurrent } = require("./getCurrent");
const { logout } = require("./logout");
const { updtAvatar } = require("./updtAvatar");
const { verifyEmail } = require("./verifyEmail");
const { resentVerifyEmail } = require("./resentVerify");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  updtAvatar,
  verifyEmail,
  resentVerifyEmail,
};
