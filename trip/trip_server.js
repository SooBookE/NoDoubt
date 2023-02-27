require('dotenv').config()
const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')
const logger = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')
const VSchema = require('./mdb.cjs')
const app = express()

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
/*CRUD에서 Create*/
app.post('/login', (req, res) => {
  const id = req.body.id
  const pwd = req.body.pwd
  const identification = req.body.identification

  console.log(id, pwd, identification)
  ;(async () => {
    const _data = { id, pwd, identification }
    const vs = await new VSchema(_data)
    const t = await vs.save()
    console.log(t)
    res.send('input_data_successful')
  })()
})

app.listen(port, () => {
  console.log(port + '에서 서버동작 완료.')
})
