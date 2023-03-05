<template>
  <!-- eslint-disable -->
  <div class="AI_slider_container">
    <div class="select_container">
      <input
        id="tab1"
        type="radio"
        name="tabs"
        @click="select = 'AI_recommand'"
        checked
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
    <div class="image_bottom_button_container">
      <div class="image_side_button_container">
        <button class="left_button" @click="left_button_click()">
          <img class="left_button_img" src="../../public/left.png" alt="" />
        </button>
        <div class="out_container">
          <div class="container">
            <div class="image_slide">
              <img
                class="slide_imageArray"
                v-for="i in slide_imageArray"
                :key="i"
                :src="i"
                alt=""
                style="width: 600px"
              />
            </div>
          </div>
        </div>
        <button class="right_button" @click="right_button_click()">
          <img class="right_button_img" src="../../public/right.png" alt="" />
        </button>
      </div>
      <!-- <div class="image_slide">
            <button class="left_button" @click="left_button_click2()">
              <img class="left_button_img" src="../../public/left.png" alt="" />
            </button>
            <img :src="image[1]" alt="" style="width: 100%" />
            <button class="right_button" @click="right_button_click2()">
              <img
                class="right_button_img"
                src="../../public/right.png"
                alt=""
              />
            </button>
          </div> -->

      <!-- <div class="image_slide">
            <button class="left_button" @click="left_button_click3()">
              <img class="left_button_img" src="../../public/left.png" alt="" />
            </button>
            <img :src="image[0]" alt="" style="width: 100%" />
            <button class="right_button" @click="right_button_click3()">
              <img
                class="right_button_img"
                src="../../public/right.png"
                alt=""
              />
            </button>
          </div> -->
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
      slide_imageArray: [
        'https://i.pinimg.com/564x/d9/c5/2c/d9c52ca87991a593a29b2b78d87d57a2.jpg',
        'https://i.pinimg.com/564x/09/62/5f/09625f00408ecdfb00a8f633f7fe8a8f.jpg',
        'https://i.pinimg.com/564x/d9/c5/2c/d9c52ca87991a593a29b2b78d87d57a2.jpg'
      ],
      select: 'AI_recommand',
      slide_imageIndex: 0,
      plugin: null,
      options: {
        autoplay: false,
        items: 1,
        startPosition: 2,
        autoplayTimeout: 1000
      }
    }
  },

  mounted() {
    setInterval(this.slide_changeImage, 2000)
  },

  methods: {
    button_click_slide1: function () {
      document.querySelector('.button1').addEventListener('click', function () {
        document.querySelector('.container').style.transform =
          'translate(600px)'
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
          'translate(-600px)'
      })
    },

    left_button_click1: function () {
      document.querySelector('.container').style.transform = 'translate(-600px)'
    },
    left_button_click2: function () {
      document.querySelector('.container').style.transform = 'translate(600px)'
    },
    left_button_click3: function () {
      document.querySelector('.container').style.transform = 'translate(0px)'
    },

    right_button_click1: function () {
      document.querySelector('.container').style.transform = 'translate(0px)'
    },
    right_button_click2: function () {
      document.querySelector('.container').style.transform = 'translate(-600px)'
    },
    right_button_click3: function () {
      document.querySelector('.container').style.transform = 'translate(600px)'
    },
    left_button_click: function () {
      const container = document.querySelector('.container')
      // const imageArray = document.querySelector('.slide_imageArray')
      if (this.slide_imageArray[0]) {
        container.style.transform = 'translate(-600px)'
      } else if (this.slide_imageArray[1]) {
        container.style.transform = 'translate(600px)'
      } else if (this.slide_imageArray[2]) {
        container.style.transform = 'translate(0px)'
      }
    },

    right_button_click: function () {
      const container = document.querySelector('.container')
      const imageArray = document.querySelector('.slide_imageArray')
      if (this.slide_imageArray[0]) {
        imageArray.getAttribute =
          ('src',
          'https://i.pinimg.com/564x/09/62/5f/09625f00408ecdfb00a8f633f7fe8a8f.jpg')
      } else if (this.slide_imageArray[1]) {
        container.style.transform = 'translate(-600px)'
      } else if (this.slide_imageArray[2]) {
        container.style.transform = 'translate(600px)'
      }
    },

    slide_changeImage: function () {
      if (this.slide_imageArray[3] >= this.slide_imageArray.length) {
        this.slide_imageIndex = 0
      }
      // const myImage = document.querySelector('.slide_imageArray')
      // myImage.setAttribute('src', this.slide_imageArray[this.slide_imageIndex])
      // this.slide_imageIndex++
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

/*carousel*/
.test-wrap {
  border: 1px solid #000;
  height: auto;
}

.carousel-wrap {
  width: 100%;
  margin: 0 auto;
}

.AI_slider_container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

.select_container {
  margin-right: 100px;
}

/*라디오버튼 숨김*/
input {
  display: none;
}

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
}

label:hover {
  border: 1px solid black;
  box-shadow: 5px 3px 3px gray;
  color: #7c7c7c;
  cursor: pointer;
}

#tab1:checked ~ .label2 {
  border-bottom: 1px solid #000000;
  box-shadow: 0px 2px 0px rgb(168, 168, 168);
}
#tab1:checked ~ .label1 {
  color: #555;
  border-top: 3px solid #004a79;
  border-right: 2px solid #000000;
  box-shadow: 0px 3px 5px 2px gray;
}

#tab2:checked ~ .label1 {
  border-bottom: 1px solid #000000;
  box-shadow: 0px 2px 0px rgb(168, 168, 168);
}
#tab2:checked ~ .label2 {
  color: #555;
  border-top: 3px solid #004a79;
  border-left: 2px solid #000000;
  box-shadow: 5px 2px 3px gray;
}

/*AI 검색*/

/*이미지 슬라이더*/

.slide_imageArray {
  transition: 0.3s linear;
}

button {
  background-color: transparent;
  border: none;
}

.left_button_img {
  width: 30px;
}

.right_button_img {
  width: 30px;
}

.image_side_button_container {
  display: flex;
  position: relative;
  align-items: center;
  bottom: -15px;
}

.image_bottom_button_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.out_container {
  overflow: hidden;
  width: 600px;
  display: flex;
  justify-content: center;
  margin: 10px;
  border-radius: 20px;
  box-shadow: 0px 8px 5px 0px gray;
}
.container {
  width: 1800px;
  display: flex;
  justify-content: center;
  transition: linear 0.3s;
}

.image_slide {
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
}
.slide_button_box {
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
