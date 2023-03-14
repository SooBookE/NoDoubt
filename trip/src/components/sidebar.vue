<template>
  <!-- eslint-disable -->

  <chating @close="closechat_screen" v-if="chating_screen"> </chating>
  <div class="sidebar_container">
    <div class="chat_container">
      <!-- <label class="chat_label" for="">
        <img class="chat_img" src="../../public/chat.png" alt="" /> -->
      <button class="chat_help" @click="logout()">로그아웃</button>
      <chatbot></chatbot>
      <!-- </label> -->
    </div>
    <label for="">
      <button id="target" @click="handleScroll()">
        <img id="top_arrow" src="../../public/arrow.png" alt="" />
      </button>
    </label>
  </div>
</template>

<script>
/* eslint-disable */
import chating from '../components/chating.vue'
import chatbot from '../components/chatbot.vue'
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      chating_screen: false,
      message_arr: [],
      message: '여행가님, 안녕하세요. 무엇을 도와드릴까요?'
    }
  },

  created() {
    this.$socket.on('first_message'),
      (v) => {
        const chat_screen = document.querySelector('.chat_screen')
        console.log(v)
        window.scrolllTo(0, chat_screen.scrollHeight)
        this.message_arr.push(v.data)
      }
  },
  methods: {
    handleScroll: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },

    logout: function () {
      axios.get('/cookie_del').then((res) => {
        console.log(res)
      })
    },
    closechat_screen: function () {
      this.chating_screen = false
    }
  },
  components: {
    chating,
    chatbot
  }
}
</script>

<style>
@font-face {
  font-family: 'jua';
  src: url('../../public/font/BMJUA_ttf.ttf');
}

@font-face {
  font-family: 'dohyeon';
  src: url('../../public/font/BMDOHYEON_ttf.ttf');
}

.sidebar_container {
  position: fixed;
  right: 50%;
  top: 80%;
  margin-right: -48%;
  text-align: center;
  width: 10%;
  background-color: transparent;
}

.chat_help {
  background-color: antiquewhite;
  cursor: pointer;
}

#target {
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.chat_container {
  display: flex;
  margin-bottom: 5px;
}

.chat_img {
  width: 40%;
}

.chat_label {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#top_arrow {
  width: 40%;
}
</style>
