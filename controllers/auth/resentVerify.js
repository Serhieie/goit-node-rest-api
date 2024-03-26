const { ctrlWrapper } = require("../../helpers");
const { resentUserVerifyEmail } = require("../../services/auth");

const resentVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const response = await resentUserVerifyEmail(email);
  res.json(response);
};

module.exports = {
  resentVerifyEmail: ctrlWrapper(resentVerifyEmail),
};
