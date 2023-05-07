const express=require("express");
const {userLogin,getMe,userSignUp}=require
("../../controller/Admin-Controller/adminController")
const router=express.Router();

// POST:/auth/admin/login
router.post("/login",userLogin);

// POST:/auth/admin/me
router.get("/me", getMe);

// POST:/auth/admin/signup
router.post("/signup",userSignUp);
module.exports=router