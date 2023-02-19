<template>
  <!-- 제일 바깥 쪽 컨테이너 -->
  <!-- eslint-disable -->
  <div class="main_container">
    <!-- 홈페이지 메인 -->
    <div class="home_main">
      <!-- 카테고리 -->
      <div class="categorie_container">
        <div class="categorie_innerbox">
          <button class="categorie_button" @click="scroll()">홈</button>
          <div style="color: white">
            &nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp
          </div>
          <button class="categorie_button" @click="scroll2()">
            여행지 추천
          </button>
          <div style="color: white">
            &nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp
          </div>
          <button class="categorie_button">서비스 소개</button>
          <div style="color: white">
            &nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp
          </div>
          <button class="categorie_button">고객센터</button>
        </div>
      </div>
      <img src="../../public/main.png" alt="" style="width: 100%" />
    </div>
    <!-- 검색창&로그인 컨테이너 -->
    <div id="scroll1"></div>
    <div class="top_container">
      <!-- 검색창 -->
      <div class="search_bar_container">
        <div class="search_bar">
          <form action="" class="search_bar_inner">
            <input
              class="search_input_box"
              type="text"
              v-model="search"
              placeholder="검색어를 입력해주세요."
            />
            <button class="submit_button" id="submit_button" type="submit">
              <img src="../../public/search.png" alt="" class="search_img" />
            </button>
          </form>
        </div>
      </div>
      <!-- 로그인 -->
      <div class="login_container">
        <button id="login_button" class="login_button">login</button>
        <div>&nbsp&nbsp|&nbsp&nbsp</div>
        <button id="join_button" class="join_button">join</button>
      </div>
    </div>
    <!-- 슬라이더 -->
    <div id="scroll2"></div>
    <div class="AI_slider_container">
      <form action="" class="AI_form">
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
      </form>
      <div class="image_button_container">
        <div class="out_container">
          <div class="container">
            <div id="image_slide">
              <img :src="image[0]" alt="" />
            </div>
            <div id="image_slide">
              <img :src="image[0]" alt="" />
            </div>
            <div id="image_slide">
              <img :src="image[0]" alt="" />
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
  </div>
  <button id="target" @click="handleScroll()">
    <img id="top_arrow" src="../../public/arrow.png" alt="" />
  </button>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyObLLHeQeBSpYHjl9lXRG4QxwyZqH07Rqw&usqp=CAU",
        "https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/878622f0668749c6b564aa0d07e42c41/6c3f697d7100400b935c283cc18cc87e_1649236541.png",
      ],
      timer: null,
      search: "",
      AI_search: "",
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
    scroll: function () {
      const scroll1 = document.getElementById("scroll1");
      scroll1.scrollIntoView({ behavior: "smooth" });
    },
    scroll2: function () {
      const scroll2 = document.getElemessntById("scroll2");
      scroll2.scrollIntoView({ behavior: "smooth" });
    },
    handleScroll: function () {
      const top_scroll = document.getElementById("target");
      top_scroll.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
};
</script>

<style>
/*font*/
@font-face {
  font-family: "jua";
  src: url("../../public/font/BMJUA_ttf.ttf");
}

@font-face {
  font-family: "dohyeon";
  src: url("../../public/font/BMDOHYEON_ttf.ttf");
}

.box {
  height: 10000px;
}

body {
  width: 100%;
  height: auto;
}

.main_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/*맨위로 버튼*/
#target {
  position: fixed;
  right: 50%;
  top: 80%;
  margin-right: -45%;
  text-align: center;
  width: 10%;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

#top_arrow {
  width: 50%;
  border: 5px solid black;
  border-radius: 50px;
}

/*상단 메인*/
.home_main {
  width: 100%;
  height: 500px;
  background-color: aliceblue;
}

/*categorie*/
.categorie_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(91, 172, 102);
  height: 50px;
}

.categorie_innerbox {
  display: flex;
  justify-content: right;
  margin-right: 10%;
}

.categorie_button {
  border: none;
  background-color: white;
  color: white;
  cursor: pointer;
  font-family: "dohyeon";
  font-size: larger;
  background-color: rgb(91, 172, 102);
}

.categorie_button:hover {
  color: rgb(91, 172, 102);
  background-color: white;
  border-radius: 5px;
  transform: scale(1.2);
  transition: linear 0.2s;
}

/*search_bar & login_button container*/
.top_container {
  width: 100%;
  display: flex;
  align-items: center;
  height: 600px;
  background-color: #dadf86;
}

/*search_bar container*/
.search_bar_inner {
  display: flex;
}

.search_bar {
  margin: 50px;
  width: 400px;
}

.search_input_box {
  width: 100%;
  height: 30px;
  padding: 0px 10px;
  font-family: "jua";
}

.search_img {
  width: 30px;
  background-color: white;
}

.submit_button {
  background-color: white;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

/*login_button*/
.login_container {
  align-items: center;
  margin-left: 50px;
}
.login_button,
.join_button {
  height: 30px;
  border: none;
  background-color: white;
  cursor: pointer;
  font-family: "jua";
  font-size: medium;
}
.login_button:hover {
  transform: translateY(-5px) scale(1.2);
  transition: linear 0.2s;
  color: rgb(124, 213, 240);
}

.join_button:hover {
  transform: translateY(-5px) scale(1.2);
  transition: linear 0.2s;
  color: rgb(124, 213, 240);
}

/*AI search&이미지슬라이더 콘테이너*/
.AI_slider_container {
  width: 100%;
  height: 600px;
  background-color: #e2aaaa;
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px;
}

/*AI 검색*/
.AI_search_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
}

select {
  font-family: "jua";
  font-size: medium;
  margin: 10px 0px;
  width: 100px;
  height: 30px;
  text-align: center;
}

.AI_submit_button {
  width: 100px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 10px;
  font-family: "jua";
  font-size: large;
  color: rgb(124, 213, 240);
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
  flex-direction: column;
}

.out_container {
  overflow: hidden;
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 10px;
  margin-left: 10px;
}
.container {
  width: 1200px;
  display: flex;
  justify-content: center;
  transition: linear 0.3s;
}

#image_slide {
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
  background-color: white;
  cursor: pointer;
  color: gray;
  margin: 5px;
}

/*로그인 박스*/
.login_container {
  display: flex;
  justify-content: right;
}
</style>
