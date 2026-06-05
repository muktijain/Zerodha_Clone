const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UsersSchema = new mongoose.Schema({
      mobile: {
    type: Number,                                                           
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
    password: {
    type: String,
    required: true,
  },
});

//to encrypt the password before saving it to the database
UsersSchema.pre("save", async function (){
  this.password = await bcrypt.hash(this.password, 12);
})

module.exports = {UsersSchema};