const jwt = require('jsonwebtoken')
const UserModel = require("../Models/UserModel")


exports.RegistrationUser = (req, res) => {
    const allData = req.body 

    UserModel.create(allData, (err, data) => {
        if(err){
            res.status(400).json({massage: 'Create Error', err})
        }else{
            res.status(200).json({massage: 'success', data})
        }
    })
}




exports.LoginUser = (req, res) => {
    const allData = req.body

    UserModel.aggregate([
        
        {$match: allData},
        {$project: {_id: 0, Email: 1, FirstName: 1, LastName: 1, Mobile: 1}}

    ], (err, data) => {

        if(err){
            res.status(400).json({massage: 'Login Failed', err})
        }
        else {
            if(data.length > 0){
                
                const payload = {
                    data: data
                }
                
                const token = jwt.sign(payload, 'riad')
                
                res.status(200).json({massage: 'success', data, token})
                
            }else{
                res.json({massage: 'Unauthorized'})
            }
        }
    })
}





exports.UpdateUser = (req, res) => {
    
    const query = req.body

    UserModel.updateOne(query, (err, data) => {
        if(err){
            res.json({massage: 'Update User Error', err})
        }else{
            res.json({massage: 'success', data})
        }
    })
}




exports.AllUser = (req, res) => {
    UserModel.find({}, (err, data) => {
        if(err){
            res.json({massage: 'All User Error', err})
        }else{
            res.json({massage: 'success', data})
        }
    })
}


exports.SingleUser = (req, res) => {
    const id = req.params.id
    const query = {_id: id}

    UserModel.find(query, (err, data) => {
        if(err){
            res.json({massage: 'Single User Error', err})
        }else{
            res.json({massage: 'success', data})
        }
    })

}




exports.DeleteUser = (req, res) => {
    const id = req.params.id
    const query = {_id: id}

    UserModel.remove(query, (err, data) => {
        if(err){
            res.json({massage: 'Delete User Error', err})
        }else{
            res.json({massage: 'success', data})
        }
    })
}