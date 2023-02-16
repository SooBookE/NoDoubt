<template>
  <div class="kind_wrap">
    <div class="kind_slider">
      <ul class="slider">
        <li v-for="i in slideLis" :key="i">
          <div class="AB">{{ i.src }}</div>
          <img :src="i.src" alt="" />
        </li>
      </ul>
    </div>
    <div class="arrow" @click="moveSlide()">
      <a href="" class="prev">이전</a>
      <a href="" class="next">다음</a>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "app",
  data() {
    return {
      slideLis: [],
    };
  },

  mounted() {
    kSlider();
  },

  methods: {
    kSlider: function () {
      // 노드 준비
      const slider = document.querySelector(".slider");

      const kindWrap = document.createElement("div");
      kindWrap.className = "kind_wrap";
      slider.parentNode.insertBefore(kindWrap, slider);

      const kindSlider = document.createElement("div");
      kindSlider.className = "kind_slider";
      kindWrap.appendChild(kindSlider);
      kindSlider.appendChild(slider);

      const sliderLis = slider.querySelectorAll("li");
      const cloneF = sliderLis[0].cloneNode(true); //First의 clone
      const cloneL = sliderLis[sliderLis.length - 1].cloneNode(true); //Last의 clone
      slider.insertBefore(cloneL, sliderLis[0]);
      slider.appendChild(cloneF);

      const moveBtn = document.createElement("div");
      moveBtn.className = "arrow";
      moveBtn.innerHTML = `
    <a href="" class="prev">이전</a>
    <a href="" class="next">다음</a>
  `;
      kindWrap.appendChild(moveBtn);

      /* slideLis에 사진 추가하기*/
      const img = "./모코코.png";
      this.slideLis.push(img);
      console.log(this.slideLis);

      //주요 변수 초기화
      let moveDist = 0;
      let currentNum = 1;
      const speedTime = 500;

      //ul 넓이 계산해주기
      //이 값을 css로 전달해주어야함
      //.kind_wrap > .kind_slider 여기로
      const sliderCloneLis = document.querySelectorAll("li");
      const liWidth = sliderLis[0].clientWidth;
      const sliderWidth = liWidth * sliderCloneLis.length;
      slider.style.width = `${sliderWidth}px`; //sliderWidth + 'px' 와 같습니다.

      slider.style.width = `${sliderWidth}px`;
      moveDist = -liWidth;
      slider.style.left = `${-liWidth}px`;

      //click listner 만들기
      moveBtn.addEventListener("click", moveSlide);
    },

    moveSlide: function (event) {
      let currentIdx = 0; // 슬라이드 현재 번호
      let translate = 0; // 슬라이드 위치 값
      if (event.target.className === "next") {
        if (currentIdx !== this.slideLis.length - 1) {
          translate -= liWidth;
          slider.style.transform = `translateX(${translate}px)`;
          currentIdx += 1;
        }
      } else if (event.target.className === "prev") {
        if (currentIdx !== 0) {
          translate += liWidth;
          slider.style.transform = `translateX(${translate}px)`;
          currentIdx -= 1;
        }
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.kind_wrap {
  border: 2px solid black;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}
.kind_wrap > .kind_slider {
  overflow: hidden;
}
.kind_wrap > .kind_slider .slider {
  position: relative;
  transition: 0.5s;
}
.kind_wrap > .kind_slider .slider li {
  float: left;
}
.kind_wrap > .kind_slider img {
  vertical-align: top;
}
.kind_wrap .arrow > a.prev {
  position: absolute;
  left: -50px;
  top: 100px;
}
.kind_wrap .arrow > a.next {
  position: absolute;
  right: -50px;
  top: 100px;
}

.AB {
  width: 800px;
}
</style>
