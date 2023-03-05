<template>
  <div id="scroll3"></div>
  <div class="painpoint_container">
    <div class="img1">
      <img
        class="img_1 animate-text"
        src="../../public/painpoint1.png"
        alt=""
      />
      <h3 class="h1_1 animate-text">매일 짜는 휴가 계획</h3>
    </div>
    <div class="img2">
      <h3 class="h1_2 animate-text">이젠 어딜 가야할 지 모르겠다...</h3>
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
      <h3 class="h1_3 animate-text">노답이야아아아!!!</h3>
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
      const img_1 = document.querySelector('.img_1')
      const img_2 = document.querySelector('.img_2')
      const img_3 = document.querySelector('.img_3')
      const h1_1 = document.querySelector('.h1_1')
      const h1_2 = document.querySelector('.h1_2')
      const h1_3 = document.querySelector('.h1_3')
      const add_class_on_scroll = (dom) => dom.classList.add('come-in')
      window.addEventListener('scroll', function () {
        scrollpos = window.scrollY
        if (scrollpos >= img_1.offsetHeight - 200) add_class_on_scroll(img_1)
        if (scrollpos >= img_2.offsetHeight + 200) add_class_on_scroll(img_2)
        if (scrollpos >= img_3.offsetHeight + 600) add_class_on_scroll(img_3)
        if (scrollpos >= h1_1.offsetHeight + 400) add_class_on_scroll(h1_1)
        if (scrollpos >= h1_2.offsetHeight + 600) add_class_on_scroll(h1_2)
        if (scrollpos >= h1_3.offsetHeight + 1000) add_class_on_scroll(h1_3)
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
}

.img2 {
  display: flex;
  justify-content: right;
  margin-right: 700px;
}

.img3 {
  display: flex;
  justify-content: left;
  margin-left: 700px;
}

h3 {
  margin-top: 180px;
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
