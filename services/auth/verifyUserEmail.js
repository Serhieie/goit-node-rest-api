const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const verifyUserEmail = async (verificationCode) => {
  const user = await User.findOne({ verificationCode });
  if (!user) throw HttpError(401, "Email already verifyed");
  return await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationCode: "",
  });
};

module.exports = verifyUserEmail;
