<template>
 <v-carousel>
  <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition">
  </v-carousel-item>
  </v-carousel>
</template>

<script>
/*eslint-disable*/
export default{
  name:'app',
  data(){
    return{
      items: [
        {
          src:'https://c.pxhere.com/photos/6d/df/couple_freedom_friends_friendship_fun_girl_love_man-1559779.jpg!d'
        },
        {
          src:'https://trvis.r10s.com/d/strg/ctrl/26/e78e20f59fb5097c9dccaa9b4e0945268091e26a.47.1.26.2.jpg?resize=750:*'
        },
        {
          src:'https://img.insight.co.kr/static/2016/07/26/700/F40AX97ZE4UQZ2FL3V7T.jpg'
        },
        {
          src:'C:\Users\ds\Downloads\—Pngtree—city travel globalization_2285765.png'
        }
      ]
    }
  }
  ,

  methods: {}
  }
</script>

<style>
</style>