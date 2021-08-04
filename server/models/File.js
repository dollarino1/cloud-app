const {Schema, model, ObjectId} = require('mongoose')

const File = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    size: {type: Number, default: 0},
    path: {type: String, default: ''},
    accessLink: {type: String},
    user: {type: ObjectId, ref: 'User'},
    parent: {type: ObjectId, ref: 'File'},
    childs: [{type: ObjectId, ref: 'File'}]
})

module.exports = model('User', User)