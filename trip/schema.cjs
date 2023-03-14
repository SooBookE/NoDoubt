const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VSchema = new Schema({
  name: String,
  id: String,
  pwd: String,
  Nickname: String,
  gender: String,
  age: String,
  hobby: String,
  PhoneNumber: String,
  identification: String
})

module.exports = mongoose.model('vdb', VSchema, 'vdb')
