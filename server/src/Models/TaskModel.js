const {Schema, model} = require('mongoose')

const TaskSchema = new Schema({
    Title: {type: String},
    Description: {type: String},
    Status: {type: String},
    Email: {type: String},
    CreateDate: {type: Date, default: Date.now()}
}, {versionKey: false})

const TaskModel = model('tasks', TaskSchema)

module.exports = TaskModel



