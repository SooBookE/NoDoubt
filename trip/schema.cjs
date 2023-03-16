const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VSchema = new Schema({
  name: String,
  id: String,
  pwd: String,
  gender: String,
  age: String,
  hobby: String,
  PhoneNumber: String,
  identification: Number
})

module.exports = mongoose.model('vdb', VSchema, 'vdb')
