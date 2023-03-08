<template>
  <!-- eslint-disable -->
  <!-- 제일 바깥 쪽 컨테이너 -->
  <div class="main_container">
    <!-- 카테고리 -->
    <FAQ_maincategories></FAQ_maincategories>
    <FAQ_sub_categoriebar></FAQ_sub_categoriebar>
    <div id="scroll1"></div>
    <FAQ></FAQ>
  </div>
</template>

<script>
/* eslint-disable */
import FAQ_maincategories from '../components/FAQ_maincategories.vue'
import FAQ from '../components/FAQ.vue'
import FAQ_sub_categoriebar from '../components/main_sub_categoriebar.vue'

export default {
  name: 'app',
  data() {
    return {
      select: 'side_categories_button'
    }
  },

  methods: {},
  components: {
    FAQ_maincategories,
    FAQ,
    FAQ_sub_categoriebar
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
</style>
