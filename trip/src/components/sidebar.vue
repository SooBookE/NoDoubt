<template>
  <!-- eslint-disable -->

  <chating @close="closechat_screen" v-if="chating_screen"> </chating>
  <div class="sidebar_container">
    <div class="chat_container">
      <!-- <label class="chat_label" for="">
        <img class="chat_img" src="../../public/chat.png" alt="" /> -->
      <div class="sidebar_box" ref="target">
        <button class="chat_help" @click="logout()">로그아웃</button>
        <!-- </label> -->
      </div>
      <div class="sidebar_box">
        <label for="">
          <button id="target" @click="handleScroll()">
            <img id="top_arrow" src="../../public/arrow.png" alt="" />
          </button>
        </label>
      </div>
    </div>
  </div>
  <chatbot></chatbot>
</template>

<script>
/* eslint-disable */
import chating from './profile.vue'
import chatbot from '../components/chatbot.vue'
import axios from 'axios'
import { windowTime } from 'rxjs'

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
        window.scrolllTo(0, chat_screen.scrollHeight)
        this.message_arr.push(v.data)
      }
  },
  mounted() {
    setInterval(() => {
      if (
        document.cookie.split(';').some(function (item) {
          return item.trim().indexOf('nick=') == 0
        })
      ) {
        this.$refs.target.style.visibility = 'visible'
      } else {
        this.$refs.target.style.visibility = 'hidden'
      }
    }, 500)
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
      alert('Have a Good Trip!')
      this.$router.go('/')
      window.scroll(0, 0)
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

<style scoped>
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
  right: -4%;
  top: 70%;
  text-align: center;
  width: 10%;
  background-color: transparent;
}

.chat_container {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}

.sidebar_box {
  width: 6rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 3px solid #f2ab39;
  margin: 2px 0px;
}

button {
  font-family: 'jua';
  font-size: large;
  background-color: transparent;
  border: none;
  cursor: pointer;
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
