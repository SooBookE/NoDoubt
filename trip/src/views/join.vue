<!-- eslint-disable -->
<template>
  <div class="join_container">
    <form action="">
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
            />
          </td>
        </tr>
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
              placeholder="비밀번호 8자 이상 입력해주세요."
              required
              @keyup="password_length_confirm"
            />
          </td>
        </tr>
        <tr
          style="
            display: flex;
            width: 400px;
            justify-content: space-evenly;
            margin-bottom: 20px;
          "
        >
          <th style="width: 100px; text-align: right"></th>
          <td class="pwd_confirm_input_box">
            <input
              type="password"
              class="password2"
              v-model="pwd2"
              placeholder="비밀번호를 다시 입력해주세요."
              required
              @keyup="password_confirm"
            />
          </td>
        </tr>
        <div class="message">{{ message }}</div>
        <div class="password_length_confirm_message">
          {{ password_length_confirm_message }}
        </div>

        <button class="join_submit_button" type="submit" @click="join_confirm">
          login
        </button>
      </table>
    </form>
  </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      Array: [],
      data: '',
      id: '',
      pwd: '',
      pwd2: '',
      identification: '',
      message: '',
      password_length_confirm_message: ''
    }
  },

  crated() {
    this.identification_number
  },

  methods: {
    join_confirm: function () {
      axios
        .post('/login', {
          id: this.id,
          pwd: this.pwd,
          identification: this.identification
        })
        .then((res) => (this.data = res.data))
    },

    identification_number: function () {
      for (i = 0; i <= this.Array.length; i++) {
        const identification = floor(Math.random() * 9999999) + 1000000
        if (this.Array.indexOf[identification] == -1) {
          this.identification = identification
          console.log(identification)
          this.Array.push(identification)
        }
      }
    },

    password_confirm: function () {
      this.message = ''
      if (this.pwd == this.pwd2) {
        this.message = '비밀번호가 일치합니다.'
        return true
      } else {
        this.message = '비밀번호가 일치하지 않습니다.'
        return false
      }
    },

    password_length_confirm: function () {
      this.password_length_confirm_message = ''
      if (this.pwd.length < 8) {
        this.password_length_confirm_message = '8글자 이상 입력해주세요.'
        return false
      }
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;
}

.join_container {
  width: 500px;
  height: auto;
  padding: 20px;
  border: 1px solid #cc8b65;
  border-radius: 10px;
  background-color: #e3dcd293;
  box-shadow: 2px 2px 2px #e0d0b8;
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

.id_container,
.password_confirm_container,
.password_container {
  width: 500px;
  text-align: right;
}

.id_input_box,
.pwd_input_box,
.pwd_confirm_input_box {
}

.id_input,
.password1,
.password2 {
  border: none;
  border-bottom: 1px solid black;
  width: 200px;
  padding-left: 5px;
  background-color: transparent;
}

.id_input:hover,
.password1:hover,
.password2:hover {
  border-bottom: 2px solid #285185;
}

.id_input:focus,
.password1:focus,
.password2:focus {
  outline: none;
  border-bottom: 1px solid #aaa;
}

.join_submit_button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: 'dohyeon';
  font-size: larger;
  color: #100c0d;
}

.join_submit_button:hover {
  width: 80px;
  height: 30px;
  background-color: #285185;
  color: #e3dcd2;
  border-radius: 5px;
  transform: scale(1.2) translateY(-5px);
}

.password_length_confirm_message,
.message {
  margin-bottom: 10px;
  font-family: 'dohyeon';
}
</style>
