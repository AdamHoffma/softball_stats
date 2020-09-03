const jwt = require('jsonwebtoken')
const secret = require('../secret/secret.js')

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    console.log("token", token)
    
    if(token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if(err) {                
                res.status(401).json({message: "Token is not valid"})                
            } else {
                req.user = {name: decodedToken.name}                
                next()
            }
        })
    } else {
        res.status(401).json({message: "You shall not pass"})
    }
}