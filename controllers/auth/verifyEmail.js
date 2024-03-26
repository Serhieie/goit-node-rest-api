const { HttpError, ctrlWrapper } = require("../../helpers");
const { verifyUserEmail } = require("../../services/auth");

const verifyEmail = async (req, res) => {
  const { verificationCode } = req.params;
  const result = verifyUserEmail(verificationCode);
  if (!result) {
    throw HttpError(404);
  }
  res.json({
    message: "Email verify success",
  });
};

module.exports = {
  verifyEmail: ctrlWrapper(verifyEmail),
};
