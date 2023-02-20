<template>
  <!-- eslint-disable -->
  <div class="categorie_container">
    <div class="categorie_innerbox">
      <button class="categorie_button" @click="scroll()">홈</button>
      <div style="color: white">&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp</div>
      <button class="categorie_button" @click="scroll2()">여행지 추천</button>
      <div style="color: white">&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp</div>
      <button class="categorie_button">서비스 소개</button>
      <div style="color: white">&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp</div>
      <button class="categorie_button">고객센터</button>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    scroll: function () {
      const scroll1 = document.getElementById("scroll1");
      scroll1.scrollIntoView({ behavior: "smooth" });
    },
    scroll2: function () {
      const scroll2 = document.getElementById("scroll2");
      scroll2.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
@font-face {
  font-family: "jua";
  src: url("../../public/font/BMJUA_ttf.ttf");
}

@font-face {
  font-family: "dohyeon";
  src: url("../../public/font/BMDOHYEON_ttf.ttf");
}

/* categorie */
.categorie_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(91, 172, 102);
  height: 50px;
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
  font-family: "dohyeon";
  font-size: larger;
  background-color: rgb(91, 172, 102);
}

.categorie_button:hover {
  color: rgb(91, 172, 102);
  background-color: white;
  border-radius: 5px;
  transform: scale(1.2);
  transition: linear 0.2s;
}
</style>
