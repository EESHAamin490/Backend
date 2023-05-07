const asynchandler=require("express-async-handler");
const userModel=require("..//..//models/userModel/userModel");

const userLogin=asynchandler(async(req,res)=>{
    const {email,password}=req.body;
    const setData=await userModel.create({email,password});
    if(setData){
        res.json({message:"data is entered in database",email,password});
    }
    else{
        res.json("ERROR:DATA IS NOT ADDED");
    }
})
const getUserLogin = asynchandler(async (req,res)=>{ 
    const users= await userModel.find()
    res.json({message:"all users are below",users})
    }
)
const getUserById = asynchandler(async (req,res)=>{ 
    const users= await userModel.findById(req.params.id)
    res.json({message:" user is",users})
   
    }
)
const deleteUserById = asynchandler(async (req,res)=>{ 
    const users= await userModel.findByIdAndDelete(req.params.id)
    res.send(`Document with ${users.email} has been deleted..`)
   
    }
)
const updateUserById = asynchandler(async (req,res)=>{ 
    const getUser = await userModel.findById(req.params.id);
    const { email, password } = req.body;
     const updateData = await userModel.findByIdAndUpdate(req.params.id, { email,password});
     res.send(updateData);}
)
const userSignUp=asynchandler(async(req,res)=>{
    const {firstname,lastname,contactnumber,email,confirmpassword}=req.body;
    const setData=await userModel.create({firstname,lastname,contactnumber,email,confirmpassword});
    if(setData){
        res.json({message:"Signup data is entered in database",firstname,lastname,contactnumber,email,confirmpassword});
    }
    else{
        res.json("ERROR:DATA IS NOT ADDED");
    }
})
module.exports={userLogin,getUserLogin,getUserById,deleteUserById,updateUserById,userSignUp};