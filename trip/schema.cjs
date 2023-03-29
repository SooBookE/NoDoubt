const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VSchema = new Schema({
  name: String,
  id: String,
  pwd: String,
  Nickname: String,
  profile: String,
  introduce: String,
  gender: String,
  age: String,
  hobby: String,
  hob: String,
  PhoneNumber: String,
  identification: String
})

module.exports = mongoose.model('vdb', VSchema, 'vdb')
