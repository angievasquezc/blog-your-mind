import mongoose from "mongoose";
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema(
    {
    firstName: {
        type: String, 
        required: true,
        min:2,
        max: 20,
    },
    lastName: {
        type: String, 
        required: true,
        min:2,
        max: 20,
    },
    email: {
        type: String, 
        required: true,
        max: 20,
        unique: true 
    },
    password: {
        type: String, 
        required: true,
        min:5,
    },
    PicturePath: {
        type: String, 
        default: ""
    },
    location: String,
    occupation: String
    // authorRol:{type:String, required:true},
    // image: {type: Array, required: true},
    // email: {type: String, unique: true, required: true},
    // password: {type: String, required: true},
    
},
{
    timestamps: true //crea los campos de create date and update date //para uditoría
}
);

// UserSchema.pre("save", function(next){
//     this.password = bcrypt.hashSync(this.password, 10);
//     next()
// })

const User = mongoose.model("users", UserSchema);
export default User; 