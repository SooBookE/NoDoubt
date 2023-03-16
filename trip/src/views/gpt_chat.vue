<template>
  <div>카카오톡 KOGPT 자연어 처리기반 API 챗</div>
  <hr />
  <textarea disabled name="" id="" cols="30" rows="10" :value="resp"></textarea
  ><br />
  <input
    name=""
    id=""
    cols="30"
    rows="10"
    @keyup.enter="gpt()"
    v-model="inData"
    placeholder="질문할 내용 입력하기"
  />
  <button @click="gpt()">묻기</button>

  {{ history }}
</template>
<script>
import { kogptApi } from '../../public/kogpt_v1.js'
export default {
  data() {
    return {
      inData: '',
      resp: '',
      history: this.$history,
      init: `정보: 거주지 부산, 나이 40대, 성별 남자, 자녀 두 명, 전공 인공지능, 말투 친절함
  정보를 바탕으로 질문에 답하세요.
  Q:안녕하세요 반갑습니다. 자기소개 부탁드려도 될까요?
  A:안녕하세요. 저는 부산에 거주하고 있는 40대 남성입니다.
  Q:오 그렇군요, 결혼은 하셨나요?
  A:결혼은 아직이에요
  Q:`
    }
  },
  methods: {
    gpt: async function () {
      this.resp = '타이핑 중..'
      const history0 = '' // localStorage.getItem('gpt') ?? ''
      const start = this.init + history0
      const ask = start + this.inData + '\nA:'
      // const ask = this.inData
      const answer = await kogptApi(ask, 32, 0.6, 0.7, 1)
      const ans = answer.split('\n')[0]
      this.resp = ans
      const history = history0 + 'Q:' + this.inData + '\nA:' + ans + '\n'
      localStorage.setItem('gpt', history)
      console.log(history)
      this.inData = ''
    },
    components: {}
  }
}
</script>
<style scoped>
textarea {
  font-size: 1.1em;
  color: cadetblue;
  resize: none;
  font-weight: bold;
  background-color: antiquewhite;
}
input {
  width: 210px;
  height: 30px;
}
button {
  width: 45px;
  height: 35px;
}
</style>
