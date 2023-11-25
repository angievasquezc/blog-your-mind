
import User from '../models/userModel.js'
import bcrypt from "bcrypt"

const registerUser = async(req, res)=>{
try{
    var userData = req.body;
    // userData.password = bcrypt.hashSync(userData.password, 10)

    var result = await User.create(userData)
    res.status(200).json(result)
}catch(e){
    res.status(400).json({
        "message": e.message
    })
}
    
}

const loginUser = async(req, res)=>{
    // console.log(req.body.email)
    // console.log(req.body.password)
    var result = await User.findOne({email: req.body.email})

    if(result == null){
        res.status(200).json(false);
        return;
    }

    var resultCompare = bcrypt.compareSync(req.body.password, result.password)

    // console.log(resultCompare)
    res.status(200).json(resultCompare)

    // if (result != null){
    //     res.status(200).json(true)
    // }else{
    //     res.status(200).json(false)
    // }
    // console.log(result)//esto me arroja null
}


export {registerUser, loginUser}