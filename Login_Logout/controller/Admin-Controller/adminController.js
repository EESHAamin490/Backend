const asynchandler = require('express-async-handler');
const userModel = require('..//..//models/adminModel/adminModel');

// POST REQUEST
// POST:/auth/admin/login
const userLogin = asynchandler(async (req, res) => {
  const {email, password} = req.body;
  const setData = await userModel.findOne({email});
  if (setData) {
    res.json({message: 'Login Sucessfully', email, password});
  } else {
    res.json('ERROR:User Not Found');
  }
});


// POST REQUEST
// POST:/auth/admin/me
const getMe = asynchandler(async (req, res) => {
  const {_id, email, firstname, lastname} = await userModel.findById(
    req.user._id,
  );
  res.json({id: _id, firstname, lastname, email});
});

// POST REQUEST
// POST:/auth/admin/signup
const userSignUp = asynchandler(async (req, res) => {
  const {firstname, lastname, contactnumber, email, confirmpassword} = req.body;
  const setData = await userModel.create({
    firstname,
    lastname,
    contactnumber,
    email,
    confirmpassword,
  });
  if (setData) {
    res.json({
      message: 'Signup data is entered in database',
      firstname,
      lastname,
      contactnumber,
      email,
      confirmpassword,
    });
  } else {
    res.json('ERROR:DATA IS NOT ADDED');
  }
});
module.exports = {
  userLogin,
  getMe,
  userSignUp,
};
