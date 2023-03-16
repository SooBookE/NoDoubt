<template>
  <div
    class="mainimage_container"
    style="
      margin-top: 185px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <keep-alive>
      <img
        id="mainImage"
        src="https://img.freepik.com/free-vector/watercolor-colorful-floral-background_23-2149146553.jpg?w=1800&t=st=1678161688~exp=1678162288~hmac=cc94a02bb9ac8d3e0bc3fc339a007c4c6f65aee53ed8cb96d00f7d589d4b4684"
        alt="#"
      />
    </keep-alive>
    <div class="select_slider_container">
      <select_slider> </select_slider>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import router from '@/router'
import select_slider from '../components/select_slider.vue'

export default {
  name: 'app',
  data() {
    return {
      imageArray: [
        'https://cdn.pixabay.com/photo/2015/08/19/11/46/tree-895935_1280.jpg',
        'https://img.freepik.com/free-vector/watercolor-colorful-floral-background_23-2149146553.jpg?w=1800&t=st=1678161688~exp=1678162288~hmac=cc94a02bb9ac8d3e0bc3fc339a007c4c6f65aee53ed8cb96d00f7d589d4b4684',
        'https://img.freepik.com/free-photo/gyeongbokgung-palace_74190-3174.jpg?w=1380&t=st=1677198434~exp=1677199034~hmac=0879faab8f04a03d0081c8f078d33153d9be7aada5301c69bf9021e38b0d0cc7',
        'https://cdn.pixabay.com/photo/2022/10/15/16/44/night-view-7523474_960_720.jpg',
        'https://cdn.pixabay.com/photo/2016/11/02/14/32/lotte-world-tower-1791802_960_720.jpg'
      ],
      imageIndex: 0
    }
  },

  mounted() {
    setInterval(this.changeImage, 3000)
  },

  beforeUnmount() {
    clearInterval(this.changeImage())
  },

  methods: {
    changeImage: function () {
      const myImage = document.querySelector('#mainImage')
      myImage.setAttribute('src', this.imageArray[this.imageIndex])
      this.imageIndex++
      if (this.imageIndex == this.imageArray.length) {
        this.imageIndex = 0
      }
    }
  },
  components: {
    select_slider
  }
}
</script>

<style>
#mainImage {
  width: 100%;
  height: 960px;
  opacity: 0.4;
  transition: 1s linear;
}

.select_slider_container {
  position: absolute;
}
</style>
