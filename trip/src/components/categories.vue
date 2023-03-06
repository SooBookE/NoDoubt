<template>
  <!-- eslint-disable -->

  <div class="categorie_container">
    <div class="categorie_innerbox">
      <button class="categorie_button" @click="scroll()">홈</button>
      <div style="color: white">
        &nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp
      </div>
      <button class="categorie_button" @click="scroll2()">여행지 검색</button>
      <div style="color: white">
        &nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp
      </div>
      <button class="categorie_button" @click="scroll3()">서비스 소개</button>
      <div style="color: white">
        &nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp
      </div>
      <button class="categorie_button">고객센터</button>
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
    },
    scroll_fixed: function () {
      let scrollpos = window.scrollY
      const categorie_container = document.querySelector('.categorie_container')
      const add_categories_class_scroll = (dom) =>
        dom.classList.add('absolute_fixed')
      window.addEventListener('scroll', function () {
        scrollpos = window.scrollY
        if (scrollpos >= categorie_container.offsetHeight + 300)
          add_categories_class_scroll(categorie_container)
      })
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'jua';
  src: url('../../public/font/BMJUA_ttf.ttf');
}

@font-face {
  font-family: 'dohyeon';
  src: url('../../public/font/BMDOHYEON_ttf.ttf');
}

.absolute_fixed {
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  font-family: 'dohyeon';
}

/* categorie */
.categorie_container {
  z-index: 50;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #5bc2e7;
  position: fixed;
  top: 0;
  height: 60px;
  padding: 1rem;
  align-items: center;
  font-family: 'dohyeon';
}

.categorie_innerbox {
  display: flex;
  justify-content: right;
  margin-right: 10%;
}

.categorie_button {
  border: none;
  background-color: white;
  color: white;
  cursor: pointer;
  font-family: 'dohyeon';
  font-size: x-large;
  background-color: #5bc2e7;
}

.categorie_button:hover {
  color: #5bc2e7;
  background-color: white;
  border-radius: 5px;
  transform: translateY(-5px) scale(1.2);
  transition: linear 0.2s;
}
</style>
