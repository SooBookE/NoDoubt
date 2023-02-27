<template>
  <!-- 제일 바깥 쪽 컨테이너 -->
  <!-- eslint-disable -->
  <div class="main_container">
    <!-- 홈페이지 메인 -->
    <!-- <div class="home_main"> -->
    <!-- 카테고리 -->
    <categories></categories>
    <!-- <video src="./result.mp4" autoplay muted loop></video> -->
    <mainImage class="mainImage_component"> </mainImage>
    <select_slider></select_slider>
    <!-- </div> -->
    <!-- 검색창&로그인 컨테이너 -->
    <div id="scroll1"></div>
    <search_login></search_login>
    <painpoint>></painpoint>
    <!-- 슬라이더 -->
    <div id="scroll2"></div>

    <sidebar></sidebar>
  </div>
</template>

<script>
/* eslint-disable */
import categories from '../components/categories.vue'
import painpoint from '../components/painpoint.vue'
import search_login from '../components/search_login.vue'
import select_slider from '../components/select_slider.vue'
import sidebar from '../components/sidebar.vue'
import mainImage from '../components/mainImage.vue'

export default {
  name: 'app',
  data() {
    return {}
  },

  methods: {},
  components: {
    search_login,
    select_slider,
    sidebar,
    painpoint,
    categories,
    mainImage
  }
}
</script>

<style>
/*font*/
@font-face {
  font-family: 'jua';
  src: url('../../public/font/BMJUA_ttf.ttf');
}

@font-face {
  font-family: 'dohyeon';
  src: url('../../public/font/BMDOHYEON_ttf.ttf');
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

/*상단 메인*/
/* .home_main {
  width: 100%;
  background-color: aliceblue;
} */

#scroll1 {
  height: 200px;
}

/* video {
  width: 100%;
  height: auto;
} */
</style>
