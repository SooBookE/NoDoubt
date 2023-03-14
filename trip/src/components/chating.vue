<template>
  <!-- eslint-disable -->
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <button class="close" @click="$emit('close')">
        <div class="profile_container">
          <article class="resquick_content resquick_service">
            <div class="profile"></div>
            <div class="profile_nickname">{{ nickname }}</div>
            <hr />
            <div class="profile_introduce">{{ introduce }}</div>
            <div class="a" @click="$router.push('/profile_change')">
              프로필 수정
            </div>
          </article>
        </div>
      </button>
    </div>
  </transition>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      chating: false,
      nickname: '',
      introduce: '자기소개란 입니다.'
    }
  },
  mounted() {
    this.login_cookie()
  },

  methods: {
    openModal() {
      this.chating = true
    },
    closeModal() {
      this.chating = false
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('메시지를 입력해주세요.')
      }
    },
    login_cookie: function () {
      axios.get('/login_confirm_cookie').then((res) => {
        this.nickname = res.data
      })
    }
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
.modal.modal-overlay {
  position: fixed;
  z-index: 30;
  top: 8%;
  left: 57%;
  width: 20%;
  height: 45%;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}

.modal-enter-active,
.modal-leave-active.modal-window {
  transition: opacity 0.4s, transform 0.4s;
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter,
.modal-leave-to.modal-window {
  opacity: 0;
  transform: translateY(-20px);
}

.close {
  border: none;
  background-color: transparent;
}

.modal-footer {
  display: flex;
}
.profile {
  margin: 10px 0px;
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px black;
  background-color: #aaa;
}

.profile:hover {
  transform: scale(1.1) translateY(-5px);
  transition: 0.3s linear;
}

.profile_nickname {
  font-family: 'jua';
  font-size: medium;
  margin: 5px 0px;
  color: black;
}

.profile_introduce {
  width: 200px;
  height: auto;
  overflow-y: auto;
  margin: 10px;
  padding: 5px;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 3px 3px 3px black;
  background-color: white;
  color: black;
  font-family: 'jua';
  font-size: small;
}

.resquick_content {
  padding: 20px;
  border: 2px solid #3165dd;
  border-radius: 15px;
  box-shadow: 3px 3px 3px #002376;
  text-align: center;
  color: #3165dd;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.666);
}

.resquick_content > .a {
  border: 2px solid #3165dd;
  border-radius: 10px;
  padding: 2% 14%;
  position: relative;
  z-index: 1;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
}

.resquick_content > .a:after {
  content: '';
  width: 0%;
  height: 100%;
  top: 0;
  position: absolute;
  left: 0;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
  background: #3165dd;
}
.resquick_content > .a:hover {
  color: #fff;
}
.resquick_content > .a:hover:after {
  width: 100%;
  z-index: -1;
}

.a,
.a:hover,
.a:focus,
.a:active,
.a:link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.a {
  font-family: 'jua';
  font-size: medium;
  margin: 10px 0px;
}
</style>
