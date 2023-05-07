const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
      fistname: {
        type: String,  
      },
      lastname: {
        type: String,
      },  
      contactnumber:{
        type: String,
      },
     email: {
        type: String,
        required: [true, "Please enter your password"],
      },
     password: {
        type: String,
        required: [true, "Please enter your password"],
      },
    confirmpassword: {
        type: String,
      },
});
module.exports = mongoose.model("userAuth", userSchema)
