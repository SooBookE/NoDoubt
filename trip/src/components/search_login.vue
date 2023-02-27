<template>
  <div class="top_container">
    <!-- 검색창 -->
    <div class="search_bar_container">
      <h2 class="h2_1 animate-text">가고 싶은 여행지를 검색해보세요!</h2>
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
      <button
        id="login_button"
        class="login_button"
        @click="$router.push('/login')"
      >
        login
      </button>

      <div>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
      <button id="join_button" class="join_button">join</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'app',
  data() {
    return {
      search: '',
      AI_search: '',
      sel: false
    }
  },
  mounted() {
    this.scroll_move1()
  },
  methods: {
    scroll_move1: function () {
      let scrollpos = window.scrollY
      const h2_1 = document.querySelector('.h2_1')
      const add_class_on_scroll = (dom) => dom.classList.add('come-in')
      window.addEventListener('scroll', function () {
        scrollpos = window.scrollY
        if (scrollpos >= h2_1.offsetHeight - 400) add_class_on_scroll(h2_1)
      })
    }
  },
  components: {}
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

.top_container {
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  height: 200px;
}

.h2_1 {
  margin-top: 30px;
  font-family: 'dohyeon';
}

/*search_bar container*/
.search_bar_inner {
  display: flex;
}

.search_bar {
  margin: 50px;
  width: 700px;
}

.search_input_box {
  width: 100%;
  height: 70px;
  padding: 0px 10px;
  font-family: 'jua';
  font-size: large;
}

.search_img {
  width: 50px;
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
  font-family: 'jua';
  font-size: xx-large;
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

/*scroll_move CSS*/
.animate-text {
  opacity: 0;
  transform: translateY(70px);
  -webkit-transition: all 3.7s cubic-bezier(0.23, 1, 0.03, 1);
  -webkit-transition: all 3.7s cubic-bezier(0.23, 1, 0.03, 1.005);
  -moz-transition: all 3.7s cubic-bezier(0.23, 1, 0.03, 1.005);
  -o-transition: all 3.7s cubic-bezier(0.23, 1, 0.03, 1.005);
  transition: all 3.7s cubic-bezier(0.23, 1, 0.03, 1.005);
}

.come-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
