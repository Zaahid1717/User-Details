const jwt= require("jsonwebtoken");

const authentication =(req,res,next)=>{
try {

    if (req.headers.authorization){
        const den = jwt.verify(req.headers.authorization, "abcdefgh");

        if(den){
            next();
        }else{
            res.status(401).json({status:false,message:"not allowed"});
        }
 
    }else{
        res.status(401).json({status:false,message:"not allowed"});
    }

} catch (error) {
    res.status(401).json({status:false,message:"not allowed"});
}

}

module.exports=authentication;