<template>
  <!-- eslint-disable -->
  <div class="moving_categoriebar_container">
    <div class="moving_categoriebar_innerbox">
      <span class="moving_categoriebar_span">
        <button class="moving_categoriebar_button" @click="scroll()">홈</button>
      </span>
      <span class="moving_categoriebar_span">
        <button class="moving_categoriebar_button" @click="scroll2()">
          AI 검색
        </button>
      </span>
      <span class="moving_categoriebar_span">
        <button class="moving_categoriebar_button" @click="scroll3()">
          서비스 소개
        </button>
      </span>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'app',
  data() {
    return {}
  },

  methods: {
    scroll: function () {
      const scroll1 = document.getElementById('scroll1')
      scroll1.scrollIntoView({ behavior: 'smooth' })
    },
    scroll2: function () {
      const scroll2 = document.getElementById('scroll2')
      scroll2.scrollIntoView({ behavior: 'smooth' })
    },
    scroll3: function () {
      const scroll3 = document.getElementById('scroll3')
      scroll3.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scroped>
@font-face {
  font-family: 'jua';
  src: url('../../public/font/BMJUA_ttf.ttf');
}

@font-face {
  font-family: 'dohyeon';
  src: url('../../public/font/BMDOHYEON_ttf.ttf');
}

/* categorie */
.moving_categoriebar_container {
  /* opacity: 0; */
  z-index: 30;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background-color: white;
  top: 0;
  height: 45px;
  padding: 10px 0px;
  align-items: center;
  font-family: 'dohyeon';
}

.absolute_fixed {
  opacity: 1;
  top: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  font-family: 'dohyeon';
}

.moving_categoriebar_innerbox {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}

.moving_categoriebar_button {
  border: none;
  background-color: white;
  color: #5bc2e7;
  cursor: pointer;
  font-family: 'dohyeon';
  font-size: medium;
  background-color: transparent;
}

.moving_categoriebar_button:hover {
  color: white;
  background-color: #5bc2e7;
  border-radius: 5px;
}
</style>
