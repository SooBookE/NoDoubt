require("dotenv").config();
const mongoose = require("mongoose");
const Board_Schema = require("./board_schema.js");
const USER = "mk";
const PWD = "mk1234";
const HOST = "127.0.0.1:27017"; //localhost접속이 불가
const DB = "admin";

const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;

//mongoose.set('useFindAndModify',false)    //버전 6부터 자동관리
mongoose.set("strictQuery", false); //변경사항 넣기
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() =>
    console.log(
      "MDB Connection Successful\nShema load successful\nQuery Loading"
    )
  )
  .catch((e) => console.error(e));
module.exports = Board_Schema;
