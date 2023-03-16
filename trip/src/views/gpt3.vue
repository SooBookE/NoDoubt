<template>
  <div>OPEN AI 자연어 처리기반 GPT3 챗</div>
  <hr />
  <textarea disabled name="" id="" cols="30" rows="10" :value="resp"></textarea
  ><br />
  <input
    name=""
    id=""
    cols="30"
    rows="10"
    @keyup.enter="gpt3r()"
    v-model="inData"
    placeholder="질문할 내용 입력하기"
  />
  <button @click="gpt3r()">묻기</button>

  {{ history }}
</template>
<script>
import { gpt3 } from '../../public/gpt3_v1.js'
export default {
  data() {
    return {
      inData: '',
      resp: '',
      history: this.$history3,
      init: ''
    }
  },
  methods: {
    gpt3r: async function () {
      this.resp = '타이핑 중..'
      let history0 = localStorage.getItem('gpt3') ?? ''
      if (history0.length > 3000) {
        history0 = history0.slice(500)
      }
      const start = history0 + this.inData
      // const ask = start + this.inData + '\nA:'
      // const ask = this.inData
      const answer = await gpt3(start)
      // const ans = answer.split('\n')[0]
      this.resp = answer
      const history = start + ' AI:' + answer + ' Human:'
      localStorage.setItem('gpt3', history)
      console.log(history)
      this.inData = ''[(' Human:', ' AI:')]
    },
    components: {}
  }
}
</script>
<style scoped>
textarea {
  font-size: 1.1em;
  color: #fff;
  resize: none;
  font-weight: bold;
  background-color: darkcyan;
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
