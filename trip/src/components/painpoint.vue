<template>
  <div class="painpoint_container">
    <div class="img1">
      <img src="../../public/painpoint1.png" alt="" />
      <h1>매일 짜는 휴가 계획</h1>
    </div>
    <div class="img2">
      <h1>이젠 어딜 가야할 지 모르겠다...</h1>
      <img src="../../public/painpoint2.png" alt="" />
    </div>
    <div class="img3">
      <img src="../../public/painpoint3.png" alt="" />
      <h1>노답이야아아아!!!</h1>
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
  methods: {},
};
</script>

<style scoped>
@font-face {
  font-family: "jua";
  src: url("../../public/font/BMJUA_ttf.ttf");
}

@font-face {
  font-family: "dohyeon";
  src: url("../../public/font/BMDOHYEON_ttf.ttf");
}

.painpoint_container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
}

img {
  width: 400px;
}

.img1,
.img2,
.img3 {
  width: 100%;
}

.img1 {
  display: flex;
  justify-content: left;
  margin-left: 700px;
}

.img2 {
  display: flex;
  justify-content: right;
  margin-right: 700px;
}

.img3 {
  display: flex;
  justify-content: left;
  margin-left: 700px;
}

h1 {
  margin-top: 180px;
  margin-left: 30px;
  color: black;
  font-family: "dohyeon";
}
</style>
