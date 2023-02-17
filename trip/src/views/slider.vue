<template>
  <div class="main_container">
    <div class="top_container">
      <div class="search_bar_container">
        <div class="search_bar">
          <form action="">
            <input
              class="search_input_box"
              type="text"
              v-model="search"
              placeholder="검색어를 입력해주세요."
            />
            <!-- <label for="submit_button">ㅎㅇ</label> -->
            <button class="submit_button" id="submit_button" type="submit">
              <img src="../../public/search.png" alt="" class="search_img" />
            </button>
          </form>
        </div>
      </div>

      <div class="login_container">
        로그인
        <button class="login_button">login</button>
        <button class="join_button">join</button>
      </div>
    </div>
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
  </div>
  <div class="slide_button_box">
    <button class="button1" @click="button_click_slide1()">1</button>
    <button class="button2" @click="button_click_slide2()">2</button>
    <button class="button3" @click="button_click_slide3()">3</button>
  </div>
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
    };
  },

  created: function () {},

  methods: {
    button_click_slide1: function () {
      document.querySelector(".button1").addEventListener("click", function () {
        document.querySelector(".container").style.transform = "translate(0px)";
      });
    },
    button_click_slide2: function () {
      document.querySelector(".button2").addEventListener("click", function () {
        document.querySelector(".container").style.transform =
          "translate(-800px)";
      });
    },

    button_click_slide3: function () {
      document.querySelector(".button3").addEventListener("click", function () {
        document.querySelector(".container").style.transform =
          "translate(-1600px)";
      });
    },
  },
};
</script>

<style>
body {
  width: 100%;
  height: auto;
}

/*search_bar & login_button container*/
.top_container {
  display: flex;
}

/*search_bar container*/
.search_bar_container {
  /* flex-direction: column; */
}

.search_bar {
  margin: 50px;
  width: 400px;
  /* justify-content: center;
  align-items: center; */
}

.search_input_box {
  width: 100%;
  height: 30px;
}

.search_img {
  width: 30px;
}

.submit_button {
  background-color: none;
  border: none;
  color: none;
  margin-left: 10px;
}

/*login_button*/
.login_container {
  align-items: center;
}
.login_button {
  height: 30px;
}

.join_button {
  height: 30px;
}

/*이미지 슬라이더*/
.out_container {
  overflow: hidden;
  width: 50%;
  display: flex;
  justify-content: center;
}
.container {
  width: 2400px;
  display: flex;
  justify-content: center;
  transition: linear 0.3s;
}

#image_slide {
  width: 800px;
  justify-content: center;
}
.slide_button_box {
  width: 50%;
  display: flex;
  justify-content: center;
}

/*로그인 박스*/
.login_container {
  display: flex;
  justify-content: right;
}
</style>
