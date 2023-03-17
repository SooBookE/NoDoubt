<template>
  <categories></categories>
  <div class="example-modal-window">
    <p>버튼을 누르면 모달 대화 상자가 열립니다.</p>
    <!-- <button @click="openModal">열기</button> -->
    <!-- 컴포넌트 MyModal -->
    <read_board @close="closeModal" v-if="modal">
      <div class="notice_write_container" style="width: 100%">
        <table style="width: 500px">
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
      </div>
    </read_board>
  </div>
  <div class="notice_container">
    <table class="notice_table">
      <thead>
        <tr class="notice_tr" style="border-bottom: 5px double black">
          <th class="notice_number">번호</th>
          <th class="notice_title" style="text-align: center">제목</th>
          <th class="notice_id">작성자</th>
          <th class="notice_date">작성일자</th>
        </tr>
      </thead>
      <tbody class="board_table_container">
        <tr
          v-for="i in paginatedData"
          :key="i"
          class="notice_tr"
          style="margin-left: 8px"
        >
          <th class="notice_number">{{ i.No }}</th>
          <th class="notice_title" @click="openModal">{{ i.title }}</th>
          <th class="notice_id">{{ i.writer }}</th>
          <th class="notice_date">{{ i.date }}</th>
        </tr>
      </tbody>
    </table>
    <div class="pagination d-flex justify-content-center align-items-center">
      <button :disabled="pageNum === 0" class="btn next" @click="prevPage()">
        <span class="material-icons-outlined"> 이전 </span>
      </button>
      <span>{{ pageNum + 1 }} / {{ pageCount === 0 ? 1 : pageCount }}</span>
      <button
        :disabled="pageNum >= pageCount - 1"
        class="btn next"
        @click="nextPage()"
      >
        <span class="material-icons-outlined"> 다음 </span>
      </button>
    </div>

    <div>
      <button @click="$router.push('/notice_write')">작성</button>
    </div>
  </div>
  <sidebar></sidebar>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import categories from '../components/categories.vue'
import read_board from '../components/read_board.vue'
import sidebar from '../components/sidebar.vue'

export default {
  name: 'app',
  data() {
    return {
      modal: false,
      board: [],
      No: '',
      title: '',
      writer: '',
      date: '',
      pageNum: 0,
      pageSize: 10
    }
  },
  props() {},

  created() {},

  mounted() {
    axios.get('/get_board').then((res) => {
      console.log(res.data)
      this.board.push(...res.data)
      console.log(this.board)
    })
  },

  computed: {
    pageCount() {
      const listLeng = this.board.length
      const listSize = this.pageSize
      let page = Math.floor(listLeng / listSize)
      if (listLeng % listSize > 0) page += 1

      return page
    },

    paginatedData() {
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
      console.log(start)
      console.log(end)
      console.log(this.board.slice(start, end))
      return this.board.slice(start, end)
    }
  },

  methods: {
    nextPage() {
      this.pageNum += 1
    },
    prevPage() {
      this.pageNum -= 1
    },
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },

    get_read: function () {
      axios.post('/read').then((res) => {
        console.log(res)
      })
    }
  },
  components: {
    categories,
    read_board,
    sidebar
  }
}
</script>

<style scoped>
.notice_container {
  margin-top: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.notice_table {
  height: 605px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.notice_title {
  width: 400px;
}

.notice_tr {
  width: 1000px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 15px 0px;
}

.notice_title {
  text-align: left;
}
</style>
