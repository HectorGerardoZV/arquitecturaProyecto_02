const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const Users = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});
Users.pre("save", async function(next){
  if(!this.isModified("password")){
    return next();
  }
  const newPassword = await bcrypt.hashSync(this.password, 10);
  this.password = newPassword;
  next();
});
Users.method.comparePassword  = async function (passwordCheck){
  return await bcrypt.compare(passwordCheck, this.password);
}
module.exports = mongoose.model("users", Users);
