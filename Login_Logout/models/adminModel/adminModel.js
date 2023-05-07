const mongoose = require("mongoose");
const { Schema } = mongoose;
const adminSchema = new Schema({
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
module.exports = mongoose.model("adminAuth", adminSchema)
