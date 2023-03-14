<template>
  <!-- eslint-disable -->
  <!-- 제일 바깥 쪽 컨테이너 -->
  <div class="main_container">
    <!-- 카테고리 -->
    <div id="scroll"></div>
    <categories></categories>
    <main_sub_categoriebar></main_sub_categoriebar>
    <div id="scroll1"></div>
    <keep-alive>
      <mainImage class="mainImage_component"> </mainImage>
    </keep-alive>

    <!-- 검색창&로그인 컨테이너 -->
    <div id="scroll2"></div>
    <search_login></search_login>

    <!-- 서비스 소개 -->
    <div id="scroll3"></div>
    <painpoint></painpoint>

    <review></review>

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
import chating from '../components/chating.vue'
import sidebar from '../components/sidebar.vue'
import mainImage from '../components/mainImage.vue'
import side_categories from '../components/side_categories.vue'
import review from '../components/review.vue'
import main_sub_categoriebar from '../components/main_sub_categoriebar.vue'

export default {
  name: 'app',
  data() {
    return {
      select: 'side_categories_button',
      chating_screen: false
    }
  },

  methods: {
    handleScroll: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    openchat_screen: function () {
      this.chating_screen = true
    },
    closechat_screen: function () {
      this.chating_screen = false
    }
  },
  components: {
    categories,
    search_login,
    select_slider,
    chating,
    sidebar,
    painpoint,
    mainImage,
    side_categories,
    review,
    main_sub_categoriebar
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
  justify-content: center;
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
