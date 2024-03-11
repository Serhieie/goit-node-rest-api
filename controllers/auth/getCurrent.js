const { ctrlWrapper } = require("../../helpers");
const { current } = require("../../services/auth");

const getCurrent = async (req, res) => {
  const response = await current(req.user);
  res.json(response);
};

module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
};
