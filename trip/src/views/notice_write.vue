<template>
  <categoires></categoires>
  <div class="notice_write_container" style="width: 100%">
    <table style="width: 500px">
      <tr>
        <th>글번호</th>
        <td>{{ num }}</td>
      </tr>
      <tr style="width: 500px">
        <th style="width: 100px; text-align: right; margin-right: 10px">
          제목
        </th>
        <td><input v-model="title" type="text" /></td>
      </tr>
      <tr style="width: 500px">
        <th style="width: 100px; text-align: right; margin-right: 10px">
          작성자
        </th>
        <td><input v-model="writer" type="text" /></td>
      </tr>
      <tr style="width: 500px">
        <th style="width: 100px; text-align: right; margin-right: 10px">
          내용
        </th>
        <td>
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
    <div>
      <button @click="write()">작성</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import { toDisplayString } from 'vue'
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
      content: ''
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

      axios
        .post('/write', {
          No: 1,
          title: this.title,
          writer: this.writer,
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
  components: {
    categoires
  }
}
</script>

<style>
.notice_write_container {
  margin-top: 200px;
}
</style>
