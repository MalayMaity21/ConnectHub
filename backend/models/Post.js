import mongoose from "mongoose";
import User from "./User";

const postSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true,
    },
    ImageUrl:{
        type:String,
    }
} ,{timestamps:true}
);

const Post = mongoose.model("Post",postSchema);
export default Post;