import mongoose from "mongoose";
import dotenv from "dotenv"
import User from '../models/User.js'
import bcrypt from "bcryptjs";

dotenv.config();

export default async function signUp (req,res) {
    try{
        const {name,email,password,username,mobile,image} = req.body;
        
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
         const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User ({name,email,password:hashedPassword,username,mobile,image});

        await newUser.save();

        res.status(200).json({message:"User register successfully"});

    } catch(err){
        res.status(500).json({message:"Internal server error on signup"},err);
    } 
    

}


export async function getAllUsers(req,res){
    try{
        const users = await User.find({});
        res.status(200).json(users);
    } catch(err){
        res.status(500).json({message:"Internal server error on fetching users"},err);
    }
}