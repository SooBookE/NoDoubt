// const axios = require('axios')
import axios from 'axios'

export async function kogptApi(prompt, max_tokens = 32, temperature, topP, n) {
  const REST_API_KEY = process.env.VUE_APP_kogpt
  let rst = '생각중'
  const url = '/v1/inference/kogpt/generation'
  const headers = {
    Authorization: 'KakaoAK ' + REST_API_KEY,
    'Content-Type': 'application/json'
  }
  const options = {
    url,
    method: 'POST',
    data: {
      prompt,
      max_tokens,
      temperature,
      top_p: topP,
      n
    },
    headers,
    responseType: 'json'
  }

  await axios(options).then((res) => {
    rst = res.data.generations[0].text
  })
  return rst
}
// const prompt =
//   '정보:거주지 서울, 나이 30대, 성별 남자, 자녀 두 명, 전공 인공지능, 말투 친절함\n정보를 바탕으로 질문에 답하세요.\nQ:안녕하세요 반갑습니다. 자기소개 부탁드려도 될까요?\nA:안녕하세요. 저는 서울에 거주하고 있는 30대 남성입니다.\nQ:오 그렇군요, 결혼은 하셨나요?\nA:'
// kogptApi(prompt, 32, 0.5, 0.8, 1)

/* KoGPT에게 전달할 명령어 구성 */

// const prompt = ''

// kogpt_api(prompt, 32, 0.5, 0.8, 1)
// export default { kogptApi }
