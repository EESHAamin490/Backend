const express=require('express');
const app=express();
const port=5000;
const mongoose = require("mongoose");
const { URL } = require("./config/db");
const userRouter=require("./routes/userRoutes/userRoutes");
const adminRouter=require("./routes/adminRoutes/adminRoutes");
app.listen(port,()=>{
    console.log("on port 5000");
})
app.use(express.json())
// ? Database Connection
const connectDb = async () => {
    try {
      const conn = await mongoose.connect(URL);
      console.log(`Mongodb is connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
    }
  };
  connectDb();
app.use("/auth/user",userRouter)
app.use("/auth/admin",adminRouter)