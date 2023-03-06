<template>
  <div id="scroll3"></div>
  <div class="painpoint_container">
    <div class="img1">
      <img
        class="img_1 animate-text"
        src="../../public/painpoint1.png"
        alt=""
      />
      <div>
        <h3 class="h1_1 animate-text">3월부터 짜는 여름휴가 계획,</h3>
        <h3 class="h1_2 animate-text">어디로 갈지, 어떻게 갈지</h3>
        <h3 class="h1_3 animate-text">답을 찾을 수가 없다!</h3>
      </div>
    </div>
    <div class="img2">
      <div
        style="display: flex; flex-direction: column; justify-content: center"
      >
        <h3 class="h2_1 animate-text">항상 계획만 짜다가 끝나는</h3>
        <h2 style="font-family: 'dohyeon'" class="h2_2 animate-text">
          나의 노답 여행계획!!
        </h2>
        <h3 class="h2_3 animate-text" style="margin-right: 20px">
          누가 제발 도와줘!!
        </h3>
      </div>
      <img
        class="img_2 animate-text"
        src="../../public/painpoint2.png"
        alt=""
      />
    </div>
    <div class="img3">
      <img
        class="img_3 animate-text"
        src="../../public/painpoint3.png"
        alt=""
      />
      <div>
        <h3 class="h3_1 animate-text">그래서 드디어 나왔습니다!</h3>
        <h3 class="h3_2 animate-text">여러분들이 기다려 온</h3>
        <h3 class="h3_3 animate-text">똑똑한 여행 계획 플래너!!</h3>
      </div>
    </div>
  </div>
  <h3
    class="h4_1 animate-text"
    style="font-family: 'dohyeon'; margin-top: 50px"
  >
    이제 더이상 의심하지 마세요.
  </h3>
  <h1
    class="h4_2 animate-text"
    style="font-family: 'dohyeon'; margin-left: 30px"
  >
    여행은 역시 <strong style="color: #3165dd">'No-doubt' </strong>
  </h1>
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
      const img_1 = document.querySelector('.img_1')
      const img_2 = document.querySelector('.img_2')
      const img_3 = document.querySelector('.img_3')
      const h1_1 = document.querySelector('.h1_1')
      const h1_2 = document.querySelector('.h1_2')
      const h1_3 = document.querySelector('.h1_3')
      const h2_1 = document.querySelector('.h2_1')
      const h2_2 = document.querySelector('.h2_2')
      const h2_3 = document.querySelector('.h2_3')
      const h3_1 = document.querySelector('.h3_1')
      const h3_2 = document.querySelector('.h3_2')
      const h3_3 = document.querySelector('.h3_3')
      const h4_1 = document.querySelector('.h4_1')
      const h4_2 = document.querySelector('.h4_2')

      const add_class_on_scroll = (dom) => dom.classList.add('come-in')
      window.addEventListener('scroll', function () {
        scrollpos = window.scrollY
        if (scrollpos >= img_1.offsetHeight - 200) add_class_on_scroll(img_1)
        if (scrollpos >= img_2.offsetHeight + 200) add_class_on_scroll(img_2)
        if (scrollpos >= img_3.offsetHeight + 600) add_class_on_scroll(img_3)
        if (scrollpos >= h1_1.offsetHeight + 400) add_class_on_scroll(h1_1)
        if (scrollpos >= h1_2.offsetHeight + 430) add_class_on_scroll(h1_2)
        if (scrollpos >= h1_3.offsetHeight + 460) add_class_on_scroll(h1_3)
        if (scrollpos >= h2_1.offsetHeight + 600) add_class_on_scroll(h2_1)
        if (scrollpos >= h2_2.offsetHeight + 630) add_class_on_scroll(h2_2)
        if (scrollpos >= h2_3.offsetHeight + 660) add_class_on_scroll(h2_3)
        if (scrollpos >= h3_1.offsetHeight + 1000) add_class_on_scroll(h3_1)
        if (scrollpos >= h3_2.offsetHeight + 1030) add_class_on_scroll(h3_2)
        if (scrollpos >= h3_3.offsetHeight + 1060) add_class_on_scroll(h3_3)
        if (scrollpos >= h4_1.offsetHeight + 1300) add_class_on_scroll(h4_1)
        if (scrollpos >= h4_2.offsetHeight + 1330) add_class_on_scroll(h4_2)
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

.painpoint_container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
}

img {
  width: 500px;
}

.img1,
.img2,
.img3 {
  width: 100%;
}

.img1 {
  display: flex;
  justify-content: left;
  margin-left: 700px;
  align-items: center;
}

.img2 {
  display: flex;
  justify-content: right;
  margin-right: 700px;
  align-items: center;
}

.img3 {
  display: flex;
  justify-content: left;
  margin-left: 700px;
  align-items: center;
}

h3 {
  margin-left: 30px;
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
