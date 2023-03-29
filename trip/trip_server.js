require('dotenv').config()
const { Server } = require('socket.io')
const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')
const logger = require('morgan')
const http = require('http')
const cookieParser = require('cookie-parser')
// const VueCookies = require('vue-cookies')
const { createProxyMiddleware } = require('http-proxy-middleware')
const request = require('request')
const VSchema = require('./mdb.cjs')
const Counter_Schema = require('./counter_db.cjs')
const Board_Schema = require('./board_db.js')
const app = express()
/*https*/

/* AI 관리 스키마. */
const AISchema = require('./schema.js')
/* //AI 관리 스키마. */
/* GPT */
const { Configuration, OpenAIApi } = require('openai')
/* //GPT */

const server = http.createServer(app)
const io = new Server(server)

app.use(history())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const px_kogpt = {
  target: 'https://api.kakaobrain.com',
  changeOrigin: true
}

const px_gpt3 = {
  target: 'https://openapi.naver.com',
  changeOrigin: true
}

app.use(createProxyMiddleware('/v1/inference', px_kogpt))
app.use(createProxyMiddleware('/v1/papago', px_gpt3))

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

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(cookieParser())

/* AI 모델 전송 */
app.post('/dbr', (req, res) => {
  ;(async () => {
    const t = await AISchema.find({})
      .lean()
      .then((t) => {
        res.send(t)
        console.log(t) // 확인용.
      })
  })()
})
/* //AI 모델 전송 */

/*cookie*/
app.post('/cookie', (req, res) => {
  const login_id = req.body.id
  ;(async () => {
    const find_id = await VSchema.find({ id: login_id }, { _id: 0, __v: 0 })
    console.log(find_id[0].Nickname)
    console.log(find_id)
    res.cookie('nick', find_id[0].Nickname)
    res.render('Cookie', { nick: find_id[0].Nickname })
  })()
})

app.get('/login_confirm_cookie', (req, res) => {
  ;(async () => {
    const nick = req.cookies.nick
    res.send(nick)
  })()
})

/*cookie delete*/
app.get('/cookie_del', (req, res) => {
  ;(async () => {
    // const login_id = req.cookies.login_id
    res.clearCookie('nick')
    res.redirect('/')
  })()
})

/* gpt 응답*/
app.post('/gpt', (req, res) => {
  const configuration = new Configuration({
    apiKey: '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'
  })
  const openai = new OpenAIApi(configuration)
  console.log(req.body.q)
  ;(async function () {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: req.body.q,
      max_tokens: 500,
      temperature: 0,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      n: 1
    })
    const result = await response.data.choices[0].text
    res.send(result)
  })()
})
/* //gpt 응답*/

// const TelegramBot = require('node-telegram-bot-api')
// const cheerio = require('cheerio')
// let botid = '5964337605:AAEml_YxFqm7TY_IG0eDrsXgrhCCUS1WyQg'
// const token = botid
// const bot = new TelegramBot(token, { polling: true })

/*chating 연결*/
// io.on('connection', (socket) => {
//   socket.on('first_message', (msg) => {
//     io.emit('first_message', msg)
//   })
//   socket.on('chat_message', (msg) => {
//     let A = msg + console.log(A)
//     io.emit('chat_message', A)
//   })
// })

/*chating socket 연결*/
// io.on('connection', (socket) => {
// })

/*카카오톡 채널톡*/

/*MongoDB CRUD*/

/* AI 재학습용 데이터 송수신 */
// 고객정보 송출.
app.post('/info_get', (req, res) => {
  ;(async () => {
    const t = await VSchema.find(
      {},
      {
        _id: 0,
        __v: 0,
        name: 0,
        id: 0,
        pwd: 0,
        Nickname: 0,
        PhoneNumber: 0,
        identification: 0
      }
    )
      .lean()
      .then((t) => {
        res.send(t)
        console.log(t) // 확인용.
      })
  })()
})
// 학습 모델 갱신.
app.post('/dbu', (req, res) => {
  ;(async () => {
    await VSchema.updateOne(
      {},
      {
        $set: {
          topo: req.body.topo,
          weightD: req.body.weightD,
          weightS: req.body.weightS,
          info: req.body.info,
          meta: req.body.meta
        }
      },
      { upsert: true }
    )
  })()
})
/* //AI 재학습용 데이터 송수신 */

/*회원가입 시 DB에 고객 정보 저장*/
app.post('/join', (req, res) => {
  const name = req.body.name
  const id = req.body.id
  const pwd = req.body.pwd
  const Nickname = req.body.Nickname
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
      Nickname,
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

/*랜덤 닉네임 생성*/
app.get('/nick', (req, res) => {
  const url = 'https://nickname.hwanmoo.kr/?format=json&count=1'
  // let nickname_confirm
  let nick = ''
  const working = async function () {
    await request(url, async function (error, response, body) {
      const rst = JSON.parse(body)
      console.log(rst.words[0])
      nick = rst.words
      const exist = await VSchema.find({ Nickname: nick })
      if (exist.length == 0) {
        res.send(nick)
      } else {
        working()
      }
    })
  }
  working()
  // ;(async () => {
  //   nickname_confirm = await VSchema.find(
  //     { Nickname: nick },
  //     { _id: 0, __v: 0 }
  //   )
  //   console.log(nickname_confirm)

  //   if (nickname_confirm.length == 0) {
  //     res.send(nick)
  //     return
  //   } else {
  //     nick_get = request(url, function (error, response, body) {
  //       const rst = JSON.parse(body)
  //       // console.log(rst)
  //       nick = rst.words[0]
  //       // console.log(nick)
  //     })
  //   }
  // })()
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
  ;(async () => {
    const find_login = await VSchema.find({ id: login_id }, { _id: 0, __v: 0 })
    console.log(find_login)
    if (find_login[0].pwd == login_pwd) {
      res.send('2')
    } else {
      res.send('1')
    }
  })()
})

/*아이디 찾기*/
app.post('/find_id', async (req, res) => {
  const find_name = req.body.name
  const find_phoneNumber = req.body.phoneNumber
  ;(async () => {
    const name = await VSchema.find(
      { name: find_name, PhoneNumber: find_phoneNumber },
      { __v: 0 }
    )
    if (name.length > 0) {
      console.log(name)
      res.send(name)
      console.log(name[0].id)
    } else {
      res.send('1')
    }
  })()
})

/*비밀번호 찾기*/
app.post('/find_pwd', async (req, res) => {
  const find_pwd_id = req.body.id
  const find_phoneNumber_pwd = req.body.phoneNumber
  console.log(find_pwd_id)
  console.log(find_phoneNumber_pwd)
  ;(async () => {
    const pwd = await VSchema.find(
      { id: find_pwd_id, PhoneNumber: find_phoneNumber_pwd },
      { __v: 0 }
    )
    console.log(pwd)
    if (pwd.length > 0) {
      let temp_pw = ''

      let ranValue1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      let ranValue2 = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'S',
        'T',
        'U',
        'V'
      ]
      let ranValue3 = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'v',
        'w',
        'x',
        'y',
        'z'
      ]
      let ranValue4 = ['!', '@', '#', '$', '%', '^', '&', '*']

      for (let i = 0; i < 2; i++) {
        temp_pw += ranValue1[Math.floor(Math.random() * ranValue1.length)]
        temp_pw += ranValue2[Math.floor(Math.random() * ranValue2.length)]
        temp_pw += ranValue3[Math.floor(Math.random() * ranValue3.length)]
        temp_pw += ranValue4[Math.floor(Math.random() * ranValue4.length)]
      }
      const new_password = temp_pw
      res.send(new_password)

      const update_pwd = await VSchema.updateOne(
        { id: find_pwd_id },
        {
          $set: {
            pwd: new_password
          }
        },
        { upsert: true }
      )
      console.log(update_pwd)
    } else {
      ;('1')
    }
  })()
})

/*비밀번호 변경*/
app.post('/pwd_change', async (req, res) => {
  const change_pwd_id = req.body.id
  const change_phoneNumber_pwd = req.body.pwd
  ;(async () => {
    const change_pwd = await VSchema.updateOne(
      { id: change_pwd_id },
      {
        $set: {
          pwd: change_phoneNumber_pwd
        }
      },
      { upsert: true }
    )
    console.log(change_pwd)
    console.log(change_phoneNumber_pwd)
    res.send('1')
  })()
})

/*프로필 정보 불러오기*/
app.post('/customer', (req, res) => {
  let nickname = req.body.nickname
  console.log(nickname)
  ;(async () => {
    const profile = await VSchema.find({ Nickname: nickname }, { __v: 0 })

    res.send(profile)
    console.log(profile)
  })()
})

/*프로필 비밀번호 check*/
app.post('/profile_pwd_check', (req, res) => {
  const nick = req.body.nick
  const pwd = req.body.pwd
  ;(async () => {
    const profile_check = await VSchema.find(
      { Nickname: nick, pwd: pwd },
      { __v: 0 }
    )
    console.log(profile_check)
    if (profile_check.length >= 1) {
      res.send('1')
    } else res.send('2')
  })()
})

/*프로필 수정*/
app.post('/profile_change', (req, res) => {
  const profile_id = req.body.id
  const profile = req.body.profile
  const introduce = req.body.introduce
  ;(async () => {
    const change_profile = await VSchema.updateOne(
      { id: profile_id },
      {
        $set: {
          profile: profile,
          introduce: introduce
        }
      },
      { upsert: true }
    )
    console.log(change_profile)
    res.send('1')
  })()
})

/*게시판 글번호 불러오기*/
app.get('/numbering', (req, res) => {
  ;(async () => {
    const number = await Counter_Schema.find(
      { name: '총 게시물 개수' },
      { __v: 0 }
    )

    res.send(number)
    console.log(number)

    const notice_number = number[0].totalPosts
    const update_totalPosts = await Counter_Schema.updateOne(
      { name: '총 게시물 개수' },
      {
        $set: {
          totalPosts: notice_number + 1
        }
      },
      { upsert: true }
    )
    console.log(update_totalPosts)
  })()
})

/*mongoDB 게시글 작성 저장*/
app.post('/write', (req, res) => {
  const title = req.body.title
  const writer = req.body.writer
  const img = req.body.img
  const content = req.body.content
  const date = req.body.date
  ;(async () => {
    const counter_num = await Counter_Schema.find(
      { name: '총 게시물 개수' },
      { __v: 0 }
    )

    const No = counter_num[0].totalPosts

    console.log(No, title, writer, img, content, date)

    const _data = {
      No,
      title,
      writer,
      img,
      content,
      date
    }

    const vs = await new Board_Schema(_data)
    const t = await vs.save()
    res.send('1')
    console.log(t)
  })()
})

/*board_read*/
app.get('/get_board', (req, res) => {
  ;(async () => {
    const get = await Board_Schema.find({}).sort({ No: -1 })
    res.send(get)
    // console.log(get)
  })()
})

/*게시글 모달에 띄우기*/
app.post('/board_modal', (req, res) => {
  const find_board = req.body.title
  ;(async () => {
    const get = await Board_Schema.find({ title: find_board })
    res.send(get)
    console.log(get)
  })()
})

/*실시간 현황 크롤링*/
// const axios = require('axios')
// const cheerio = require('cheerio') //선택자로 필요한 정보만 추출

// const url =
//   'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B2%BD%EB%B3%B5%EA%B6%81%C2%B7%EC%84%9C%EC%B4%8C%EB%A7%88%EC%9D%84&y=126.9730282&x=%EA%B2%BD%EB%B3%B5%EA%B6%81%C2%B7%EC%84%9C%EC%B4%8C%EB%A7%88%EC%9D%84'

// let data = []

// axios.get(url).then((res) => {
//   let $ = cheerio.load(res.data)

//   $('.content_report_home report_cell flex flex-col gap-2').each(function () {
//     data.push($(this))
//   })
// })
// console.log(data)

// app.get('/data', (req, res) => {
//   res.send(data)
//   console.log(data)
// })

app.listen(port, () => {
  console.log(port + '에서 서버동작 완료.')
})
