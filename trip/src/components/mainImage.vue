<template>
  <img
    id="mainImage"
    src="https://img.freepik.com/premium-vector/seoul-korea-city-skyline-with-color-buildings-isolated-on-white-background-vector-illustration-business-travel-and-tourism-concept-with-modern-architecture-seoul-cityscape-with-landmarks_119523-4352.jpg?w=1380"
    alt="#"
  />
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      imageArray: [
        'https://img.freepik.com/premium-vector/seoul-korea-city-skyline-with-color-buildings-isolated-on-white-background-vector-illustration-business-travel-and-tourism-concept-with-modern-architecture-seoul-cityscape-with-landmarks_119523-4352.jpg?w=1380',
        'https://img.hani.co.kr/imgdb/resize/2018/0720/153197765846_20180720.JPG',
        'https://img.freepik.com/free-photo/gyeongbokgung-palace_74190-3174.jpg?w=1380&t=st=1677198434~exp=1677199034~hmac=0879faab8f04a03d0081c8f078d33153d9be7aada5301c69bf9021e38b0d0cc7',
        'https://cdn.pixabay.com/photo/2022/10/15/16/44/night-view-7523474_960_720.jpg',
        'https://cdn.pixabay.com/photo/2016/11/02/14/32/lotte-world-tower-1791802_960_720.jpg'
      ],
      imageIndex: 0
    }
  },

  mounted() {
    setInterval(this.changeImage, 5000)
  },

  methods: {
    changeImage: function () {
      const myImage = document.querySelector('#mainImage')
      myImage.setAttribute('src', this.imageArray[this.imageIndex])
      this.imageIndex++
      if (this.imageIndex >= this.imageArray.length) {
        this.imageIndex = 0
      }
    }
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
</style>
