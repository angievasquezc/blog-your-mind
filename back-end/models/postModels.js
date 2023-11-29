import mongoose, { Schema } from "mongoose";

const PostSchema = new mongoose.Schema(
    {
      
        "title":{ type: String, required: [true, "you need to type the title"]},
        "description":{ type: String, required: [true, "you need to add a description"]},
        "author":{
            "type":Schema.Types.ObjectId,
            "ref":"users"
        },
        "images":{ type: String, required: [true, "you need to add an image"]},
        "created_at":String,
        "category": { type: String, required: [true, "you need to specify a category"]}

    }
)

const Post = mongoose.model("post", PostSchema);
export default Post;