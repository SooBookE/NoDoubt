<template>
  <!-- /* eslint-disable */ -->
  <categorie></categorie>
  <div class="introduce">
    <div class="introduce_container">
      <div class="introduce_img_box">
        <div class="car animate-text">
          <img src="../../public/car.gif" style="width: 500px" alt="" />
        </div>

        <div id="callback" class="introduce_title_text animate-text">
          No-Doubt!
        </div>
      </div>
      <div class="introduce_img1">
        <img
          class="introduce_img_1 animate-text"
          src="../../public/imoge-unscreen.gif"
          alt=""
        />
        <div class="introduce_h1">
          <h2 class="introduce_h1_1 animate-text">풀스택, 김민경</h2>
          <div class="introduce_h1_innerbox">
            <h3 class="introduce_h1_2 animate-text">
              프론트? 백? 왜 나누나요? 한 번에 해결하면 편하지 않나요?
            </h3>
            <h3 class="introduce_h1_3 animate-text">
              프론트에서 백으로 데이터를 전송하고, MongoDB 저장까지 통일성있게
              작업이 가능해요!
            </h3>
            <h3 class="introduce_h1_4 animate-text">
              하지만 저는, 마케팅이 주요 업무랍니다!
            </h3>
          </div>
        </div>
      </div>
      <hr class="line animate-text" />
      <div class="introduce_img2">
        <div
          class="introduce_img2_innerbox"
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 100px;
          "
        >
          <h2 class="introduce_h2_1 animate-text">데이터 사이언스, 김수환</h2>
          <div class="introduce_h2_innerbox">
            <h3 class="introduce_h2_2 animate-text">
              저는 완전 극 P성향을 가진 계획없는 사람이었어요.
            </h3>
            <h3 class="introduce_h2_3 animate-text">
              그래서 여자친구와 여행을 갈 때마다 싸운 적이 한 두번이 아니었어요.
            </h3>
            <h3 class="introduce_h2_4 animate-text">
              하지만 No-doubt를 만난 이후로 여자친구가 어떻게 이런 여행 계획을
              짜왔냐고 칭찬만 해요! No-doubt는 사랑입니다!
            </h3>
          </div>
        </div>
        <img
          class="introduce_img_2 animate-text"
          src="../../public/charater2-unscreen.gif"
          alt=""
        />
      </div>
    </div>
  </div>
  <sidebar></sidebar>
</template>

<script>
/*eslint-disable*/
import TypeIt from 'typeit'
import categorie from '../components/categories.vue'
import sidebar from '../components/sidebar.vue'

export default {
  name: 'app',
  data() {
    return {}
  },

  mounted() {
    this.introduce_scroll_move()
  },

  methods: {
    introduce_scroll_move: function () {
      let scrollpos = window.scrollY
      const introduce_img_1 = document.querySelector('.introduce_img_1')
      const introduce_img_2 = document.querySelector('.introduce_img_2')
      const introduce_title_text = document.querySelector(
        '.introduce_title_text'
      )
      const car = document.querySelector('.car')
      const introduce_h1_1 = document.querySelector('.introduce_h1_1')
      const introduce_h1_2 = document.querySelector('.introduce_h1_2')
      const introduce_h1_3 = document.querySelector('.introduce_h1_3')
      const introduce_h1_4 = document.querySelector('.introduce_h1_4')
      const introduce_h2_1 = document.querySelector('.introduce_h2_1')
      const introduce_h2_2 = document.querySelector('.introduce_h2_2')
      const introduce_h2_3 = document.querySelector('.introduce_h2_3')
      const introduce_h2_4 = document.querySelector('.introduce_h2_4')

      const add_class_on_scroll = (dom) => dom.classList.add('come-in')
      window.addEventListener('scroll', function () {
        scrollpos = window.scrollY
        if (scrollpos >= car.offsetHeight - 10) add_class_on_scroll(car)
        if (scrollpos >= introduce_title_text.offsetHeight - 10)
          add_class_on_scroll(introduce_title_text)
        if (scrollpos >= introduce_img_1.offsetHeight + 50)
          add_class_on_scroll(introduce_img_1)
        if (scrollpos >= introduce_h1_1.offsetHeight + 100)
          add_class_on_scroll(introduce_h1_1)
        if (scrollpos >= introduce_h1_2.offsetHeight + 150)
          add_class_on_scroll(introduce_h1_2)
        if (scrollpos >= introduce_h1_3.offsetHeight + 200)
          add_class_on_scroll(introduce_h1_3)
        if (scrollpos >= introduce_h1_4.offsetHeight + 250)
          add_class_on_scroll(introduce_h1_4)
        if (scrollpos >= introduce_img_2.offsetHeight + 300)
          add_class_on_scroll(introduce_img_2)
        if (scrollpos >= introduce_h2_1.offsetHeight + 350)
          add_class_on_scroll(introduce_h2_1)
        if (scrollpos >= introduce_h2_2.offsetHeight + 400)
          add_class_on_scroll(introduce_h2_2)
        if (scrollpos >= introduce_h2_3.offsetHeight + 450)
          add_class_on_scroll(introduce_h2_3)
        if (scrollpos >= introduce_h2_4.offsetHeight + 500)
          add_class_on_scroll(introduce_h2_4)
      })
    }
  },
  components: {
    categorie,
    sidebar
  }
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'jua';
  src: url('../../public/font/BMJUA_ttf.ttf');
}

@font-face {
  font-family: 'dohyeon';
  src: url('../../public/font/BMDOHYEON_ttf.ttf');
}

.introduce {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.introduce_title_text {
  margin-top: 50px;
  display: inline-block;
  font-family: 'dohyeon';
  font-size: 70px;
  font-weight: 600;
}

.introduce_title_text {
  font-size: 90px;
  min-width: 11px;
  white-space: nowrap;
  position: relative;
  top: -50px;
  left: -250px;
  color: transparent;
  transform: translate(-50%, -50%);
}

.introduce_title_text::before {
  content: 'No-Doubt!';
  position: absolute;
  text-shadow: 3px 3px 3px #000000;
  border-bottom: 5px solid #ebb06c;
  width: 100%;
  color: #3165dd;
  overflow: hidden;
  border-right: 0.5rem solid #0e4bd8;
  animation: typing 5s steps(20) reverse;
}

@keyframes typing {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

.introduce_container {
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  background-color: white;
  padding: 50px;
  border-radius: 100px;
  box-shadow: 10px 10px 10px 5px #aaa;
  // border: 7px solid #0e4bd8;
  width: 90%;
}

.car {
  position: relative;
  top: -200px;
  left: -100px;
}

.introduce_img_box {
  display: flex;
  height: 200px;
  margin-top: 100px;
}

img {
  width: 500px;
}

.introduce_img1,
.introduce_img2 {
  margin-top: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 30px;
  border: 1rem dashed #3165dd;
  box-shadow: 5px 2px 5px 3px #cfcfcf;
  width: 90%;
  border-radius: 20px;
}

.introduce_img1 {
  margin-top: 50px;
  display: flex;
  justify-content: left;
  // margin-left: 300px;
  align-items: center;
  padding: 30px;
}

.introduce_img_1 {
  width: 300px;
}

.introduce_h1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 100px;
}
.introduce_h1_1,
.introduce_h2_1 {
  font-family: 'dohyeon';
  color: rgb(255, 215, 60);
  text-shadow: 5px 5px 7px rgb(73, 59, 0);
  font-size: 40px;
}

.introduce_h1_innerbox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #2b2b2b;
}

.line {
  border-bottom: 2px solid #23565a;
}

.introduce_img2 {
  margin-top: 50px;
  display: flex;
  // margin-left: 500px;
  align-items: center;
}

.introduce_img_2 {
  width: 300px;
  margin-bottom: 50px;
}

// .introduce_h2_1 {
//   font-family: 'dohyeon';
//   color: rgb(255, 215, 60);
//   text-shadow: 2px 2px 2px #23565a;
// }

.introduce_img2_innerbox {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.introduce_h2_innerbox {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

h3 {
  color: black;
  font-family: 'dohyeon';
}

.animate-text {
  opacity: 0;
  transform: translateY(70px);
  -webkit-transition: all 3.7s cubic-bezier(0.23, 1, 0.03, 1);
  -webkit-transition: all 3.7s cubic-bezier(0.23, 1, 0.03, 1.005);
  -moz-transition: all 3.7s cubic-bezier(0.23, 1, 0.03, 1.005);
  -o-transition: all 3.7s cubic-bezier(0.23, 1, 0.03, 1.005);
  transition: all 3.7s cubic-bezier(0.23, 1, 0.03, 1.005);
}

.come-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
