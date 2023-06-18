const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// can have array to provide with error message
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [40, "name should be under 40 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    validate: [validator.isEmail, "please enter email in correct format"],
    unique: true,
  },
  // never save confirm password field
  password: {
    type: String,
    required: [true, "Please provide a email"],
    minlength: [6, "password should be atleast 6 characters long"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  photo: {
    id: {
      type: String,
      required: true,
    },
    secure_url: {
      type: true,
      required: true,
    },
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// encrypt password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", userSchema);
