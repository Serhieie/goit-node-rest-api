const loginUser = require("./login");
const current = require("./current");
const logoutUser = require("./logout");
const registerUser = require("./register");
const updtUserAvatar = require("./updtUserAvatar");
const verifyUserEmail = require("./verifyUserEmail");
const resentUserVerifyEmail = require("./resentVerifyEmail");

module.exports = {
  loginUser,
  logoutUser,
  registerUser,
  current,
  updtUserAvatar,
  verifyUserEmail,
  resentUserVerifyEmail,
};
