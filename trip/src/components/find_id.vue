<template>
  <div>
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
          <th>
            <label for="" class="name_input_label" style="color: #007fff"
              >이름</label
            >
          </th>
          <td>
            <input
              type="text"
              v-model="name"
              placeholder="이름을 입력해주세요."
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
              v-model="telecom_option"
              name="telecom"
              id="find_telecom_select"
              style="width: 80px"
            >
              <option id="find_telecom_option" value="none">통신사</option>
              <option id="find_telecom_option" value="SKT" selected>SKT</option>
              <option id="find_telecom_option" value="KT">KT</option>
              <option id="find_telecom_option" value="LG">LG</option>
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
                class="find_phoneNumber2"
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
                class="find_phoneNumber3"
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
      </table>

      <a href="#">아이디 찾기</a>
    </article>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'app',
  data() {
    return {
      name: '',
      phoneNumber1: '',
      phoneNumber2: '',
      phoneNumber3: ''
    }
  },
  methods: {
    id_find: function () {
      axios
        .post('/find_id', {
          name: this.name,
          phoneNumber: this.phoneNumber1 + this.phoneNumber2 + this.phoneNumber3
        })
        .then((res) => {
          if (res.data == '2') {
            this.id_confirm_message = `Welcome, ${this.id} 님!`
          } else {
            this.id_confirm_message = ''
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
/*테이블 정렬*/
.find_id_table {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/*버튼 효과*/
.resquick_content {
  border: 2px solid #3165dd;
  letter-spacing: -1px;
  width: 500px;
  margin: 0 auto;
  /* background: #3165dd;s */
  text-align: center;
  color: #3165dd;
  padding: 90px 0;
  display: block;
}

.resquick_content > a {
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

.resquick_content > a:after {
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
.resquick_content > a:hover {
  color: #fff;
}
.resquick_content > a:hover:after {
  width: 100%;
  z-index: -1;
}

a,
a:hover,
a:focus,
a:active,
a:link {
  text-decoration: none;
  color: inherit;
}

#find_telecom_select {
  z-index: 0;
}
#find_telecom_option {
  color: black;
  background-color: transparent;
}
</style>
