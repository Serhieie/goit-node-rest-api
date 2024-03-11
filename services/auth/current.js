const current = async (user) => {
  const { email, name } = user;
  return { name, email };
};

module.exports = current;
