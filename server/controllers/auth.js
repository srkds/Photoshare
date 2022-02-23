const User = require("../models/user");
var jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: err,
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};
