import mongoose from "mongoose";
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    authorRol:{type:String, required:true},
    image: {type: Array, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    
},
{
    timestamps: true //crea los campos de create date and update date //para uditoría
}
);

UserSchema.pre("save", function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next()
})

const User = mongoose.model("users", UserSchema);
export default User; 