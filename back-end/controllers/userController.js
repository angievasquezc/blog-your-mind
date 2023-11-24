import User from '../models/userModel.js'

const registerUser = async(req, res)=>{

    var userData = req.body;
   var result = await User.create(userData)

    res.status(200).json(result)
}

const loginUser = (req, res)=>{
    res.json("hola login")
}

export {registerUser, loginUser}