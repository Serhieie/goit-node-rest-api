const { User } = require("../../models/user");
const { HttpError, sendEmailGrit } = require("../../helpers");
const { createVerifyEmailMarkup } = require("../../view");

const { BASE_URL } = process.env;

const resentUserVerifyEmail = async (email) => {
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, "Email not found");
  if (user.verify) throw HttpError(401, "Email already verifyed");

  const verEmail = {
    to: email,
    subject: "Verify email",
    html: createVerifyEmailMarkup(BASE_URL, user.verificationCode),
  };
  await sendEmailGrit(verEmail);
  return {
    message: "Email verify send success",
  };
};

module.exports = resentUserVerifyEmail;
