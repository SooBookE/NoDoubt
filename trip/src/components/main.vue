<template>
  <img
    @change="changeImage"
    id="mainImage"
    src="../../public/lotteworld.jpg"
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
        '../../public/lotteworld.jpg',
        '../../public/palace.jpg',
        '../../public/ight.jpg',
        '../../public/lotte_tower.jpg'
      ],
      imageIndex: 0
    }
  },

  mounted() {
    setInterval(this.changeImage(), 3000)
  },

  methods: {
    changeImage: function () {
      const myImage = document.getElementById('mainImage')
      myImage.setAttribute('src', this.imageArray[imageIndex])
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
  height: auto;
}
</style>
