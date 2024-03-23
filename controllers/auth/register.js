const { ctrlWrapper } = require("../../helpers");
const { registerUser } = require("../../services/auth");

const { nanoid } = require("nanoid");

const register = async (req, res) => {
  const verificationCode = nanoid();
  const user = await registerUser(req.body, verificationCode);
  res.status(201).json(user);
};

module.exports = {
  register: ctrlWrapper(register),
};
