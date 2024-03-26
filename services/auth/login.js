const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const { SECRET_KEY } = process.env;

const loginUser = async (email, password, name) => {
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401);
  if (!user.verify) throw HttpError(401, "Email is not verify");
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) throw HttpError(401, "Wrong login or password");
  const payload = {
    id: user.id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });
  return {
    user: {
      name,
      email,
      subscription: user.subscription,
    },
    token,
  };
};

module.exports = loginUser;
