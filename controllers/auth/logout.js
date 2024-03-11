const { ctrlWrapper } = require("../../helpers");
const { logoutUser } = require("../../services/auth");

const logout = async (req, res) => {
  const { _id } = req.user;
  const message = await logoutUser(_id);
  res.json(message);
};

module.exports = {
  logout: ctrlWrapper(logout),
};
