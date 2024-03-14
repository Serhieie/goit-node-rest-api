const { User } = require("../../models/user");

const logoutUser = async (_id) => {
  await User.findByIdAndUpdate(_id, { token: "" });
  return { message: "Logout succes" };
};

module.exports = logoutUser;
