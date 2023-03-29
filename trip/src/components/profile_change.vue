<template>
  <categoires></categoires>
  <div class="notice_write_container" style="width: 100%">
    <article class="resquick_content resquick_service">
      <div class="profile_title">프로필 수정</div>
      <div
        class="profile_title"
        style="color: black; font-family: 'dohyeon'; font-size: medium"
      >
        {{ customer_nickname }}님, 예쁘게 꾸며주세요!
      </div>
      <table>
        <tr class="title_tr">
          <th class="title_th">아이디</th>
          <td class="title_td" style="color: black">
            {{ id }}
          </td>
        </tr>
        <tr class="writer_tr">
          <th class="writer_th">닉네임</th>
          <td class="writer_td" style="color: black">
            {{ customer_nickname }}
          </td>
        </tr>
        <tr class="writer_tr">
          <th class="writer_th">비밀번호 변경</th>
          <td class="pwd_input_box">
            <input
              type="password"
              class="password1"
              v-model="pwd"
              placeholder="비밀번호 8자 이상 입력해주세요."
              required
              @keyup="password_length_confirm"
              @keypress="password_string_confirm"
              @blur="password_string_confirm_message = ''"
            />
          </td>
        </tr>
        <tr class="writer_tr">
          <th class="writer_th" style="width: 204px">비밀번호 확인</th>
          <td class="pwd_confirm_input_box">
            <input
              type="password"
              class="password2"
              v-model="pwd2"
              placeholder="비밀번호를 다시 입력해주세요."
              required
              @keyup="password_confirm()"
              @blur="password_length_confirm_message = ''"
            />
          </td>
          <td style="width: 100%">
            <div class="pwd_button" @click="pwd_change()">변경</div>
          </td>
        </tr>
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
        <tr class="img_tr">
          <th class="img_th">프로필 사진</th>
          <td class="img_td">
            <div class="container">
              <div class="main">
                <div
                  class="dropzone-container"
                  @dragover="dragover"
                  @dragleave="dragleave"
                  @drop="drop"
                >
                  <input
                    type="file"
                    name="file"
                    id="fileInput"
                    class="hidden-input"
                    @change="onChange"
                    ref="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />

                  <label for="fileInput" class="file-label">
                    <div v-if="isDragging">사진 파일을 이곳에 놓아주세요.</div>
                    <div v-else>
                      Drop files here or <u>click here</u> to upload.
                    </div>
                  </label>

                  <div class="preview-container mt-4" v-if="files.length">
                    <div
                      v-for="file in files"
                      :key="file.name"
                      class="preview-card"
                    >
                      <div class="img_c">
                        <img
                          id="preview-img"
                          :src="generateURL(file)"
                          style="width: 200px"
                        />
                        <p>
                          {{ file.name }}
                        </p>
                        <button
                          class="w-btn-red w-btn"
                          type="button"
                          @click="remove(files.indexOf(file))"
                          title="Remove file"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr class="content_tr">
          <th class="content_th" style="position: relative; top: -5rem">
            자기소개
          </th>
          <td class="content_td">
            <textarea
              v-model="introduce"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </td>
        </tr>
      </table>
      <!-- <div class="a"> -->
      <div class="a" @click="write()">작성완료</div>
      <!-- </div> -->
    </article>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import categoires from '../components/categories.vue'

export default {
  name: 'app',
  data() {
    return {
      customer_nickname: '',
      Nickname: '',
      id: '',
      profile_img: '',
      pwd: '',
      pwd2: '',
      password_length_confirm_message: '',
      password_string_confirm_message: '',
      introduce: '',

      isDragging: false,
      files: [],
      filesPreview: [],
      uploadImageIndex: 0,
      analysis: '',
      url: '',
      url_data: '',
      language: '',
      B: ''
    }
  },

  created() {
    this.nickname()
  },

  mounted() {
    // this.customer_info()
    this.login_cookie()
  },

  methods: {
    nickname: function () {
      axios.get('/login_confirm_cookie').then((res) => {
        this.customer_nickname = res.data
        axios
          .post('/customer', {
            nickname: res.data
          })
          .then((res) => {
            this.id = res.data[0].id
          })
      })
    },
    pwd_change: function () {
      if (this.pwd2.length > 0) {
        axios
          .post('/pwd_change', {
            id: this.id,
            pwd: this.pwd2
          })
          .then((res) => {
            if (res.data == '1') {
              alert('비밀번호 변경이 완료되었습니다.')
            }
          })
      }
    },
    write: function () {
      if (this.url_data.length > 0 || this.introduce.length > 0) {
        axios
          .post('/profile_change', {
            id: this.id,
            profile: this.url_data,
            introduce: this.introduce
          })
          .then((res) => {
            console.log(res.data)
            if (res.data == '1') {
              alert('프로필 수정이 완료되었습니다..')
              this.$router.push('/')
            }
          })
      }
    },

    onChange() {
      console.log(this.$refs.file.files[0].size)
      // console.log(event.target.value)
      if (this.$refs.file.files[0].size > 300 * 300) {
        // 용량 초과시 경고후 해당 파일의 용량도 보여줌

        alert(
          '1MB 이하 파일만 등록할 수 있습니다.\n\n' +
            '현재파일 용량 : ' +
            Math.round((this.$refs.file.files[0].size / 300 / 300) * 100) /
              100 +
            'MB'
        )
      }
      // 체크를 통과했다면 종료.
      else {
        this.files = [...this.$refs.file.files]
        alert('파일이 등록되었습니다.')
      }
    },
    dragover(e) {
      e.preventDefault()
      this.isDragging = true
    },
    dragleave() {
      this.isDragging = false
    },
    drop(e) {
      e.preventDefault()
      this.$refs.file.files = e.dataTransfer.files
      this.onChange()
      this.isDragging = false
    },

    generateURL(file) {
      const fileSrc = URL.createObjectURL(file)
      fetch(fileSrc)
        .then((res) => res.blob())
        .then((blob) => {
          const reader = new FileReader()
          reader.onload = () => {
            const base64data = reader.result
            this.url_data = base64data
            console.log(this.url_data)
          }
          reader.readAsDataURL(blob)
        })
      // setTimeout(() => {
      //   URL.revokeObjectURL(fileSrc);
      // }, 1000);
      return fileSrc
    },
    remove(i) {
      this.files.splice(i, 1)
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
    login_cookie: function () {
      axios.get('/login_confirm_cookie').then((res) => {
        this.nickname = res.data
        axios
          .post('/customer', {
            nickname: res.data
          })
          .then((res) => {
            this.files.push(res.data[0].profile)
            this.introduce = res.data[0].introduce
            // console.log(this.profile)
          })
      })
    }
  },

  components: {
    categoires
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

.profile_title {
  color: #f2ab39;
  font-family: 'dohyeon';
  font-size: xx-large;
  margin-bottom: 10px;
}

.notice_write_container {
  margin-top: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title_tr .title_th .title_td {
  margin: 10px 0px;
}

.title_tr,
.writer_tr,
.content_tr,
.img_tr {
  width: 100%;
  margin: 3rem 0rem;
}

.title_th,
.writer_th,
.content_th,
.img_th {
  font-family: 'dohyeon';
  width: 100px;
  text-align: right;
  margin-right: 10px;
}

/* .title_td,
.writer_td,
.content_td,
.img_td {
} */

.title_td > input,
.writer_td > input,
.content_td > textarea {
  width: 30rem;
  font-size: 20px;
  border: 2px solid black;
  border-radius: 5px;
}

.content_td > textarea {
  border-top: 2px solid black;
}

/*비밀번호 input*/
.password1,
.password2 {
  border: none;
  border-bottom: 1px solid black;
  width: 200px;
  padding-left: 5px;
  background-color: transparent;
  color: #777777;
}

/*비밀번호 변경 버튼*/
.pwd_button {
  width: 20%;
  margin-left: 10px;
  padding: 0.3rem;
  border: 2px solid #d67940;
  color: #d67940;
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;
}

.pwd_button:hover {
  color: white;
  background-color: #d67940;
  transform: scale(1.1);
  transition: 0.1s linear;
}

/*버튼 효과*/
.resquick_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #eeb04e;
  border-radius: 10px;
  box-shadow: 3px 3px 3px #f2ab39;
  width: 700px;
  color: #f2ab39;
  padding: 90px 0;
}

.a {
  width: 8%;
  border: 2px solid #f2ab39;
  border-radius: 10px;
  padding: 2% 7%;
  position: relative;
  color: #f2ab39;
  z-index: 1;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
}
.a,
.a:hover,
.a:focus,
.a:active,
.a:link {
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
}

.a:after {
  content: '';
  color: white;
  z-index: -999;
  border-radius: 8px;
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
  background-color: #f2ab39;
}
article.resquick_content > div.notice_write_container > div.a:hover {
  color: #fff;
  z-index: 999;
}
.a:hover:after {
  width: 100%;
  z-index: -999;
}

.a {
  font-family: 'jua';
  font-size: medium;
}

/*사진 파일 업로드*/
.main {
  display: flex;
  flex-grow: 1;
  align-items: center;
  /* height: 500px; */
  justify-content: center;
  text-align: center;
}

.dropzone-container {
  padding: 4rem;
  background: white;
  border: 2px solid #f2ab39;
  border-radius: 10px;
  box-shadow: 3px 3px 3px#f2ab39;
  width: 22rem;
}

.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

.file-label {
  font-size: 20px;
  display: block;
  cursor: pointer;
}

#preview-img {
  width: 150px;
  height: 150px;
  border-radius: 100px;
}
</style>
