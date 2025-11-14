const getProtectedData = (req, res) => {
  res.json({ message: "Protected data", user: req.user });
};

module.exports = { getProtectedData };
