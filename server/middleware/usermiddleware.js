const jwt=require("jsonwebtoken");

const authenticateWithToken=(req,res,next)=>{
    try {
         req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
        let token = req.headers.authorization.split(" ")[1];

        if(!token){
            return res.status(401).json({message:"Access Denied , token missing"})
        }
    
        jwt.verify(token,process.env.PRIVATE_KEY,(err, user)=>{
            if(err){
                return res.status(403).json({message:"You are not authorized"})
            }
            req.user=user;
            next()
        }  ) 
    } catch (error) {
        res.status(500).json("Internal server Error")
    }
}
const authenticateRole = (role) => {
    return (req, res, next) => {
        try {
            req.headers.authorization &&
                req.headers.authorization.startsWith("Bearer");

            let token = req.headers.authorization.split(" ")[1];

            if (!token) {
                return res.status(401).json({ message: "Access Denied, token missing" });
            }

            jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json({ message: "You are not authorized" });
                }

                
                if (role.includes(user.role)) {
                  
                    next();
                } else {
                    return res.status(403).json({ message: "Insufficient permissions for this operation" });
                }
            });
        } catch (error) {
            res.status(500).json("Internal server Error");
        }
    }
}
module.exports={
    authenticateWithToken,
    authenticateRole
}