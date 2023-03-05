<template>
  <!-- eslint-disable -->
  <!-- 제일 바깥 쪽 컨테이너 -->
  <div class="main_container">
    <!-- 카테고리 -->
    <categories></categories>
    <div id="scroll1"></div>
    <keep-alive>
      <mainImage class="mainImage_component"> </mainImage>
    </keep-alive>

    <!-- 검색창&로그인 컨테이너 -->
    <search_login></search_login>

    <!-- 서비스 소개 -->
    <painpoint></painpoint>

    <!-- 사이드 바 -->
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
import side_categories from '../components/side_categories.vue'

export default {
  name: 'app',
  data() {
    return {
      select: 'side_categories_button'
    }
  },

  methods: {},
  components: {
    categories,
    search_login,
    select_slider,
    sidebar,
    painpoint,
    mainImage,
    side_categories
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

/* video {
  width: 100%;
  height: auto;
} */
</style>
