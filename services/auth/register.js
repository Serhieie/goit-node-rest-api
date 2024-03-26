const bcrypt = require("bcrypt");
const { HttpError, sendEmailGrit } = require("../../helpers");
const { User } = require("../../models/user");
const { createVerifyEmailMarkup } = require("../../view");
const gravatar = require("gravatar");

const { BASE_URL } = process.env;

const registerUser = async (body, verificationCode) => {
  const user = await User.findOne({ email: body.email });
  if (user) throw HttpError(409, "This email already in use");
  const verEmail = {
    to: body.email,
    subject: "Verify email",
    html: createVerifyEmailMarkup(BASE_URL, verificationCode),
  };
  await sendEmailGrit(verEmail);
  const avatarURL = gravatar.url(body.email);
  const hashedPassword = await bcrypt.hash(body.password, 10);
  const newUser = await User.create({
    ...body,
    password: hashedPassword,
    avatarURL,
    verificationCode,
  });

  return {
    email: newUser.email,
    name: newUser.name,
    subscription: newUser.subscription,
    avatarURL,
  };
};

module.exports = registerUser;
