const bcrypt = require("bcrypt");
const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const gravatar = require("gravatar");

const registerUser = async (email, password, body) => {
  const user = await User.findOne({ email });

  if (user) throw HttpError(409);
  const avatarURL = gravatar.url(email);
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    ...body,
    password: hashedPassword,
    avatarURL,
  });

  return {
    email: newUser.email,
    name: newUser.name,
    subscription: newUser.subscription,
    avatarURL,
  };
};

module.exports = registerUser;
