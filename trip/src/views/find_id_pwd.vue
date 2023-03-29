<template>
  <categoires></categoires>
  <div class="AI_slider_container">
    <div class="find_select_container">
      <input
        id="find_id"
        type="radio"
        name="tabs"
        @click="select = 'find_id'"
        checked
      />

      <input
        id="find_pwd"
        type="radio"
        name="tabs"
        @click="select = 'find_pwd'"
      />
      <label for="find_id" class="find_id_label">아이디 찾기</label>
      <label for="find_pwd" class="find_pwd_label">비밀번호 찾기</label>

      <keep-alive>
        <component :is="select"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import find_id from '../components/find_id.vue'
import find_pwd from '../components/find_pwd.vue'
import categoires from '../components/categories.vue'

export default {
  name: 'app',
  data() {
    return {
      select: 'find_id'
    }
  },
  methods: {},
  components: {
    find_id,
    find_pwd,
    categoires
  }
}
</script>

<style scoped>
.AI_slider_container {
  margin-top: 15rem;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.find_select_container {
  position: relative;
  top: 100px;
}

/*라디오버튼 숨김*/
input {
  display: none;
}

label {
  display: inline-flex;
  width: 49%;
  height: 30px;
  align-items: center;
  justify-content: center;
  font-family: 'dohyeon';
  font-weight: 600;
  text-align: center;
  color: black;
}

label:hover {
  border: 1px solid black;
  box-shadow: 5px 3px 3px gray;
  color: #7c7c7c;
  cursor: pointer;
}

#find_id:checked ~ .find_pwd_label {
  border-bottom: 1px solid #000000;
  box-shadow: 0px 2px 0px rgb(168, 168, 168);
  color: #7c7c7c;
  text-shadow: 1px 1px 0.3px #a2a2a2;
}
#find_id:checked ~ .find_id_label {
  font-weight: 100;
  color: #002376;
  border-top: 3px solid #002376;
  border-right: 2px solid #000000;
  box-shadow: 0px 3px 5px 2px gray;
}

#find_pwd:checked ~ .find_id_label {
  border-bottom: 1px solid #000000;
  box-shadow: 0px 2px 0px rgb(168, 168, 168);
  color: #7c7c7c;
  text-shadow: 1px 1px 0.3px #a2a2a2;
}
#find_pwd:checked ~ .find_pwd_label {
  font-weight: 100;
  color: #002376;
  border-top: 3px solid #002376;
  border-left: 2px solid #000000;
  box-shadow: 5px 2px 3px gray;
}
</style>
