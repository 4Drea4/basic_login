const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function auth (req,res, next) {
    let token = req.headers.authorization;
    if (token) {
        token = token.split('').pop().trim();
    }
    if(!token){
        return res.status(401).json({message: 'Ran out of chuck e cheese tokens'});
    }
    try{
        const {data} = jwt.verify(token,secret, {maxAge: '15min'});
        req.user = data;
        return next ();

    }catch (error) {
        return res.status(401).json({message:"Token is invalid"});
    }
    }
 module.exports = auth;
