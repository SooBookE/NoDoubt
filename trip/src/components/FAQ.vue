<template>
  <div class="FAQ_text">자주 묻는 질문</div>
  <div id="staggered-list-demo">
    <div class="query_box">
      <input
        v-model="query"
        class="FAQ_input"
        placeholder="궁금하신 것을 입력해주세요."
      />
    </div>

    <transition-group
      name="staggered-fade"
      tag="ul"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <div class="helpdesk_container">
        <ul class="helpdesk_ul" style="list-style: none">
          <li
            class="helpdesk_li"
            v-for="(item, index) in computedList"
            v-bind:key="item.msg"
            v-bind:data-index="index"
          >
            <div class="helpdesk_li_div">
              <button
                @click="item[`show${index}`] = !item[`show${index}`]"
                class="helpdesk_button"
              >
                <div class="helpdesk_li_div_button_div">
                  <span> </span>
                  <strong>{{ item.Q }}</strong>
                </div>
                <div class="hashtag">#{{ item.msg }}</div>
              </button>
            </div>
            <div id="demo">
              <transition name="fade">
                <div v-if="item[`show${index}`]" class="answer_box">
                  <p>{{ item.answer }}</p>
                </div>
              </transition>
            </div>
          </li>
        </ul>
      </div>
    </transition-group>
  </div>

  <!-- <div class="helpdesk_container">
    <ul class="helpdesk_ul" style="list-style: none">
      <li class="helpdesk_li">
        <div class="helpdesk_li_div">
          <button @click="show1" class="helpdesk_button1">
            <div class="helpdesk_li_div_button_div">
              <span> </span>
              <strong>AI 여행 추천 프로그램이 뭔가요?</strong>
            </div>
            <div class="hashtag">#여행추천</div>
          </button>
        </div>
      </li>
      <li class="helpdesk_li">
        <div class="helpdesk_li_div">
          <button @click="show2 = !show2" class="helpdesk_button">
            <div class="helpdesk_li_div_button_div">
              <span> </span>
              <strong>어떻게 사용하면 되나요?</strong>
            </div>
            <div class="hashtag">#여행추천</div>
          </button>
        </div>
      </li>
      <li class="helpdesk_li">
        <div class="helpdesk_li_div">
          <button @click="show3 = !show3" class="helpdesk_button">
            <div class="helpdesk_li_div_button_div">
              <span> </span>
              <strong>개인정보가 유출되지는 않나요?</strong>
            </div>
            <div class="hashtag">#여행추천</div>
          </button>
        </div>
      </li>
      <li class="helpdesk_li">
        <div class="helpdesk_li_div">
          <button @click="show4 = !show4" class="helpdesk_button">
            <div class="helpdesk_li_div_button_div">
              <span> </span>
              <strong>어떤 것을 입력해야 하나요?</strong>
            </div>
            <div class="hashtag">#여행추천</div>
          </button>
        </div>
      </li> -->

  <!-- <div id="demo">
    <transition name="fade">
      <div v-if="show" class="answer_box">
        <p>답변1</p>
      </div>
    </transition>
  </div>
  <div id="demo">
    <transition name="fade">
      <div v-if="show2" class="answer_box">
        <p>답변2</p>
      </div>
    </transition>
  </div>
  <div id="demo">
    <transition name="fade">
      <div v-if="show3" class="answer_box">
        <p>답변3</p>
      </div>
    </transition>
  </div>
  <div id="demo">
    <transition name="fade">
      <div v-if="show4" class="answer_box">
        <p>답변4</p>
      </div>
    </transition>
  </div> -->

  <!-- <li class="helpdesk_li">
        <div class="helpdesk_li_div">
          <button class="helpdesk_button">
            <div class="helpdesk_li_div_button_div">
              <span> </span>
              <strong>하기 싫어요.</strong>
            </div>
            <div class="hashtag">#여행추천</div>
          </button>
        </div>
      </li>
      <li class="helpdesk_li">
        <div class="helpdesk_li_div">
          <button class="helpdesk_button">
            <div class="helpdesk_li_div_button_div">
              <span> </span>
              <strong>나 좀 살려줘...</strong>
            </div>
            <div class="hashtag">#여행추천</div>
          </button>
        </div>
      </li>
      <li class="helpdesk_li">
        <div class="helpdesk_li_div">
          <button class="helpdesk_button">
            <div class="helpdesk_li_div_button_div">
              <span> </span>
              <strong>help...</strong>
            </div>
            <div class="hashtag">#여행추천</div>
          </button>
        </div>
      </li>
      <li class="helpdesk_li">
        <div class="helpdesk_li_div">
          <button class="helpdesk_button">
            <div class="helpdesk_li_div_button_div">
              <span> </span>
              <strong>이제 그만!!</strong>
            </div>
            <div class="hashtag">#여행추천</div>
          </button>
        </div>
      </li>
    </ul>
  </div> -->
  <div class="FAQ_text">다른 도움이 필요하신가요?</div>
  <div class="another_help_container">
    <div class="another_help_box">
      <h3 style="font-family: 'jua'">고객센터 상담하기</h3>
      <div class="help_text">실시간 상담원과 연결됩니다.</div>
      <div class="help_time">상담시간</div>
      <div class="help_time_info">09:00 - 17:00</div>
    </div>
    <div class="another_help_box">
      <h3 style="font-family: 'jua'">chatGPT 상담하기</h3>
      <div class="help_text">챗봇과 빠른 상담이 가능합니다.</div>
      <div class="help_time">상담시간</div>
      <div class="help_time_info">24시간</div>
    </div>
    <div class="another_help_box">
      <h3 style="font-family: 'jua'">Q&A 남기기</h3>
      <div class="help_text">순서에 따라 답변을 드립니다.</div>
      <div class="help_time">답변시간</div>
      <div class="help_time_info">09:00 - 17:00</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      query: '',
      list: [
        {
          msg: '여행추천',
          Q: '여행지 추천은 어떻게 하는 건가요?',
          answer: '답변할게',
          show: false
        },
        {
          msg: 'ai사용법',
          Q: 'ai사용은 어떻게 하셨나요?',
          answer: '답변할게2',
          show: false
        },
        {
          msg: '회사소개',
          Q: 'No_doubt는 무슨 뜻인가요?',
          answer: '답변할게2',
          show: false
        },
        {
          msg: '아이디/비밀번호',
          Q: '아이디/비밀번호는 어떻게 찾나요?',
          answer: '답변할게2',
          show: false
        },
        {
          msg: '닉네임 변경',
          Q: '닉네임 변경은 어떻게 하나요?',
          answer: '답변할게2',
          show: false
        },
        {
          msg: '김민경',
          Q: '김민경은 누구인가요?',
          answer:
            'No_doubt의 서비스 기획, 제작하였으며 풀스택을 담당하고 있습니다.',
          show: false
        },
        {
          msg: '김수환',
          Q: '김수환은 누구인가요?',
          answer:
            'No_doubt의 기둥, AI 딥러닝을 구축하였으며 데이터 사이언스를 담당하고 있습니다.',
          show: false
        },
        {
          msg: '회사추천',
          Q: '오늘은 어디로 떠날까요?',
          answer: '답변할게2',
          show: false
        }
      ]
    }
  },

  computed: {
    computedList: function () {
      var vm = this
      return this.list.filter(function (item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  },

  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(el, { opacity: 1, height: '1.6em' }, { complete: done })
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done })
      }, delay)
    }
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

.query_box {
  font-family: 'jua';
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.FAQ_input {
  margin-top: 10px;
  margin: 0px 10px;
  font-size: 1.5rem;
  width: 30%;
  border: none;
  border-bottom: 2px solid black;
}

.FAQ_text {
  margin: 7rem 0rem 3rem 0rem;
  display: inline-block;
  font-family: 'dohyeon';
  font-size: 3rem;
  font-weight: 600;
  color: #f39945;
}
.helpdesk_container {
  margin-right: 70px;
  display: table;
  position: relative;
  left: -3rem;
  width: 100%;
  height: 100%;
  min-height: 100%;
  table-layout: fixed;
  text-align: left;
  box-sizing: border-box;
}

.helpdesk_li {
  display: inline-block;
  width: 25%;
  margin-top: 30px;
  vertical-align: top;
}

.helpdesk_li_div {
  margin: 0 15px;
  height: 142px;
}

.helpdesk_button {
  display: block;
  width: 100%;
  padding: 22px 21px;
  text-align: left;
  background-color: white;
  border: 2px solid #59a6ff;
  border-radius: 10px;
  box-shadow: 3px 3px 3px #00227e;
  cursor: pointer;
}

.helpdesk_button:hover {
  transform: scale(1.1);
  background-color: #59a6ff;
  transition: 0.2s linear;
}

.helpdesk_li_div_button_div {
  display: flex;
  align-items: center;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  text-overflow: ellipsis;
  line-height: 24px;
  max-height: 48px;
  height: 5rem;
  max-height: 5em;
  line-height: 1rem;
}

span {
  display: inline-block;
  width: 15px;
  height: 23px;
  margin: 0px 5px 5px 0px;
  background: url(https://ssl.pstatic.net/static/help/new_help/img/svg/faq_q.svg)
    no-repeat;
  background-size: 15px 23px;
  /* vertical-align: top; */
}

strong {
  /* display: inline-block; */
  font-size: small;
  letter-spacing: 0.5px;
  color: rgba(34, 34, 34, 0.8);
  font-family: 'dohyeon';
  color: black;
}

.hashtag {
  cursor: pointer;
  padding: 3px 5px;
  display: inline-block;
  background-color: #ffc400;
  color: #00227e;
  border: none;
  border-radius: 3px;
  font-family: 'jua';
  font-weight: 200;
  font-size: medium;
  box-shadow: 3px 3px 2px #f39945;
}

.hashtag:hover {
  background-color: #00227e;
  color: #ffc400;
  transform: scale(1.1);
  transition: 0.2s linear;
  box-shadow: 3px 3px 2px #001348;
}

.another_help_container {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 40px 0px;
}

.another_help_box {
  display: inline-block;
  position: relative;
  white-space: normal;
  vertical-align: top;
  border: 2px solid #b4cf3c;
  background-color: #3aad6618;
  border-radius: 10px;
  cursor: pointer;
  width: 20%;
  padding: 22px 21px;
}

.help_text {
  display: inline-block;
  font-family: 'jua';
  font-size: medium;
  font-weight: 300;
  margin-bottom: 12px;
  border-bottom: 2px solid #3aad67;
}

.help_time {
  font-family: 'jua';
  font-size: medium;
  font-weight: 200;
  margin-bottom: 5px;
}

.another_help_box:hover {
  background-color: #3aad67;
  color: white;
  transform: scale(1.05);
  transition: 0.2s linear;
}
.help_time_info {
  font-family: 'jua';
  font-size: medium;
  font-weight: 100;
  color: #008e37;
}

.answer_box {
  width: 60%;
  height: 3rem;
  font-family: 'jua';
  padding: 1.5rem;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
