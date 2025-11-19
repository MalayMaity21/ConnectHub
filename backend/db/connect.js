import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected");
    } catch(err){
        console.log("mongodb connection failed",err);
    }

}  

export default connectDb;