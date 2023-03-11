<template>
  <!-- eslint-disable -->
  <div class="sidebar_container">
    <div class="chat_container">
      <label class="chat_label" for="">
        <img class="chat_img" src="../../public/chat.png" alt="" />
        <button class="chat_help">채팅상담</button>
      </label>
    </div>
    <label for="">
      <button id="target" @click="handleScroll()">
        <img id="top_arrow" src="../../public/arrow.png" alt="" />
      </button>
    </label>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    handleScroll: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
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

.sidebar_container {
  position: fixed;
  right: 50%;
  top: 80%;
  margin-right: -48%;
  text-align: center;
  width: 10%;
  background-color: transparent;
}

.chat_help {
  background-color: antiquewhite;
  cursor: pointer;
}

#target {
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.chat_container {
  display: flex;
}

.chat_img {
  width: 40%;
}

.chat_label {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#top_arrow {
  width: 40%;
}
</style>
