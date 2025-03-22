import mongoose from "mongoose";
import User from '../models/user.model.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import {JWT_SECRET, JWT_EXPIRES_IN} from '../config/env.js';

export const signUp= async(req, res,next)=> {
    const session=await mongoose.startSession();
    session.startTransaction();
    try{
     const {name,email, password}=req.body;
     
     //checking if user exists
     const existingUser=await User.findOne({email});
     if(existingUser){
        const error=new Error('User already exists');
        error.statusCode=409;
        throw error; 
     }

     //hashing password
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);

    const newUser=await User.create([{
        name,
        email,
        password:hashedPassword
    }],{session});

    const token=jwt.sign(
        {userId:newUser[0]._id},
        JWT_SECRET,
        {expiresIn:JWT_EXPIRES_IN});

    await session.commitTransaction();
    session.endSession();
    res.status(201).json({
        success:true,
        message:'User Created Successfully',
        data:{
            token,
            User:newUser[0]
        }
    })
  }
    catch(err){
        await session.abortTransaction();
        session.endSession();
        next(err);
    }
}

export const signIn=async(req,res,next)=>{
    try{
   const{email,password}=req.body;
   const userExist=await User.findOne({email});
   if(!userExist){
    const error=new Error('Invalid Credentials');
    res.statusCode=400;
    throw error;
   }
   
   const isPasswordValid=await bcrypt.compare(password,userExist.password);
   if(!isPasswordValid){
    const error=new Error('Invalid Credentials');
    res.statusCode=401;
    throw error;
   }
   
   const token=jwt.sign({userId:userExist._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});
   res.status(200).json({
    success:true,
    message:'User Signed in successfully',
    data:{
        token,
        userExist, 
     }
   })
 }
    catch(err){
        next(err);
    }
}