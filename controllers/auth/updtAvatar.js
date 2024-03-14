const { ctrlWrapper } = require("../../helpers");
const { updtUserAvatar } = require("../../services/auth");

const updtAvatar = async (req, res) => {
  const response = await updtUserAvatar(req);
  res.json(response);
};

module.exports = {
  updtAvatar: ctrlWrapper(updtAvatar),
};
