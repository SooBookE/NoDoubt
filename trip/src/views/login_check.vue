<!-- eslint-disable -->
<template>
  <categorie></categorie>
  <div class="login_out_container">
    <div class="join_container">
      <div class="login_title">{{ customer_nickname }}님, 환영합니다.</div>
      <div class="Eng_title">프로필 수정을 위하여 본인확인 부탁드립니다.</div>
      <table class="login_form_table">
        <tr
          style="
            display: flex;
            width: 400px;
            justify-content: space-evenly;
            margin-bottom: 20px;
          "
        >
          <th style="width: 100%; margin: 1rem 0rem">
            <label for="id_input_label" style="color: #d67940"
              >{{ customer_nickname }}님, 안녕하세요!</label
            >
          </th>
          <!-- <td>
            {{ customer_nickname }}
          </td> -->
        </tr>
      </table>
      <table class="login_form_table">
        <tr
          style="
            display: flex;
            width: 400px;
            justify-content: space-evenly;
            margin-bottom: 20px;
          "
        >
          <th>
            <label
              class="pwd_input_label"
              for="password1"
              style="color: #d67940"
              >PASSWORD</label
            >
          </th>
          <td class="pwd_input_box">
            <input
              type="password"
              class="password1"
              v-model="pwd"
              placeholder="비밀번호를 입력해주세요."
              required
              @blur="profile_check_message = ''"
              @keyup.enter="profile_check()"
            />
          </td>
        </tr>
        <div v-if="profile_check_message.length" class="id_password_message">
          {{ profile_check_message }}
        </div>
        <button
          class="login_submit_button"
          type="submit"
          @click="profile_check()"
        >
          login
        </button>
      </table>
      <div class="forget_container">
        <div class="forget_id" @click="$router.push('/find_id_pwd')">
          아이디/비밀번호를 잊으셨나요?
        </div>
        <!-- <div class="forget_pwd" @click="$router.push('/find_id_pwd')">
            비밀번호를 잊으셨나요?
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import categorie from '../components/categories.vue'

import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      data: '',
      id: '',
      pwd: '',
      id_confirm_message: '',
      profile_check_message: '',
      customer_nickname: ''
    }
  },
  watch: {
    $route(to, from) {
      console.log(to)
    }
  },
  mounted() {
    this.nickname()
  },

  methods: {
    nickname: function () {
      axios.get('/login_confirm_cookie').then((res) => {
        this.customer_nickname = res.data
      })
    },
    profile_check: function () {
      axios
        .post('/profile_pwd_check', {
          nick: this.customer_nickname,
          pwd: this.pwd
        })
        .then((res) => {
          console.log(res)
          if (res.data == '1') {
            this.profile_check_message = `프로필 수정을 하러 오셨군요!`
            this.$router.push('/profile_change')
          } else {
            this.profile_check_message = '비밀번호가 불일치합니다.'
          }
        })
    },

    password_check_confirm: function () {
      axios
        .post('/login_check', {
          id: this.id,
          pwd: this.pwd
        })
        .then((res) => {
          console.log(res.data)
          if (res.data == '2') {
            this.id_password_message = '아이디와 비밀번호가 일치합니다.'
            alert(`${this.id}님, 반갑습니다.`)
            axios.get('/setCookie' + this.id)

            this.$router.push('/')
          } else {
            this.id_password_message = '비밀번호가 일치하지 않습니다.'
          }
        })

      axios.post('/cookie', {
        id: this.id
      })
    }
  },
  components: {
    categorie
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

body {
  width: 100%;
  height: 900px;
}

.login_out_container {
  margin-top: 15rem;
  width: 100%;
  height: 580px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.join_container {
  width: 500px;
  height: auto;
  padding: 50px;
  /* border: 3px solid #072a40;
    border-radius: 10px;
    background-color: #f2f6f9;*/
  box-shadow: 5px 5px 10px #555555;
  border-radius: 10px;
}

.login_title {
  font-family: 'dohyeon';
  font-size: x-large;
  color: #d67940;
}

.Eng_title {
  font-family: 'dohyeon';
  font-size: medium;
  margin-bottom: 50px;
  color: #d67940;
}

tr {
  font-family: 'dohyeon';
  display: flex;
  width: 400px;
  align-items: center;
}

.login_form_table {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.id_check_button {
  padding: 5px;
  cursor: pointer;
  color: #100c0d;
  background-color: #e3dcd2;
  border: none;
  border-radius: 5px;
  font-family: 'dohyeon';
}

.id_check_button:hover {
  transform: scale(1.1) translateY(-2px);
}

.id_container,
.password_confirm_container,
.password_container {
  width: 500px;
  text-align: right;
}
/*
  .id_input_box,
  .pwd_input_box,
  .pwd_confirm_input_box {
  } */

.id_input,
.password1 {
  border: none;
  border-bottom: 1px solid black;
  width: 200px;
  padding-left: 5px;
  background-color: transparent;
  color: #777777;
}

.id_input:hover,
.password1:hover {
  border-bottom: 2px solid #285185;
}

.id_input:focus,
.password1:focus {
  outline: none;
  border-bottom: 1px solid #aaa;
}

.login_submit_button {
  position: relative;
  z-index: 1;
  width: 80px;
  height: 30px;
  border: 2px solid #d67940;
  /* border: none; */
  background-color: transparent;
  cursor: pointer;
  font-family: 'dohyeon';
  font-size: larger;
  color: #d67940;
  background-color: #d67940;
  border-radius: 5px;
  /* box-shadow: 2px 2px 1px #7d3000; */
}

.login_submit_button:after {
  content: '';
  color: white;
  z-index: -1;
  border-radius: 3px;
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
  background-color: #d67940;
}

.login_submit_button,
.login_submit_button:hover,
.login_submit_button:focus,
.login_submit_button:active,
.login_submit_button:link {
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
}

.login_submit_button:hover {
  color: #fff;
  z-index: 999;
}
.login_submit_button:hover:after {
  width: 100%;
  z-index: -999;
}

/* .login_submit_button:hover {
    width: 80px;
    height: 30px;
    background-color: white;
    color: #d67940;
    border-radius: 5px;
    transform: scale(1.1);
    box-shadow: none;
    transition: 0.2s linear;
  } */

.id_confirm_message,
.id_password_message {
  margin-bottom: 40px;
  font-family: 'dohyeon';
}

.forget_container {
  height: 50px;
  margin-top: 50px;
}

.forget_id,
.forget_pwd {
  display: inline;
  padding: 10px;
  border: 2px solid #d67940;
  color: #d67940;
  border-radius: 10px;
  cursor: pointer;
}

.forget_id:hover {
  color: white;
  background-color: #d67940;
  transform: translateY(-5px);
  transition: 0.1s linear;
  /* border-bottom: 2px solid #285185; */
  /* display: inline-block; */
}
</style>
