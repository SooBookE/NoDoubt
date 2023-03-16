<template>
  <div id="scroll3"></div>
  <div class="painpoint_container">
    <div class="img1">
      <img
        class="img_1 animate-text"
        src="../../public/painpoint1.png"
        alt=""
      />
      <div
        class="h1_text_box"
        style="display: flex; flex-direction: column; align-items: flex-start"
      >
        <h1 class="h1_1 animate-text" style="color: #3165dd">
          "흔한 직장인의 여름휴가 계획"
        </h1>
        <h3 class="h1_2 animate-text">
          흔한 직장인의 3월 : '올해는 미리미리 휴가계획을 해서 꼭 알차게
          보내야지!'
        </h3>
        <h3 class="h1_3 animate-text">
          흔한 직장인의 6월 : '미리 휴가계획 세우기는 무슨! 벌써 6월이
          되버렸어!!'
        </h3>
      </div>
    </div>
    <div class="img2">
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-right: 30px;
        "
      >
        <h3 class="h2_1 animate-text">
          여름휴가 계획을 3월부터 짰는데, 어디로 갈지, 어떻게 갈지 답을 찾을
          수가 없다!
        </h3>
        <h3 class="h2_2 animate-text">
          사람이 많이 붐비지 않았으면 좋겠어, 그리고 저렴했으면 좋겠고,
        </h3>
        <h3 class="h2_3 animate-text">
          또 이것도 알아봐야 하고, 저것도 챙겨야 하고, 팀원들끼리 휴가도 안
          겹쳐야 하고!!
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
      <div
        style="display: flex; flex-direction: column; align-items: flex-start"
      >
        <h3 class="h3_1 animate-text">
          이런 당신의 고민을 한 방에 해결해 줄 멋진 방법이 드디어 나왔습니다!
        </h3>
        <h3 class="h3_2 animate-text">
          언제 갈 지, 어디로 갈 지, 가서는 또 뭘 하는 게 좋을 지
        </h3>
        <h3 class="h3_3 animate-text">
          이제 똑똑한 여행 계획 플래너 No_doubt AI에게 물어보세요!
        </h3>
      </div>
    </div>
  </div>
  <h3
    class="h4_1 animate-text"
    style="font-family: 'jua'; margin-top: 80px; font-size: 40px"
  >
    이제 더이상 의심하지 마세요.
  </h3>
  <h1
    class="h4_2 animate-text"
    style="font-family: 'jua'; color: black; margin-left: 30px; font-size: 50px"
  >
    여행은 역시
    <strong
      class="brand_name"
      style="color: #3165dd; font-size: 80px; text-shadow: 3px 3px 3px black"
      >'No-doubt'
    </strong>
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
        if (scrollpos >= h1_1.offsetHeight + 0) add_class_on_scroll(h1_1)
        if (scrollpos >= h1_2.offsetHeight + 200) add_class_on_scroll(h1_2)
        if (scrollpos >= h1_3.offsetHeight + 400) add_class_on_scroll(h1_3)
        if (scrollpos >= img_2.offsetHeight + 600) add_class_on_scroll(img_2)
        if (scrollpos >= h2_1.offsetHeight + 800) add_class_on_scroll(h2_1)
        if (scrollpos >= h2_2.offsetHeight + 1000) add_class_on_scroll(h2_2)
        if (scrollpos >= h2_3.offsetHeight + 1200) add_class_on_scroll(h2_3)
        if (scrollpos >= img_3.offsetHeight + 1400) add_class_on_scroll(img_3)
        if (scrollpos >= h3_1.offsetHeight + 1600) add_class_on_scroll(h3_1)
        if (scrollpos >= h3_2.offsetHeight + 1800) add_class_on_scroll(h3_2)
        if (scrollpos >= h3_3.offsetHeight + 2000) add_class_on_scroll(h3_3)
        if (scrollpos >= h4_1.offsetHeight + 2200) add_class_on_scroll(h4_1)
        if (scrollpos >= h4_2.offsetHeight + 2400) add_class_on_scroll(h4_2)
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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  align-items: center;
  background-color: white;
  padding: 50px 150px;
  border-radius: 50px;
  box-shadow: 4px 4px 4px 5px #aaa;
}

img {
  width: 500px;
}

.img1,
.img2,
.img3 {
  width: 100%;
}

.img1,
.img3 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.img2 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.h1_1,
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

.brand_name {
  font-family: 'dohyeon';
  position: relative;
  font-size: 70px;
  min-width: 11px;
  white-space: nowrap;
  color: transparent;
  transform: translate(-50%, -50%);
}

.brand_name::before {
  content: "'No-doubt'";
  position: absolute;
  text-shadow: 3px 3px 3px #391e00;
  width: 50%;
  color: #ff9d00;
  overflow: hidden;
  border-right: 3px solid #e27800;
  animation: typing 6s steps(31) infinite;
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
</style>
