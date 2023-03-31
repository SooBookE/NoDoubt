<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="frame" style="display: flex; justify-content: right">
          <button @click="$emit('close')" class="custom-btn btn-12">
            <span style="width: 40px; right: 0px">닫기</span
            ><span style="width: 40px; right: 0px">X</span>
          </button>
        </div>
        <div class="modal-content">
          <div class="chating_screen">
            <div class="chatbot_button" style="display: flex">
              <div class="frame">
                <button class="custom-btn btn-12" @click="q1()">
                  <span>어떤 곳인가요?</span><span>서울</span>
                </button>
              </div>
              <div
                class="frame"
                style="
                  display: flex;
                  position: relative;

                  right: -30px;
                "
              >
                <button class="custom-btn btn-12" @click="q2()">
                  <span>무엇인가요?</span><span>여행</span>
                </button>
              </div>
            </div>
            <ul class="chating_ul">
              <div>
                <li class="chating_li" v-for="i in messagearr" :key="i">
                  {{ i }}
                </li>
              </div>
            </ul>
          </div>
          <div class="input_button_box" style="display: flex">
            <input
              v-model="chat_send"
              class="chating_input"
              type="text"
              @keyup.enter="q3()"
            />
            <div
              class="frame"
              style="display: flex; position: relative; bottom: 17px"
            >
              <button class="custom-btn btn-12" @click="q3()">
                <span>보내기</span><span>채팅</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

document.querySelector('body').addEventListener('click', () => {
  const modal = document.querySelector('.modal')
  modal.classList.remove('show')
})

export default {
  name: 'app',
  data() {
    return {
      modal: false,
      message: '',
      messagearr: [],
      chat_send: ''
    }
  },
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('메시지를 입력해주세요.')
      }
    },
    q1: function () {
      this.messagearr.push('서울이 뭔가요?')
      axios.post('/gpt', { q: '서울이 뭔가요?' }).then((res) => {
        this.messagearr.push(res.data)
      })
    },
    q2: function () {
      this.messagearr.push('여행이 뭔가요?')
      axios.post('/gpt', { q: '여행이 뭔가요?' }).then((res) => {
        this.messagearr.push(res.data)
      })
    },
    q3: function () {
      const kwChk = /^.*(여행).*/
      if(kwChk.test(this.chat_send)){
        this.messagearr.push(this.chat_send)
        axios.post('/gpt', { q: this.chat_send }).then((res) => {
          this.messagearr.push(res.data)
        })
      }else{
        alert('키워드를 포함해 작성해주세요.')
        this.messagearr.push('키워드를 포함해 다시 입력 해주세요!')
      }
      this.chat_send = ''
    }
  }
}
</script>

<style scoped>
.modal.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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

.close_button {
  background-color: transparent;
  border: none;
}

/*채팅창*/
.chating_screen {
  width: 600px;
  height: 600px;
  overflow-y: auto;
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 3px 3px 3px black;
}

.chating_ul {
  list-style: none;
  padding: 20px;
}

.chating_li {
  display: inline-block;
  width: 100%;
  border: 2px solid black;
  margin-bottom: 10px;
  padding: 1%;
}

/*버튼 기본 효과*/
.frame {
  width: 100%;
  text-align: center;
  margin-right: 0.5rem;
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'dohyeon';
  font-size: 1rem;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

.btn-12 {
  position: relative;
  margin: 5px;

  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}
.btn-12 span {
  background: rgb(0, 172, 238);
  background: linear-gradient(
    0deg,
    rgba(0, 172, 238, 1) 0%,
    rgba(2, 126, 251, 1) 100%
  );
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.btn-12 span:nth-child(1) {
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}

.chatbot_button {
  margin: 10px;
}

/*input*/
.chating_input {
  width: 250%;
  margin: 5px 0px 0px 15px;
}
</style>
