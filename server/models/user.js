const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 40,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
  },
});

userSchema.methods = {
  authenticate: function (plainPassword) {
    return this.password === plainPassword;
  },
};

module.exports = mongoose.model("User", userSchema);
