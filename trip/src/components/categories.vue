<template>
  <!-- eslint-disable -->

  <div class="categorie_container">
    <div class="categorie_innerbox">
      <button class="categorie_button" @click="$router.push('/')">홈</button>
      <div style="color: #23565a">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      </div>
      <button class="categorie_button">회사 소개</button>
      <div style="color: #23565">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      </div>
      <button class="categorie_button" @click="$router.push('/notice')">
        공지사항
      </button>
      <div style="color: #23565">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      </div>
      <button
        class="categorie_button"
        @click="$router.push('/customer_information')"
      >
        고객센터
      </button>
      <div style="color: #23565">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      </div>
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
import chating from '../components/chating.vue'

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
  background-color: #bbd1c5;
  position: absolute;
  top: 0;
  height: 60px;
  padding: 1rem;
  align-items: center;
  font-family: 'dohyeon';
}

.categorie_innerbox {
  display: flex;
  justify-content: right;
}

.categorie_button {
  border: none;
  background-color: white;
  color: #23565a;
  cursor: pointer;
  font-family: 'dohyeon';
  font-size: x-large;
  background-color: #bbd1c5;
}

.categorie_button:hover {
  color: white;
  background-color: #e8dca8;
  border-radius: 5px;
  transform: translateY(-5px) scale(1.2);
  transition: linear 0.2s;
}
</style>
