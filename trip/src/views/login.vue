<!-- eslint-disable -->
<template>
  <div class="login_out_container">
    <div class="join_container">
      <div class="login_title">여행가님, 환영합니다.</div>
      <div class="Eng_title">Welcome, Traveler</div>
      <table class="login_form_table">
        <tr
          style="
            display: flex;
            width: 400px;
            justify-content: space-evenly;
            margin-bottom: 20px;
          "
        >
          <th style="width: 100px; text-align: right">
            <label for="id_input_label" style="color: #d67940">ID</label>
          </th>
          <td class="id_input_box">
            <input
              type="id"
              class="id_input"
              v-model="id"
              placeholder="아이디를 입력해주세요."
              required
              @keyup="id_confirm"
            />
          </td>
        </tr>
      </table>
      <div v-if="id_confirm_message.length" class="id_confirm_message">
        {{ id_confirm_message }}
      </div>

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
              @blur="id_password_message = ''"
            />
          </td>
        </tr>
        <div v-if="id_password_message.length" class="id_password_message">
          {{ id_password_message }}
        </div>
        <button
          class="login_submit_button"
          type="submit"
          @click="password_check_confirm"
        >
          login
        </button>
      </table>
      <div class="forget_container">
        <div class="forget_id" @click="$router.push('/find_id_pwd')">
          아이디를 잊으셨나요?
        </div>
        <div class="forget_pwd" @click="$router.push('/find_id_pwd')">
          비밀번호를 잊으셨나요?
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      data: '',
      id: '',
      pwd: '',
      id_confirm_message: '',
      id_password_message: ''
    }
  },
  watch: {
    $route(to, from) {
      console.log(to)
    }
  },

  methods: {
    id_confirm: function () {
      axios
        .post('/id_confirm', {
          id: this.id
        })
        .then((res) => {
          console.log(res)
          if (res.data == '2') {
            this.id_confirm_message = `Welcome, ${this.id} 님!`
          } else {
            this.id_confirm_message = ''
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
            this.$router.push('/')
          } else {
            this.id_password_message = '비밀번호가 일치하지 않습니다.'
          }
        })
    }
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
  background-color: #f7f1f0;
}

.login_out_container {
  width: 100%;
  height: 580px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.join_container {
  width: 500px;
  height: auto;
  padding: 20px;
  border: 3px solid #072a40;
  border-radius: 10px;
  background-color: #f2f6f9;
  box-shadow: 5px 5px 10px #0b4264;
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
  width: 80px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: 'dohyeon';
  font-size: larger;
  color: #100c0d;
  background-color: #e3dcd2;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #285185;
}

.login_submit_button:hover {
  width: 80px;
  height: 30px;
  background-color: #285185;
  color: #e3dcd2;
  border-radius: 5px;
  transform: scale(1.2) translateY(-5px);
}

.id_confirm_message,
.id_password_message {
  margin-bottom: 30px;
  font-family: 'dohyeon';
}

.forget_container {
  margin-top: 30px;
}

.forget_id,
.forget_pwd {
  margin: 10px 0px;
  cursor: pointer;
}

.forget_id:hover,
.forget_pwd:hover {
  border-bottom: 1px solid #285185;
  display: inline;
}
</style>
