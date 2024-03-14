const bcrypt = require("bcrypt");
const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const registerUser = async (email, password, body) => {
  const user = await User.findOne({ email });

  if (user) throw HttpError(409);

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    ...body,
    password: hashedPassword,
  });

  return {
    email: newUser.email,
    name: newUser.name,
    subscription: newUser.subscription,
  };
};

module.exports = registerUser;
