<!-- /* eslint-disable */  -->
<template>
  <categories></categories>
  <div class="example-modal-window" @close="closeModal()">
    <p>버튼을 누르면 모달 대화 상자가 열립니다.</p>
    <!-- <button @click="openModal">열기</button> -->
    <!-- 컴포넌트 MyModal -->
    <transition name="modal" appear @close="closeModal()" v-if="modal">
      <div class="modal modal-overlay">
        <button class="modal_button" @click="closeModal()">
          <div class="modal-window">
            <div class="modal-content">
              <div class="table_diplay">
                <table class="modal_table">
                  <tr class="title_tr">
                    <th class="title_th">제목</th>
                    <td class="title_td">{{ db_title }}</td>
                  </tr>
                  <tr class="writer_tr">
                    <th class="writer_th">작성자</th>
                    <td class="writer_td">{{ db_writer }}</td>
                  </tr>
                  <tr class="img_tr">
                    <th class="img_th"></th>
                    <td class="img_td">
                      <img
                        :src="db_img"
                        alt=""
                        style="width: 300px; margin-right: 5rem"
                      />
                    </td>
                  </tr>
                  <tr class="content_tr">
                    <th
                      class="content_th"
                      style="position: relative; top: -5rem"
                    ></th>
                    <td class="content_td">
                      <div>{{ db_content }}</div>
                      >
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </button>
      </div>
    </transition>
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
          @click="DB_read()"
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
      <button v-if="admin" @click="$router.push('/notice_write')">작성</button>
    </div>
  </div>
  <sidebar></sidebar>
</template>

<script>
/* eslint-disable */
document.querySelector('body').addEventListener('click', () => {
  const modal = document.querySelector('.modal')
  modal.classList.remove('show')
})

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
      pageSize: 10,
      admin: false,
      db_title: '',
      db_writer: '',
      db_date: '',
      db_img: '',
      db_content: ''
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
    this.notice_nickname()
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
    DB_read: function () {
      const targetId = event.target.textContent
      console.log(targetId)
      axios.post('/board_modal', { title: targetId }).then((res) => {
        this.db_title = res.data[0].title
        this.db_writer = res.data[0].writer
        this.db_img = res.data[0].img
        this.db_content = res.data[0].content
        this.db_date = res.data[0].date
      })
    },
    notice_nickname: function () {
      axios.get('/login_confirm_cookie').then((res) => {
        // console.log(res.data)
        this.customer_nickname = res.data
        if (res.data === '관리자') {
          console.log(res.data)
          this.admin = true
        }
      })
    },
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
@font-face {
  font-family: 'jua';
  src: url('../../public/font/BMJUA_ttf.ttf');
}

@font-face {
  font-family: 'dohyeon';
  src: url('../../public/font/BMDOHYEON_ttf.ttf');
}
/*모달창 css*/
.table_diplay {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title_tr .title_th .title_td {
  margin: 10px 0px;
  font-family: 'dohyeon';
}

.title_tr,
.writer_tr,
.content_tr,
.img_tr {
  width: 100%;
  margin: 3rem 0rem;
  font-family: 'dohyeon';
}

.title_th,
.writer_th,
.content_th,
.img_th {
  font-family: 'dohyeon';
  font-size: 1rem;
  width: 100px;
  text-align: right;
  margin-right: 10px;
  font-family: 'dohyeon';
}

.title_td,
.writer_td,
.content_td {
  font-family: 'dohyeon';
  font-size: 1rem;
}

/* 게시판 css */
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
  cursor: pointer;
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

/*모달창*/
.modal.modal-overlay {
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(255 255 255 / 78%);
}

.modal.window {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}

content.modal {
  padding: 10px 20px;
}

footer.modal {
  background: #ccc;
  padding: 10px;
  text-align: right;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}

.modal-enter-active,
.modal-leave-active.modal-window {
  transition: opacity 0.4s, transform 0.4s;
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter,
.modal-leave-to.modal-window {
  opacity: 0;
  transform: translateY(-20px);
}

.modal_button {
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
}

.modal_table {
  width: 70%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 3px 3px 3px 5px #686868;
}
</style>
