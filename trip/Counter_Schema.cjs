const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Counter_Schema = new Schema({
  totalPosts: Number,
  name: String
})

module.exports = mongoose.model('counter', Counter_Schema, 'counter')
