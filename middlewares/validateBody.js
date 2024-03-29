const HttpError = require("../helpers/HttpError");

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
