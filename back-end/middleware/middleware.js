import jwt from "jsonwebtoken";

export const middleware = (req, res, next) => {
    var jwtValue = req.header("Authorization");
    if(!jwtValue){
        res.status(401).json();
        return;
    }

    try{
        var data = jwt.verify(jwtValue, "codingdojo");
        next();
    }catch(e){
        res.status(401).json();
    }
}

