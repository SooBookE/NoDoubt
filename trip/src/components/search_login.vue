<!-- eslint-disable -->
<template>
  <div class="top_container">
    <!-- 검색창 -->
    <div class="search_bar_container">
      <div class="search_bar">
        <form action="" class="search_bar_inner">
          <input
            class="search_input_box"
            type="text"
            v-model="search"
            placeholder="검색어를 입력해주세요."
          />
          <button class="submit_button" id="submit_button" type="submit">
            <img src="../../public/search.png" alt="" class="search_img" />
          </button>
        </form>
      </div>
    </div>
    <!-- 로그인 -->
    <div class="login_container">
      <button id="login_button" class="login_button">login</button>
      <div>&nbsp&nbsp|&nbsp&nbsp</div>
      <button id="join_button" class="join_button">join</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    search: "",
    AI_search: "",
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

.top_container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}

/*search_bar container*/
.search_bar_inner {
  display: flex;
}

.search_bar {
  margin: 50px;
  width: 500px;
}

.search_input_box {
  width: 100%;
  height: 70px;
  padding: 0px 10px;
  font-family: "jua";
}

.search_img {
  width: 30px;
  background-color: transparent;
}

.submit_button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

/*login_button*/
.login_container {
  align-items: center;
  margin-left: 50px;
}
.login_button,
.join_button {
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "jua";
  font-size: medium;
}
.login_button:hover {
  transform: translateY(-5px) scale(1.2);
  transition: linear 0.2s;
  color: rgb(124, 213, 240);
}

.join_button:hover {
  transform: translateY(-5px) scale(1.2);
  transition: linear 0.2s;
  color: rgb(124, 213, 240);
}

/*로그인 박스*/
.login_container {
  display: flex;
  justify-content: right;
}
</style>
