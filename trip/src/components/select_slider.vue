<template>
  <!-- eslint-disable -->
  <div id="scroll2"></div>
  <div class="AI_slider_container">
    <div class="home">
      <input
        id="tab1"
        type="radio"
        name="tabs"
        @click="select = 'AI_recommand'"
      />

      <input
        id="tab2"
        type="radio"
        name="tabs"
        @click="select = 'normal_recommand'"
      />
      <label for="tab1" class="label1">AI</label>
      <label for="tab2" class="label2">normal</label>

      <keep-alive>
        <component :is="select"></component>
      </keep-alive>
    </div>
    <div class="image_button_container">
      <div class="out_container">
        <div class="container">
          <div class="image_slide">
            <button class="left_button" @click="left_button_click1()">
              왼
            </button>
            <img :src="image[0]" alt="" style="width: 100%" />
            <button class="right_button" @click="right_button_click1()">
              오
            </button>
          </div>
          <div class="image_slide">
            <button class="left_button" @click="left_button_click2()">
              왼
            </button>
            <img :src="image[1]" alt="" style="width: 100%" />
            <button class="right_button" @click="right_button_click2()">
              오
            </button>
          </div>
          <div class="image_slide">
            <button class="left_button" @click="left_button_click3()">
              왼
            </button>
            <img :src="image[0]" alt="" style="width: 100%" />
            <button class="right_button" @click="right_button_click3()">
              오
            </button>
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
import AI_recommand from './AI_recommand.vue'
import normal_recommand from './normal_recommand.vue'

export default {
  name: 'app',
  data() {
    return {
      image: [
        'https://i.pinimg.com/564x/d9/c5/2c/d9c52ca87991a593a29b2b78d87d57a2.jpg',
        'https://i.pinimg.com/564x/09/62/5f/09625f00408ecdfb00a8f633f7fe8a8f.jpg'
      ],
      select: 'AI_recommand'
    }
  },

  mounted() {},

  methods: {
    button_click_slide1: function () {
      document.querySelector('.button1').addEventListener('click', function () {
        document.querySelector('.container').style.transform =
          'translate(700px)'
      })
    },
    button_click_slide2: function () {
      document.querySelector('.button2').addEventListener('click', function () {
        document.querySelector('.container').style.transform = 'translate(-0px)'
      })
    },

    button_click_slide3: function () {
      document.querySelector('.button3').addEventListener('click', function () {
        document.querySelector('.container').style.transform =
          'translate(-700px)'
      })
    },

    left_button_click1: function () {
      document.querySelector('.container').style.transform = 'translate(-700px)'
      console.log(document.querySelector('.container').style.transform)
    },
    left_button_click2: function () {
      document.querySelector('.container').style.transform = 'translate(700px)'
      console.log(document.querySelector('.container').style.transform)
    },
    left_button_click3: function () {
      document.querySelector('.container').style.transform = 'translate(0px)'
      console.log(document.querySelector('.container').style.transform)
    },

    right_button_click1: function () {
      document.querySelector('.container').style.transform = 'translate(0px)'
      console.log(document.querySelector('.container').style.transform)
    },
    right_button_click2: function () {
      document.querySelector('.container').style.transform = 'translate(-700px)'
      console.log(document.querySelector('.container').style.transform)
    },
    right_button_click3: function () {
      document.querySelector('.container').style.transform = 'translate(700px)'
      console.log(document.querySelector('.container').style.transform)
    }
  },
  components: {
    AI_recommand,
    normal_recommand
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

.AI_slider_container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

/*라디오버튼 숨김*/
input {
  display: none;
}

/* .home {
  width: 402px;
} */

label {
  display: inline-flex;
  width: 49%;
  height: 30px;
  align-items: center;
  justify-content: center;
  font-family: 'dohyeon';
  font-weight: 600;
  text-align: center;
  color: black;
  /* border-bottom: none; */
}

label:hover {
  border: 1px solid black;
  box-shadow: 5px 3px 3px gray;
  color: #7c7c7c;
  cursor: pointer;
}

/*input 클릭시, label 스타일*/
/* input:checked + label {
  color: #555;
  border: 1px solid #ddd;
  border-top: 3px solid #004a79;
  border-left: 2px solid #000000;
  border-right: 2px solid #000000;
  box-shadow: 5px 2px 3px gray;
} */

#tab1:checked ~ .label2 {
  border-bottom: 1px solid #000000;
  box-shadow: 0px 2px 0px rgb(168, 168, 168);
}
#tab1:checked ~ .label1 {
  color: #555;
  border: 1px solid #ddd;
  border-top: 3px solid #004a79;
  border-left: 2px solid #000000;
  border-right: 2px solid #000000;
  box-shadow: 5px 2px 3px gray;
}

#tab2:checked ~ .label1 {
  border-bottom: 1px solid #000000;
  box-shadow: 0px 2px 0px rgb(168, 168, 168);
}
#tab2:checked ~ .label2 {
  color: #555;
  border: 1px solid #ddd;
  border-top: 3px solid #004a79;
  border-left: 2px solid #000000;
  border-right: 2px solid #000000;
  box-shadow: 5px 2px 3px gray;
}

/*AI 검색*/
.AI_search_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

select {
  font-family: 'jua';
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

.AI_submit_button {
  width: 150px;
  height: 50px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 10px;
  font-family: 'jua';
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
  width: 700px;
  display: flex;
  justify-content: center;
  margin: 10px;
  margin-left: 10px;
  border-radius: 20px;
  box-shadow: 0px 8px 5px 0px gray;
}
.container {
  width: 2100px;
  display: flex;
  justify-content: center;
  transition: linear 0.3s;
}

.image_slide {
  width: 700px;
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

.left_button {
  position: relative;
  bottom: -50%;
  right: 40%;
}

.right_button {
  position: relative;
  bottom: 47%;
  left: 40%;
}
.left_button1 {
  position: relative;
  bottom: -50%;
  right: 40%;
}

.right_button1 {
  position: relative;
  bottom: 47%;
  left: 40%;
}
</style>
