<template>
  <!-- eslint-disable -->
  <button id="target" @click="handleScroll()">
    <img id="top_arrow" src="../../public/arrow.png" alt="" />
  </button>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    handleScroll: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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

#target {
  position: fixed;
  right: 50%;
  top: 80%;
  margin-right: -45%;
  text-align: center;
  width: 10%;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

#top_arrow {
  width: 50%;
  border: 5px solid black;
  border-radius: 50px;
}
</style>
