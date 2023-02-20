<template>
  <!-- eslint-disable -->
  <div id="scroll2"></div>
  <div class="AI_slider_container">
    <form action="" class="AI_form">
      <div class="inputbox_design">
        <div class="AI_search_container">
          <select class="AI_search_select" placeholder="성별을 선택해주세요.">
            <option value="성별">성별</option>
            <option value="성별">남성</option>
            <option value="성별">여성</option>
          </select>
          <select class="AI_search_select" placeholder="연령대를 선택해주세요.">
            <option value="연령대">연령대</option>
            <option value="연령대">20대</option>
            <option value="연령대">30대</option>
            <option value="연령대">40대</option>
            <option value="연령대">50대</option>
            <option value="연령대">60대 이상</option>
          </select>
          <select
            class="AI_search_select"
            placeholder="선호활동을 선택해주세요."
          >
            <option value="선호활동">선호활동</option>
            <option value="선호활동">집</option>
            <option value="선호활동">집 밖</option>
          </select>
          <button type="submit" class="AI_submit_button">입력</button>
        </div>
      </div>
    </form>
    <div class="image_button_container">
      <div class="out_container">
        <div class="container">
          <div class="image_slide">
            <img :src="image[0]" alt="" style="width: 100%" />
          </div>
          <div class="image_slide">
            <img :src="image[1]" alt="" style="width: 100%" />
          </div>
          <div class="image_slide">
            <img :src="image[0]" alt="" style="width: 100%" />
          </div>
        </div>
      </div>
      <div class="slide_button_box">
        <!-- 2번 사진이 1번 사진이 됨 -->
        <button class="button1" @click="button_click_slide1()">ㅡ</button>
        <button class="button2" @click="button_click_slide2()">ㅡ</button>
        <button class="button3" @click="button_click_slide3()">ㅡ</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      image: [
        "https://i.pinimg.com/564x/d9/c5/2c/d9c52ca87991a593a29b2b78d87d57a2.jpg",
        "https://i.pinimg.com/564x/09/62/5f/09625f00408ecdfb00a8f633f7fe8a8f.jpg",
      ],
    };
  },
  methods: {
    button_click_slide1: function () {
      document.querySelector(".button1").addEventListener("click", function () {
        document.querySelector(".container").style.transform =
          "translate(400px)";
      });
    },
    button_click_slide2: function () {
      document.querySelector(".button2").addEventListener("click", function () {
        document.querySelector(".container").style.transform =
          "translate(-0px)";
      });
    },

    button_click_slide3: function () {
      document.querySelector(".button3").addEventListener("click", function () {
        document.querySelector(".container").style.transform =
          "translate(-400px)";
      });
    },
  },
};
</script>

<style>
@font-face {
  font-family: "jua";
  src: url("../../public/font/BMJUA_ttf.ttf");
}

@font-face {
  font-family: "dohyeon";
  src: url("../../public/font/BMDOHYEON_ttf.ttf");
}

.AI_slider_container {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

/*AI 검색*/
.inputbox_design {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  border: 5px double black;
  border-radius: 30px;
  margin-right: 10px;
}

.AI_search_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

select {
  font-family: "jua";
  font-size: larger;
  margin: 10px 0px;
  width: 200px;
  height: 50px;
  text-align: center;
  background-color: transparent;
  border: none;
}

option {
  background-color: transparent;
}

option:hover {
  background-color: #64bac9;
  border: none;
}

.AI_submit_button {
  width: 150px;
  height: 50px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 10px;
  font-family: "jua";
  font-size: larger;
  color: rgb(124, 213, 240);
  border-radius: 20px;
}

.AI_submit_button:hover {
  transform: translateY(-5px) scale(1.1);
  background-color: rgb(124, 213, 240);
  border-radius: 10px;
  color: white;
  transition: linear 0.2s;
}

/*이미지 슬라이더*/
.image_button_container {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  bottom: -15px;
}

.out_container {
  overflow: hidden;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  margin: 10px;
  margin-left: 10px;
  border-radius: 20px;
}
.container {
  width: 1200px;
  height: 400px;
  display: flex;
  justify-content: center;
  transition: linear 0.3s;
  padding: 0px;
}

.image_slide {
  width: 400px;
  justify-content: center;
}
.slide_button_box {
  width: 50%;
  display: flex;
  justify-content: center;
}
.button1,
.button2,
.button3 {
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: gray;
  margin: 5px;
}
</style>
