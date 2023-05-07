const express=require("express");
const {userLogin,getUserLogin,getUserById,deleteUserById,updateUserById,userSignUp}=require
("../../controller/User-Controller/userController")
const router=express.Router();

// POST:/auth/user/login
router.post("/login",userLogin);

// POST:/auth/user/me
router.get("/me", getMe);

// POST:/auth/user/signup
router.post("/signup",userSignUp);
module.exports=router