const { ctrlWrapper } = require("../../helpers");
const { registerUser } = require("../../services/auth");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await registerUser(email, password, req.body);
  res.status(201).json({ user });
};

module.exports = {
  register: ctrlWrapper(register),
};
