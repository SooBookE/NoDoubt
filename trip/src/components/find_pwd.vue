<template>
  <div class="find_id_container">
    <article class="resquick_content resquick_service">
      <div class="find_pwd_notice">여행가님, 정보를 잊으셨나요?</div>
      <div class="find_pwd_notice_information">
        임시 비밀번호가 발급되니, 로그인 이후 비밀번호 변경부탁드립니다.
      </div>
      <table class="find_id_table">
        <tr
          style="
            display: flex;
            width: 400px;
            justify-content: space-evenly;
            margin-bottom: 10px;
          "
        >
          <th style="width: 140px; text-align: right; padding-right: 20px">
            <label for="" class="name_input_label" style="color: #007fff"
              >아이디</label
            >
          </th>
          <td>
            <input
              type="text"
              v-model="find_id"
              placeholder="아이디를 입력해주세요."
              class="find_id_name_input"
            />
          </td>
          <td style="width: 50px"></td>
        </tr>
        <tr
          style="
            display: flex;
            width: 400px;
            justify-content: space-evenly;
            margin-bottom: 10px;
          "
        >
          <th>
            <label for="" class="phoneNumber_input_label" style="color: #007fff"
              >연락처</label
            >
          </th>
          <td>
            <select
              v-model="find_telecom_option"
              name="telecom"
              id="find_telecom_select"
              style="width: 80px"
            >
              <option class="find_telecom_option" value="none">통신사</option>
              <option class="find_telecom_option" value="SKT" selected>
                SKT
              </option>
              <option class="find_telecom_option" value="KT">KT</option>
              <option class="find_telecom_option" value="LG">LG</option>
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
                style="
                  width: 50px;
                  background-color: transparent;
                  border: none;
                  border-bottom: 2px solid #002376;
                "
                @keyup="PhoneNumber_length()"
              />-
              <input
                type="tel"
                v-model="phoneNumber2"
                class="find_phoneNumber2"
                maxlength="4"
                minlength="3"
                min="0"
                max="9"
                onlyNumber
                required
                style="
                  width: 80px;
                  background-color: transparent;
                  border: none;
                  border-bottom: 2px solid #002376;
                "
                @keyup="PhoneNumber_length2()"
              />-
              <input
                type="tel"
                v-model="phoneNumber3"
                class="find_phoneNumber3"
                maxlength="4"
                min="0"
                max="9"
                onlyNumber
                required
                style="
                  width: 80px;
                  background-color: transparent;
                  border: none;
                  border-bottom: 2px solid #002376;
                "
              />
            </div>
          </td>
        </tr>
      </table>
      <div
        v-if="randomly_pwd.length"
        class="randomly_pwd"
        :v-bind="randomly_pwd"
      >
        여행가님의 임시 비밀번호는, <br /><mark
          ><strong>'{{ randomly_pwd }}'</strong></mark
        >입니다.
      </div>
      <button class="a" @click="pwd_find()">비밀번호 찾기</button>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  /* eslint-disable */
  name: 'app',
  data() {
    return {
      find_id: '',
      find_telecom_option: 'none',
      phoneNumber1: '',
      phoneNumber2: '',
      phoneNumber3: '',
      randomly_pwd: ''
    }
  },
  methods: {
    pwd_find: function () {
      axios
        .post('/find_pwd', {
          id: this.find_id,
          phoneNumber:
            this.find_telecom_option +
            this.phoneNumber1 +
            this.phoneNumber2 +
            this.phoneNumber3
        })
        .then((res) => {
          console.log(res.data)
          if (res.data !== '1') {
            this.randomly_pwd = res.data
            // let temp_pw = ''

            // let ranValue1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
            // let ranValue2 = [
            //   'A',
            //   'B',
            //   'C',
            //   'D',
            //   'E',
            //   'F',
            //   'G',
            //   'H',
            //   'I',
            //   'J',
            //   'K',
            //   'L',
            //   'M',
            //   'N',
            //   'S',
            //   'T',
            //   'U',
            //   'V'
            // ]
            // let ranValue3 = [
            //   'a',
            //   'b',
            //   'c',
            //   'd',
            //   'e',
            //   'j',
            //   'k',
            //   'l',
            //   'm',
            //   'n',
            //   'o',
            //   'p',
            //   'v',
            //   'w',
            //   'x',
            //   'y',
            //   'z'
            // ]
            // let ranValue4 = ['!', '@', '#', '$', '%', '^', '&', '*']

            // for (let i = 0; i < 2; i++) {
            //   temp_pw += ranValue1[Math.floor(Math.random() * ranValue1.length)]
            //   temp_pw += ranValue2[Math.floor(Math.random() * ranValue2.length)]
            //   temp_pw += ranValue3[Math.floor(Math.random() * ranValue3.length)]
            //   temp_pw += ranValue4[Math.floor(Math.random() * ranValue4.length)]
            // }
            // const new_password = temp_pw
            // console.log(new_password)
            // this.randomly_pwd = `${new_password}`
          } else {
            this.randomly_pwd = ''
          }
        })
    },
    PhoneNumber_length: function () {
      const phoneNumber2_input = document.querySelector('.find_phoneNumber2')
      if (this.phoneNumber1.length >= 3) {
        phoneNumber2_input.focus()
      }
    },
    PhoneNumber_length2: function () {
      const phoneNumber3_input = document.querySelector('.find_phoneNumber3')
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

/*가장 바깥 container*/
.find_id_container {
  margin: 100px 0px;
}

.find_pwd_notice {
  font-family: 'dohyeon';
  font-size: large;
  font-weight: 400;
  color: #3165dd;
}

.find_pwd_notice_information {
  font-family: 'dohyeon';
  font-size: small;
  font-weight: 100;
  color: black;
  margin-top: 5px;
  margin-bottom: 50px;
  border-bottom: 2px solid rgb(255, 61, 61);
  display: inline-block;
}
/*테이블 정렬*/
.find_id_table {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 30px;
  margin-bottom: 10px;
}

/*input박스 디자인*/
.find_id_name_input {
  border: none;
  border-bottom: 2px solid #002376;
  background-color: transparent;
}

/*버튼 효과*/
.resquick_content {
  border: 2px solid #3165dd;
  border-top: none;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 3px 3px 3px #002376;
  letter-spacing: -1px;
  width: 500px;
  margin: 0 auto;
  text-align: center;
  color: #3165dd;
  padding: 90px 0;
  display: block;
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
}

#find_telecom_select {
  z-index: 0;
}
.find_telecom_option {
  color: black;
  background-color: transparent;
}

.randomly_pwd {
  font-family: 'jua';
  margin-bottom: 15px;
  font-size: larger;
}
</style>
