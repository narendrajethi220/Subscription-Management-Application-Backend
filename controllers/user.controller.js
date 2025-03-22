import User from '../models/user.model.js';

export const getUsers=async(req,res,next)=>{
    try{
     const users=await User.find();
     res.status(200).json({
        success:true,
        data:users
     })
    }
    catch(err){
        next(err);
    }
}

export const getUser=async(req,res,next)=>{
    try{
    const user=await User.findById(req.params.id).select('-password');
    if(!user){
        const error=new Error('User Not Found');
        error.statusCode=400;
        throw error;
    }

    res.status(200).json({
        success:true,
        data:user
    })
  }
    catch(err){
        next(err);
    }
}