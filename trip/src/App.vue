<template>
  <nav style="display: none">
    <router-link to="/" style="display: none">Home</router-link>
    <router-link to="/about" style="display: none">About</router-link>
    <router-link to="/slider" style="display: none">slider</router-link>
    <router-link to="/login" style="display: none">login</router-link>
  </nav>
  <router-view />

  <div class="footer_container">
    <div class="notice_box">
      <div class="notice">공지사항</div>
      <div class="notice_content">{{ notice_message }}</div>
    </div>
    <div class="inner_container">
      <div class="introduce_container" style="text-align: left">
        <div class="introduce_box">Company</div>
        <div class="introduce_box_address">
          주소 : 부산광역시 부산진구 중앙대로 668 (A1프라자6층)
        </div>
        <div class="introduce_box_address">주소</div>
        <div class="introduce_box_address">주소</div>
        <div class="introduce_box_address">주소</div>
      </div>
      <div class="marketing_container" style="text-align: left">
        <div class="marketing_box">Manager</div>
        <div class="marketing_box_manager">김수환</div>
        <div class="marketing_box_manager">김민경</div>
      </div>
      <div class="etc_container" style="text-align: left">
        <div class="etc_box">Coorperation</div>
        <div class="etc_box_coorperation">서울시 실시간 공공데이터</div>
        <div class="etc_box_coorperation">ㅁㅁㅁㅁ</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import router from './router'

export default {
  name: 'app',
  data() {
    return {
      notice_Array: [
        '안녕하세요.',
        '만나서 반갑습니다.',
        '여행자님을 환영합니다.',
        '이곳은 노답 여행 컴퍼니입니다.'
      ],
      notice_index: 0,
      notice_message: '이곳은 노답 여행 컴퍼니입니다.'
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        // console.log(to.path, from.path)
        if (to.path === '/') {
          this.$router.go()
        }
        window.scroll(0, 0)
      }
    }
  },

  mounted() {
    setInterval(this.changeNotice, 5000)
  },

  methods: {
    changeNotice: function () {
      this.notice_message = this.notice_Array[this.notice_index]
      this.notice_index++
      if (this.notice_index == this.notice_Array.length) {
        this.notice_index = 0
      }
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'jua';
  src: url('../public/font/BMJUA_ttf.ttf');
}

@font-face {
  font-family: 'dohyeon';
  src: url('../public/font/BMDOHYEON_ttf.ttf');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.footer_container {
  width: 100%;
  margin-top: 30px;
  padding: 30px;
  background-color: rgb(142, 140, 138);
}

.inner_container {
  display: flex;
  justify-content: space-evenly;
  margin: 50px 0px 30px 0px;
}

.notice_box {
  display: flex;
  font-family: 'jua';
  font-weight: 400;
  font-size: large;
  margin: 0px 0px 0px 100px;
  padding-top: 50px;
}

.notice_content {
  font-family: 'jua';
  font-size: large;
  margin: 0px 50px 0px 50px;
  cursor: pointer;
}

.notice_content:hover {
  border-bottom: 2px solid rgb(152, 121, 86);
}
.introduce_box,
.marketing_box,
.etc_box {
  margin-bottom: 20px;
  font-family: 'jua';
  font-size: xx-large;
  font-weight: 400;
}

.introduce_box_address {
  margin-bottom: 15px;
  font-family: 'jua';
  font-weight: 100;
}

.marketing_box_manager {
  margin-bottom: 15px;
  font-family: 'jua';
  font-weight: 100;
}

.etc_box_coorperation {
  margin-bottom: 15px;
  font-family: 'jua';
  font-weight: 100;
}

.introduce_box_address:hover,
.marketing_box_manager:hover,
.etc_box_coorperation:hover {
  border-bottom: 2px solid rgb(152, 121, 86);
}
</style>
