<template>
  <!-- eslint-disable -->
  <div class="categorie_container">
    <div style="margin-bottom: 15px">
      <img class="logo" src="../../public/logo.png" alt="" />
    </div>
    <div class="categorie_innerbox">
      <button class="categorie_button" @click="$router.push('/')">홈</button>

      <button
        class="categorie_button"
        @click="$router.push('/company_introduce')"
      >
        회사 소개
      </button>

      <button class="categorie_button" @click="$router.push('/notice')">
        공지사항
      </button>

      <button
        class="categorie_button"
        @click="$router.push('/customer_information')"
      >
        고객센터
      </button>

      <div class="mypage_container" v-if="nickname_false">
        <div class="customer_nickname" @click="mypage_screen()">
          <button class="categorie_button">{{ customer_nickname }}</button>
          님,
        </div>
        <div class="mypage_text">오늘은 어디로 떠나시나요?</div>
      </div>
    </div>
    <chating @close="closemypage_screen" v-if="chating_screen"> </chating>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios'
import chating from './profile.vue'

export default {
  name: 'app',
  data() {
    return {
      customer_nickname: '',
      nickname_false: false,
      chating_screen: false
    }
  },

  mounted() {
    this.nickname()
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
    },
    nickname: function () {
      axios.get('/login_confirm_cookie').then((res) => {
        console.log(res.data)
        this.customer_nickname = res.data
        if (res.data) {
          this.nickname_false = true
        }
      })
    },
    mypage_screen: function () {
      this.chating_screen = true
    },
    closemypage_screen: function () {
      this.chating_screen = false
    }
  },
  components: {
    chating
  }
}
</script>

<style scoped>
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
  position: absolute;
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
  /* background-color: #bbd1c5; */
  background-image: linear-gradient(to right, #f2ab39, #ffd954);
  position: absolute;
  top: 0;
  padding: 1rem;
  align-items: center;
  font-family: 'dohyeon';
}

.logo {
  width: 200px;
}
.categorie_innerbox {
  display: flex;
  justify-content: right;
  height: 50px;
}

.categorie_button {
  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
  font-family: 'dohyeon';
  font-size: large;
  margin: 8px 30px 0px 30px;
  padding-bottom: 8px;
}

.categorie_button:hover {
  color: white;
  transition: linear 0.2s;
  border-bottom: 3px solid white;
}
</style>
