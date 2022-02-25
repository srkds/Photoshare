const User = require("../models/user");
var jwt = require("jsonwebtoken");

/* SIGNUP */
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

/* SIGNIN */
exports.signin = (req, res) => {
  // destructuring values from request body
  const { email, password } = req.body;

  // check if user exist in our database or not
  // if exist check is password correct give error if not.
  // otherwise create jwt token
  User.findOne({ email }, (err, user) => {
    // if error or user not found return error
    if (err || !user)
      return res.status(400).json({ error: "User Does'n exist" });

    // if password is not correct then give error
    if (!user.authenticate(password)) {
      return res.status(400).json({ error: "Email or Password does't match!" });
    }

    // all clear
    // create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    // set token to cookie
    res.cookie("token", token, { expire: new Date() + 999 });

    // send response back with user details and token
    const { _id, name, email } = user;
    res.json({
      token,
      user: { _id, name, email },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token"); // clear cookie
  res.send("User successfuly signout."); // send success message
};
