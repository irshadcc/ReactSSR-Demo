// import jwt from 'jsonwebtoken' ;
const jwt = require('jsonwebtoken')


const secret = 'secretkey'

function generateToken(info,expiration=null){

    if(expiration != null){
            info.iat = (Math.floor(Date.now/1000)) + (expiration*60) ;
    }
   
    let token = jwt.sign(info,secret) ;
    
    return token ;

}



function authMiddleWare(req,res,next){

    console.log("Auth Middleware")
    console.log(req.cookies)
    if(req.cookies == null){
        
        res.header('Location','/login')
        res.status(302).json({
            "error" : true ,
            "message" : "Unauthorized entry"
        })
        
    } else {
        let token = req.cookies.token ;
        try {

            let info = jwt.verify(token,secret) ;
            req.info = info ;
            next() ;
        } catch(err) {
            
            res.header('Location','/login')
            res.status(302).json({
                "error" : true ,
                "message" : "Nice try kiddo"
            })
        }

    }

}

module.exports.generateToken = generateToken ;
module.exports.authMiddleWare = authMiddleWare ;
