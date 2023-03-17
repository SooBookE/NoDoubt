<template>
  <categoires></categoires>
  <div class="notice_write_container" style="width: 100%">
    <article class="resquick_content resquick_service">
      <div style="color: black; font-family: 'dohyeon'; font-size: medium">
        공지사항 업로드
      </div>
      <div style="color: black; font-family: 'dohyeon'; font-size: medium">
        관리자만 접근 가능한 곳입니다.
      </div>
      <table>
        <tr class="title_tr">
          <th class="title_th">제목</th>
          <td class="title_td"><input v-model="title" type="text" /></td>
        </tr>
        <tr class="writer_tr">
          <th class="writer_th">작성자</th>
          <td class="writer_td"><input v-model="writer" type="text" /></td>
        </tr>
        <tr class="img_tr">
          <th class="img_th">사진 파일</th>
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
                    multiple
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
            내용
          </th>
          <td class="content_td">
            <textarea
              v-model="content"
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
      num: '',
      number: '',
      title: '',
      writer: '',
      date: '',
      content: '',

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

  mounted() {
    axios.get('/numbering').then((res) => {
      this.num = res.data[0].totalPosts + 1
    })
  },

  methods: {
    write: function () {
      let today = new Date()
      let year = today.getFullYear() // 년도
      let month = today.getMonth() + 1 // 월
      let day = today.getDate() // 날짜
      this.date = `${year}.${month}.${day}`

      if (this.content.length > 0) {
        axios
          .post('/write', {
            No: this.num,
            title: this.title,
            writer: this.writer,
            img: this.url_data,
            date: this.date,
            content: this.content
          })
          .then((res) => {
            console.log(res.data)
            if (res.data == '1') {
              alert('글작성이 완료되었습니다.')
              this.$router.push('/notice')
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

.title_td,
.writer_td,
.content_td,
.img_td {
}

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
</style>
