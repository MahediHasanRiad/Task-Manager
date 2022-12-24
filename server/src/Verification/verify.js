const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers['token']
    jwt.verify(token, 'riad', (err, decoded) => {
        if(err){
            res.json({massage: 'verify Failed', err})
        }else{
            let email = decoded['data'][0]['Email']
            req.headers.email = email
            next()
        }
    })
}


module.exports = verifyToken