<template>
  <div class="review_container">
    <div class="review_title_text animate-text">고객님들의 쌩쌩 Review!</div>
    <div class="review_img1">
      <img
        class="review_img_1 animate-text"
        src="../../public/imoge-unscreen.gif"
        alt=""
      />
      <div class="review_h1">
        <h2 class="review_h1_1 animate-text">프로 여행가 A씨</h2>
        <div class="review_h1_innerbox">
          <h3 class="review_h1_2 animate-text">
            저는 처음부터 프로 여행가가 아니었어요. No-Doubt를 만난 이후로 제
            여행에 의심이 사라졌죠.
          </h3>
          <h3 class="review_h1_3 animate-text">
            제가 어떤 여행을 좋아할지, 어느 장소를 좋아할지 쏙쏙 골라주는
            No-Doubt 덕분에 지금은 여행을 떠날 날짜만 정해요.
          </h3>
          <h3 class="review_h1_4 animate-text">
            가끔은 날짜마저도 정하지 않는 날도 있어요. 사람이 많이 없는 날을
            추천받아 가는 것도 좋더라구요.
          </h3>
        </div>
      </div>
    </div>
    <hr class="line animate-text" />
    <div class="review_img2">
      <div
        class="review_img2_innerbox"
        style="display: flex; flex-direction: column; justify-content: center"
      >
        <h2 class="review_h2_1 animate-text">프로 여행가 B씨</h2>
        <div class="review_h2_innerbox">
          <h3 class="review_h2_2 animate-text">
            저는 완전 극 P성향을 가진 계획없는 사람이었어요.
          </h3>
          <h3 class="review_h2_3 animate-text">
            그래서 여자친구와 여행을 갈 때마다 싸운 적이 한 두번이 아니었어요.
          </h3>
          <h3 class="review_h2_4 animate-text">
            하지만 No-doubt를 만난 이후로 여자친구가 어떻게 이런 여행 계획을
            짜왔냐고 칭찬만 해요! No-doubt는 사랑입니다!
          </h3>
        </div>
      </div>
      <img
        class="review_img_2 animate-text"
        src="../../public/charater2-unscreen.gif"
        alt=""
      />
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'app',
  data() {
    return {}
  },

  mounted() {
    this.scroll_move()
  },

  methods: {
    scroll_move: function () {
      let scrollpos = window.scrollY
      const review_img_1 = document.querySelector('.review_img_1')
      const review_img_2 = document.querySelector('.review_img_2')
      const review_title_text = document.querySelector('.review_title_text')
      const review_h1_1 = document.querySelector('.review_h1_1')
      const review_h1_2 = document.querySelector('.review_h1_2')
      const review_h1_3 = document.querySelector('.review_h1_3')
      const review_h1_4 = document.querySelector('.review_h1_4')
      const review_h2_1 = document.querySelector('.review_h2_1')
      const review_h2_2 = document.querySelector('.review_h2_2')
      const review_h2_3 = document.querySelector('.review_h2_3')
      const review_h2_4 = document.querySelector('.review_h2_4')

      const add_class_on_scroll = (dom) => dom.classList.add('come-in')
      window.addEventListener('scroll', function () {
        scrollpos = window.scrollY
        if (scrollpos >= review_img_1.offsetHeight + 1900)
          add_class_on_scroll(review_img_1)
        if (scrollpos >= review_img_2.offsetHeight + 2300)
          add_class_on_scroll(review_img_2)
        if (scrollpos >= review_title_text.offsetHeight + 1800)
          add_class_on_scroll(review_title_text)
        if (scrollpos >= review_h1_1.offsetHeight + 1900)
          add_class_on_scroll(review_h1_1)
        if (scrollpos >= review_h1_2.offsetHeight + 1900)
          add_class_on_scroll(review_h1_2)
        if (scrollpos >= review_h1_3.offsetHeight + 2000)
          add_class_on_scroll(review_h1_3)
        if (scrollpos >= review_h1_4.offsetHeight + 2100)
          add_class_on_scroll(review_h1_4)
        if (scrollpos >= review_h2_1.offsetHeight + 2400)
          add_class_on_scroll(review_h2_1)
        if (scrollpos >= review_h2_2.offsetHeight + 2500)
          add_class_on_scroll(review_h2_2)
        if (scrollpos >= review_h2_3.offsetHeight + 2600)
          add_class_on_scroll(review_h2_3)
        if (scrollpos >= review_h2_4.offsetHeight + 2700)
          add_class_on_scroll(review_h2_4)
      })
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

.review_title_text {
  margin-top: 50px;
  display: inline-block;
  font-family: 'dohyeon';
  font-size: xx-large;
  font-weight: 600;
  color: #dea565;
  border: 5px dashed #23565a;
  border-radius: 20px;
  padding: 20px;
}
.review_container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  background-color: #bbd1c5;
}

img {
  width: 500px;
}

.review_img1,
.review_img2,
.img3 {
  width: 100%;
}

.review_img1 {
  margin-top: 50px;
  display: flex;
  justify-content: left;
  margin-left: 300px;
  align-items: center;
  padding: 30px;
}

.review_img_1 {
  width: 300px;
}

.review_h1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 100px;
}
.review_h1_1 {
  font-family: 'dohyeon';
  color: #23565a;
}

.review_h1_innerbox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #2b2b2b;
}

.line {
  border-bottom: 2px solid #23565a;
}

.review_img2 {
  margin-top: 50px;
  display: flex;
  margin-left: 500px;
  align-items: center;
}

.review_img_2 {
  width: 300px;
  margin-bottom: 50px;
}

.review_h2_1 {
  font-family: 'dohyeon';
  color: #23565a;
}

.review_img2_innerbox {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.review_h2_innerbox {
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
