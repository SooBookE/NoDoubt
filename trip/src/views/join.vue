<template>
  <div class="join_container">
    <form action="">
      <div class="id_container">
        <label for="id_input"
          >ID :
          <input
            type="id"
            class="id_input"
            v-model="id"
            placeholder="아이디를 입력해주세요."
          />
        </label>
      </div>
      <div class="password_container">
        <label for="password1"
          >PASSWORD :
          <input
            type="password"
            class="password1"
            v-model="pwd"
            placeholder="비밀번호 8자 이상 입력해주세요."
            required
            @keyup="password_length_confirm"
          />
        </label>
      </div>
      <div class="password_confirm_container">
        <input
          type="password"
          class="password2"
          v-model="pwd2"
          placeholder="비밀번호를 다시 입력해주세요."
          required
          @keyup="password_confirm"
        />
      </div>

      <div>{{ message }}</div>
      <div>{{ password_length_confirm_message }}</div>

      <button type="submit" @click="join_confirm">login</button>
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

.join_container {
  display: flex;
}
</style>
