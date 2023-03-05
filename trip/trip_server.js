require('dotenv').config()
const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')
const logger = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')
const VSchema = require('./mdb.cjs')
const app = express()

app.use(history())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  createProxyMiddleware('/v1', {
    target: 'https://openapi.naver.com',
    changeOrigin: true
  })
)

const port = 3000
const _path = path.join(__dirname, './dist')

app.use('/', express.static(_path))
app.use(logger('tiny'))

/*MongoDB CRUD*/
/*회원가입 시 DB에 고객 정보 저장*/
app.post('/join', (req, res) => {
  const name = req.body.name
  const id = req.body.id
  const pwd = req.body.pwd
  const gender = req.body.gender
  const age = req.body.age
  const hobby = req.body.hobby
  const PhoneNumber = req.body.phoneNumber
  const identification = req.body.identification

  console.log(id, pwd, identification)
  ;(async () => {
    const _data = {
      name,
      id,
      pwd,
      gender,
      age,
      hobby,
      PhoneNumber,
      identification
    }
    const vs = await new VSchema(_data)
    const t = await vs.save()
    console.log(t)
    res.send('input_data_successful')
  })()
})

/*회원 가입 시 아이디 중복 여부*/
app.post('/id_check', async (req, res) => {
  const user_id_check = req.body.id
  console.log(user_id_check)
  ;(async () => {
    const find_id = await VSchema.find(
      { id: user_id_check },
      { _id: 0, __v: 0 }
    )
    if (find_id.length > 0) {
      res.send('2') //id가 존재할 경우 '2'를 보냄.
    } else {
      res.send('0') //id가 존재하지 않는 경우 '1'을 보냄.
    }
  })()
})

/*로그인 아이디 존재 여부*/
app.post('/id_confirm', async (req, res) => {
  const confirm_id = req.body.id
  console.log(confirm_id)
  ;(async () => {
    const confirm = await VSchema.find({ id: confirm_id }, { _id: 0, __v: 0 })
    console.log(confirm)
    if (confirm.length >= 1) {
      res.send('2')
      console.log(res.send)
    } else {
      res.send('1')
    }
  })()
})

/*로그인 아이디 비밀번호 일치 여부*/
app.post('/login_check', async (req, res) => {
  const login_id = req.body.id
  const login_pwd = req.body.pwd
  // console.log(login_pwd)
  ;(async () => {
    const find_login = await VSchema.find(
      { id: login_id },
      { _id: 0, __v: 0 }
    ).then((find_login) => {
      if (find_login[0].pwd == login_pwd) {
        res.send('2')
      } else {
        res.send('1')
      }
    })
  })()
})

app.listen(port, () => {
  console.log(port + '에서 서버동작 완료.')
})
