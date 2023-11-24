import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
},
{
    timestamps: true //crea los campos de create date and update date //para uditoría
}
);

const User = mongoose.model("users", UserSchema);
export default User; 