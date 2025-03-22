import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String, 
        require:[true, 'User name is required'],
        trim:true,
        minLength:2,
        maxLength:50
    },
    email:{
        type:String, 
        require:[true,'User Email is required'],
        trim:true,
        unique:true,
        minLength:5,
        maxLength:255,
        lowercase:true,
        match:[/\S+@\S+\.\S+/,'Please fill valid email'],
    },
    password:{
        type:String,
        require:[true, 'User Password is required'],
        trim:true,
        minLength:6,
    }
},{timestamps:true});

const User=mongoose.model('User', userSchema);
export default User;