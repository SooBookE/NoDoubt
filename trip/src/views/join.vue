<!-- eslint-disable -->
<template>
  <categorie></categorie>
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
            <label for="id_input_label" style="color: #d67940">이름</label>
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
              <option id="telecom_option" value="SKT" selected>SKT</option>
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
                @keyup.enter="nickname_made"
              />
            </div>
          </td>
        </tr>
        <tr style="justify-content: center">
          <td></td>
          <td>
            <button
              class="nickname_create_button"
              @click="nickname_made"
              required
            >
              닉네임 생성
            </button>
          </td>
          <td></td>
        </tr>

        <h5 v-if="Nickname">여행가님의 닉네임은</h5>
        <div v-if="Nickname" class="nickname">
          <h3 v-if="Nickname">{{ Nickname }}</h3>
          입니다.
        </div>
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
              required
            />남성
            <input
              id="gender_input_radio"
              type="radio"
              v-model="gender"
              value="female"
              required
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
              required
            />10대
            <input
              id="gender_input_radio"
              type="radio"
              v-model="age"
              value="20대"
              required
            />20대
            <input
              id="gender_input_radio"
              type="radio"
              v-model="age"
              value="30대"
              required
            />30대
            <input
              id="gender_input_radio"
              type="radio"
              v-model="age"
              value="40대"
              required
            />40대
            <input
              id="gender_input_radio"
              type="radio"
              v-model="age"
              value="50대"
              required
            />50대
            <input
              id="gender_input_radio"
              type="radio"
              v-model="age"
              value="60대"
              required
            />60대
          </div>
          <hr />
          <div class="hobby_input">
            <div class="hobby_message">여행가님은 어떤 성향이신가요?</div>
            <label class="input_label" for="">
              <input
                id="hobby_input_radio"
                type="radio"
                v-model="hobby"
                value="cafe"
                required
              />조용히 여유를 즐겨요.
            </label>
            <label class="input_label" for="">
              <input
                id="hobby_input_radio"
                type="radio"
                v-model="hobby"
                value="running"
                required
              />주체할 수 없는 흥을 뽐내야 해요.
            </label>
            <label class="input_label" for="">
              <input
                id="hobby_input_radio"
                type="radio"
                v-model="hobby"
                value="small_talk"
                required
              />흥도 많지만, 여유도 즐겨요.
            </label>
            <!-- <input
      id="hobby_input_radio"
      type="radio"
      v-model="hobby"
      value="reading"
      @click="join_confirm"
    />책 읽기
    <input
      id="hobby_input_radio"
      type="radio"
      v-model="hobby"
      value="exercising"
      @click="join_confirm"
    />운동 -->
          </div>
          <hr />
          <div class="hob_input">
            <div class="hob_message">여행가님의 취미는 무엇인가요?</div>
            <label class="input_label" for="">
              <input
                id="hob_input_radio"
                type="radio"
                v-model="hob"
                value="cafe"
                @click="join_confirm"
              />문화 예술 감상
            </label>
            <label class="input_label" for="">
              <input
                id="hob_input_radio"
                type="radio"
                v-model="hob"
                value="running"
                @click="join_confirm"
              />관광지 관람
            </label>
            <label class="input_label" for="">
              <input
                id="hob_input_radio"
                type="radio"
                v-model="hob"
                value="small_talk"
                @click="join_confirm"
              />액티비티 활동
            </label>
            <label class="input_label" for="">
              <input
                id="hob_input_radio"
                type="radio"
                v-model="hob"
                value="reading"
                @click="join_confirm"
              />카페에서 수다
            </label>
            <label class="input_label" for="">
              <input
                id="hob_input_radio"
                type="radio"
                v-model="hob"
                value="exercising"
                @click="join_confirm"
              />모임 참석
            </label>
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
import categorie from '../components/categories.vue'

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
      hob: '',
      identification: '',
      message: '',
      password_length_confirm_message: '',
      password_string_confirm_message: '',
      id_check_message: '',
      telecom_option: '',
      phoneNumber1: '',
      phoneNumber2: '',
      phoneNumber3: '',
      Nickname: ''
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
            Nickname: this.Nickname,
            gender: this.gender,
            age: this.age,
            hobby: this.hobby,
            hob: this.hob,
            phoneNumber:
              this.telecom_option +
              this.phoneNumber1 +
              this.phoneNumber2 +
              this.phoneNumber3,
            identification: this.identification
          })
          .then((res) => (this.data = res.data))
        alert('회원가입이 완료되었습니다.')
        this.$router.push('/')
      } else {
        alert('아이디 중복 확인을 먼저 해주세요!')
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
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\~\!\@\#\$\%\^\&\*\?\<\>\{\}\[\]])[A-Za-z0-9\~\!\@\#\$\%\^\&\*\?\<\>\{\}\[\]]{8,}$/
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
    },
    nickname_made: function () {
      axios.get('/nick').then((res) => {
        console.log(res)
        this.Nickname = res.data[0]
      })
    },
    tooltip: function () {
      // Create a new attribute called "defaultValue" which the input returns to if left blank on blur
      // Do it this way to keep HTML valid
      $('input[type=text], textarea').each(function () {
        $(this).attr('defaultValue', $(this).val())
      })

      // Add arrow to tooltips
      $('span.tooltip').each(function () {
        $(this).append("<span class='tooltipArrow'></span>")
      })

      // Remove default value on focus and show tooltip
      $('input[type=text], textarea').focus(function () {
        if ($(this).val() == $(this).attr('defaultValue')) {
          $(this).val('').css({
            'font-weight': 'bold',
            color: '#000',
            'font-style': 'normal'
          })
        }
        $(this).next('span.tooltip').fadeIn(100)
      })

      // If value blank reinsert default value and hide tooltip)
      $('input[type=text], textarea').blur(function () {
        if ($(this).val() == '') {
          $(this).val($(this).attr('defaultValue')).css({
            'font-weight': 'normal',
            color: '#999',
            'font-style': 'italic'
          })
        }
        $(this).next('span.tooltip').fadeOut(100)
      })
    }
  },
  components: {
    categorie
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

.cont {
  margin-top: 20rem;
  margin-bottom: 8rem;
  width: 100%;
  height: auto;
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

.id_check_button,
.nickname_create_button {
  display: inline;
  padding: 0.3rem;
  border: 2px solid #d67940;
  color: #d67940;
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;
}

.id_check_button:hover,
.nickname_create_button:hover {
  color: white;
  background-color: #d67940;
  transform: scale(1.1);
  transition: 0.1s linear;
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

.join_submit_button::after {
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

.join_submit_button,
.join_submit_button:hover,
.join_submit_button:focus,
.join_submit_button:active,
.join_submit_button:link {
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
}

.join_submit_button:hover {
  color: #fff;
  z-index: 999;
}
.join_submit_button:hover:after {
  width: 100%;
  z-index: -999;
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
.hobby_message,
.hob_message {
  margin: 10px 0px 10px 0px;
  font-weight: 400;
  font-family: 'jua';
  font-size: large;
}

#gender_input_radio.text,
#age_input_radio.text,
#hobby_input_radio.text,
.hobby_input_radio.text {
  font-family: 'jua';
  font-weight: 100;
  font-size: small;
}

.input_label {
  display: block;
}

#telecom_select {
  font-family: 'dohyeon';
  font-size: small;
  font-weight: 200;
}

/*툴팁*/
.tooltip {
  position: relative;
  display: block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 100%;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

/* 툴팁 화살표 기본 스타일 설정 시작 */

.tooltip .tooltiptext::after {
  content: ' ';
  position: absolute;
  border-style: solid;
  border-width: 5px;
}

/* 아래쪽 툴팁 시작 */

.tooltip .tooltip-bottom {
  width: 100%;
  top: 150%;
  left: 50%;
  margin-left: -60px;
}

.tooltip .tooltip-bottom::after {
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-color: transparent transparent black transparent;
}

/*툴팁*/
password1 {
  float: left;
  width: 250px;

  padding: 3px 5px;
  font-size: 16px;
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  font-style: italic;
  line-height: 18px;
  color: #999;
  border: 1px solid #09c;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #eee;
  -moz-box-shadow: inset 0 12px 12px rgba(255, 255, 255, 0.1),
    inset 0 -12px 12px rgba(0, 0, 0, 0.1), inset 0px 0px 4px #999;
  -webkit-box-shadow: inset 0 12px 12px rgba(255, 255, 255, 0.1),
    inset 0 -12px 12px rgba(0, 0, 0, 0.1), inset 0px 0px 4px #999;
  box-shadow: inset 0 12px 12px rgba(255, 255, 255, 0.1),
    inset 0 -12px 12px rgba(0, 0, 0, 0.1), inset 0px 0px 4px #999;
}
span.tooltip {
  display: none;
  float: left;
  background-color: #ccc;
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  color: #000;
  padding: 3px 10px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  width: 150px;
  font-size: 12px;
  font-style: italic;
  position: absolute;
  margin: 0 0 0 10px;
}

span.tooltipArrow {
  content: ' ';
  height: 0;
  position: absolute;
  width: 0;
  border: 6px solid transparent;
  border-right-color: #ccc;
  top: 5px;
  left: -12px;
}
</style>
