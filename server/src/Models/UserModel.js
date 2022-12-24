const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    Email: {type: String, unique: true},
    FirstName: {type: String},
    LastName: {type: String},
    Mobile: {type: String},
    Password: {type: String},
    Photo: {type: String},
    CreateData: {type: Date, default: Date.now()}
}, {versionKey: false})



const UserModel = model('users', UserSchema)

module.exports = UserModel