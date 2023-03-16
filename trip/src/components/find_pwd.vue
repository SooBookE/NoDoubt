<template>
  <div class="find_id_container">
    <article class="resquick_content resquick_service">
      <table class="find_id_table">
        <tr
          style="
            display: flex;
            width: 400px;
            justify-content: space-evenly;
            margin-bottom: 10px;
          "
        >
          <th style="width: 120px">
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
        v-if="server_find_id.length"
        class="server_find_id"
        :v-bind="server_find_id"
      >
        여행가님의 아이디는, <br /><mark
          ><strong>'{{ server_find_id }}'</strong></mark
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
        .post('/find_id', {
          name: this.find_name,
          phoneNumber:
            this.find_telecom_option +
            this.phoneNumber1 +
            this.phoneNumber2 +
            this.phoneNumber3
        })
        .then((res) => {
          console.log(res.data)
          if (res.data !== 1) {
            const id = res.data[0].id
            const new_id = id.slice(0, -4) + '****'
            this.server_find_id = `${new_id}`
          } else {
            this.server_find_id = ''
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

.server_find_id {
  font-family: 'jua';
  margin-bottom: 15px;
  font-size: larger;
}
</style>
