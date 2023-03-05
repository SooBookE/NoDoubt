<!-- eslint-disable -->
<template>
  <div class="cont">
    <div class="join_container">
      <div class="join_title">Join</div>
      <table class="login_form_table">
        <tr
          style="
            display: flex;
            width: 400px;
            justify-content: space-evenly;
            margin-bottom: 10px;
          "
        >
          <th style="width: 100px; text-align: right">
            <label for="id_input_label" style="color: #d67940">성함</label>
          </th>
          <td class="id_input_box">
            <input
              type="id"
              class="id_input"
              v-model="name"
              placeholder="성함을 입력해주세요."
              required
            />
          </td>
          <td style="width: 70px"></td>
        </tr>
        <tr
          style="
            display: flex;
            width: 400px;
            justify-content: space-evenly;
            margin-bottom: 10px;
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
            />
          </td>
          <td>
            <button class="id_check_button" @click="id_check" required>
              중복 확인
            </button>
          </td>
        </tr>
      </table>
      <div v-if="id_check_message" class="id_check_message">
        {{ id_check_message }}
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
              placeholder="비밀번호 8자 이상 입력해주세요."
              required
              @keyup="password_length_confirm"
              @keypress="password_string_confirm"
              @blur="password_length_confirm_message = ''"
            />
          </td>
          <td style="width: 70px"></td>
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
              @keyup="password_confirm()"
              @blur="message = ''"
            />
          </td>
          <td style="width: 70px"></td>
        </tr>
        <div v-if="message.length" class="message">{{ message }}</div>
        <div
          v-if="password_string_confirm_message.length"
          class="password_string_confirm_message"
        >
          {{ password_string_confirm_message }}
        </div>
        <div
          v-if="password_length_confirm_message.length"
          class="password_length_confirm_message"
        >
          {{ password_length_confirm_message }}
        </div>
        <tr>
          <th>
            <label for="" class="phoneNumber_input_label" style="color: #d67940"
              >연락처</label
            >
          </th>
          <td>
            <select
              v-model="telecom_option"
              name=""
              id="telecom_select"
              style="width: 80px"
            >
              <option id="telecom_option" value="">통신사</option>
              <option id="telecom_option" value="SKT">SKT</option>
              <option id="telecom_option" value="KT">KT</option>
              <option id="telecom_option" value="LG">LG</option>
            </select>
          </td>
          <td>
            <div
              class="call_number_input"
              style="
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                width: 120%;
              "
            >
              <input
                type="tel"
                v-model="phoneNumber1"
                maxlength="3"
                min="0"
                max="9"
                onlyNumber
                required
                style="width: 50px"
                @keyup="PhoneNumber_length()"
              />-
              <input
                type="tel"
                v-model="phoneNumber2"
                class="phoneNumber2"
                maxlength="4"
                minlength="3"
                min="0"
                max="9"
                onlyNumber
                required
                style="width: 80px"
                @keyup="PhoneNumber_length2()"
              />-
              <input
                type="tel"
                v-model="phoneNumber3"
                class="phoneNumber3"
                maxlength="4"
                min="0"
                max="9"
                onlyNumber
                required
                style="width: 80px"
              />
            </div>
          </td>
        </tr>

        <div class="select_container">
          <div class="travel_message">여행가님의 정보를 주세요!</div>
          <div class="travel_message_explain">
            여행가님께서 제공해주신 정보로 AI가 학습하여 여행지를
            추천해드립니다.
          </div>
          <div class="gender_input">
            <div class="gender_message">성별을 선택해주세요.</div>
            <input
              id="gender_input_radio"
              type="radio"
              v-model="gender"
              value="male"
            />남성
            <input
              id="gender_input_radio"
              type="radio"
              v-model="gender"
              value="female"
            />여성
          </div>
          <hr />
          <div class="age_input">
            <div class="age_message">연령을 선택해주세요.</div>
            <input
              id="age_input_radio"
              type="radio"
              v-model="age"
              value="10대"
            />10대
            <input
              id="gender_input_radio"
              type="radio"
              v-model="age"
              value="20대"
            />20대
            <input
              id="gender_input_radio"
              type="radio"
              v-model="age"
              value="30대"
            />30대
            <input
              id="gender_input_radio"
              type="radio"
              v-model="age"
              value="40대"
            />40대
            <input
              id="gender_input_radio"
              type="radio"
              v-model="age"
              value="50대"
            />50대
            <input
              id="gender_input_radio"
              type="radio"
              v-model="age"
              value="60대"
            />60대
          </div>
          <hr />
          <div class="hobby_input">
            <div class="hobby_message">취미를 선택해주세요.</div>
            <input
              id="hobby_input_radio"
              type="radio"
              v-model="hobby"
              value="cafe"
            />카페에서 놀기
            <input
              id="hobby_input_radio"
              type="radio"
              v-model="hobby"
              value="running"
            />산책, 조깅
            <input
              id="hobby_input_radio"
              type="radio"
              v-model="hobby"
              value="small_talk"
            />수다떨기
            <input
              id="hobby_input_radio"
              type="radio"
              v-model="hobby"
              value="reading"
            />책 읽기
            <input
              id="hobby_input_radio"
              type="radio"
              v-model="hobby"
              value="exercising"
            />운동
          </div>
        </div>
        <button class="join_submit_button" type="submit" @click="join_confirm">
          Join
        </button>
      </table>
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
      Array: [],
      data: '',
      name: '',
      id: '',
      pwd: '',
      pwd2: '',
      gender: '',
      age: '',
      hobby: '',
      identification: '',
      message: '',
      password_length_confirm_message: '',
      password_string_confirm_message: '',
      id_check_message: '',
      telecom_option: '',
      phoneNumber1: '',
      phoneNumber2: '',
      phoneNumber3: ''
    }
  },

  watch: {
    $route(to, from) {
      console.log(to)
    }
  },

  methods: {
    id_check: function () {
      axios
        .post('/id_check', {
          id: this.id
        })
        .then((res) => {
          console.log(res)
          if (res.data == '2') {
            this.id_check_message = '이미 존재하는 아이디입니다.'
            this.id = ''
            return false
          } else {
            this.id_check_message = '사용 가능한 아이디입니다.'
          }
        })
    },

    join_confirm: async function () {
      if (this.id_check_message == '사용 가능한 아이디입니다.') {
        console.log(this.gender, this.age, this.hobby)
        axios
          .post('/join', {
            name: this.name,
            id: this.id,
            pwd: this.pwd,
            gender: this.gender,
            age: this.age,
            hobby: this.hobby,
            phoneNumber:
              this.telecom_option +
              this.phoneNumber1 +
              this.phoneNumber2 +
              this.phoneNumber3,
            identification: this.identification
          })
          .then((res) => (this.data = res.data))
        this.$router.push('/')
      } else {
        alert('아이디 중복 확인을 먼저 해주세요!')
      }
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
      if (this.pwd.length < 8) {
        this.password_length_confirm_message = '8글자 이상 입력해주세요.'
        return false
      }
    },
    password_string_confirm: function () {
      const string_confirm =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      if (string_confirm.test(this.pwd) == false) {
        this.password_string_confirm_message =
          '대,소문자, 특수문자, 숫자를 하나 이상 포함시켜주세요.'
        return false
      }
      this.password_string_confirm_message = ''
    },

    PhoneNumber_length: function () {
      const phoneNumber2_input = document.querySelector('.phoneNumber2')
      if (this.phoneNumber1.length >= 3) {
        phoneNumber2_input.focus()
      }
    },
    PhoneNumber_length2: function () {
      const phoneNumber3_input = document.querySelector('.phoneNumber3')
      if (this.phoneNumber2.length >= 4) {
        phoneNumber3_input.focus()
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

.cont {
  width: 100%;
  height: auto;
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
  margin: 50px 0px;
}

.join_title {
  font-family: 'dohyeon';
  font-size: x-large;
  margin: 10px 0px 30px 0px;
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

/* .id_input_box,
.pwd_input_box,
.pwd_confirm_input_box {
} */

.id_input,
.password1,
.password2 {
  border: none;
  border-bottom: 1px solid black;
  width: 200px;
  padding-left: 5px;
  background-color: transparent;
  color: #777777;
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

.id_check_message,
.message,
.password_length_confirm_message,
.password_string_confirm_message {
  margin-bottom: 30px;
  font-family: 'dohyeon';
  font-size: small;
}

.select_container {
  border: 2px solid #072a40;
  padding: 10px;
  border-radius: 5px;
  margin: 30px 0px;
}

.travel_message {
  font-family: 'jua';
  font-size: larger;
  font-weight: 400;
  margin-bottom: 5px;
}

.travel_message_explain {
  font-family: 'jua';
  font-size: small;
  font-weight: 200;
  margin-bottom: 20px;
}

.gender_input,
.age_input,
.hobby_input {
  margin-bottom: 20px;
}

.gender_message,
.age_message,
.hobby_message {
  margin: 10px 0px 10px 0px;
  font-weight: 400;
  font-family: 'jua';
  font-size: large;
}

#gender_input_radio.text,
#age_input_radio.text,
#hobby_input_radio.text {
  font-family: 'jua';
  font-weight: 100;
  font-size: small;
}

#telecom_select {
  font-family: 'dohyeon';
  font-size: small;
  font-weight: 200;
}
</style>
