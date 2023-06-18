const bigpromise = require("../middlewares/bigpromise");

exports.home = (req, res) => {
  res.status(200).json({
    success: true,
    greeting: "this is the home",
  });
};
exports.login = (req, res) => {
  res.status(200).json({
    success: true,
    greeting: "this is the login",
  });
};
