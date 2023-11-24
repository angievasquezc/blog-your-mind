
import User from '../models/userModel.js'

const registerUser = async(req, res)=>{
try{
    var userData = req.body;
    var result = await User.create(userData)
    res.status(200).json(result)
}catch(e){
    res.status(400).json({
        "message": e.message
    })
}
    
}

const loginUser = (req, res)=>{
    res.json("hola login")
}

export {registerUser, loginUser}