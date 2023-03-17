const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Board_Schema = new Schema({
  No: Number,
  title: String,
  writer: String,
  img: String,
  content: String,
  date: String
})

module.exports = mongoose.model('board_db', Board_Schema, 'board_db')
