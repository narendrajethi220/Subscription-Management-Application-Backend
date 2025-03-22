import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error(`Please define the MongoDB URI environment variable inside .env.<developement/production>.local`);
}

const connectToDatabase=async()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log(`Connected to Database in ${NODE_ENV} mode`);
    }catch(error){
        console.error('Error while connecting to Database!',error.message);
        process.exit(1);
    }
}
export default connectToDatabase;
