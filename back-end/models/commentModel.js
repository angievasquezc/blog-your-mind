import mongoose, { Schema } from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
      "comment":String,
      "author":{
        "type":Schema.Types.ObjectId,
        "ref":"users",
      },
      "date":String
    

    }
)
const Comment = mongoose.model("comment", CommentSchema);
export default Comment;