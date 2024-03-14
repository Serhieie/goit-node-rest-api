const { ctrlWrapper } = require("../../helpers");
const { loginUser } = require("../../services/auth");

const login = async (req, res) => {
  const { email, password, name } = req.body;
  const response = await loginUser(email, password, name);
  res.json(response);
};

module.exports = {
  login: ctrlWrapper(login),
};
