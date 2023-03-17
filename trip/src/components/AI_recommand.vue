<template>
  <div class="inputbox_color">
    <div class="inputbox_design">
      <div class="AI_search_container">
        <select
          class="AI_search_select"
          placeholder="성별을 선택해주세요."
          ref="gen"
          @change="gen = $refs.gen.value"
        >
          <option value="none" selected="true">성별</option>
          <option value="0">남성</option>
          <option value="1">여성</option>
        </select>
        <select
          class="AI_search_select"
          placeholder="연령대를 선택해주세요."
          ref="age"
          @change="age = $refs.age.value"
        >
          <option value="none" selected="true">연령대</option>
          <option value="0">20대</option>
          <option value="1">30대</option>
          <option value="2">40대</option>
          <option value="3">50대</option>
          <option value="4">60대 이상</option>
        </select>
        <select
          class="AI_search_select"
          placeholder="선호활동을 선택해주세요."
          ref="hobby"
          @change="hobby = $refs.hobby.value"
        >
          <option value="none" selected="true">선호활동</option>
          <option value="0">문화유산관람</option>
          <option value="1">관광활동</option>
          <option value="2">공원산책</option>
          <option value="3">핫플방문</option>
          <option value="4">번화가쇼핑</option>
        </select>
        <button @click="aiSearch()" class="AI_submit_button">입력</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import * as tf from '@tensorflow/tfjs'
// import { async } from 'rxjs'

export default {
  name: 'app',
  data() {
    return {
      gen: 'none',
      age: 'none',
      hobby: 'none'
    }
  },
  methods: {
    aiSearch() {
      const modelCheck =
        window.localStorage['tensorflowjs_models/my-model/model_topology'] ?? 0
      if (modelCheck) {
        if (this.gen == 'none' || this.age == 'none' || this.hobby == 'none') {
          alert('항목을 모두 선택해주세요.')
        } else {
          let pred_array = []
          let pred_arr = []
          let selectedVal = [
            [Number(this.gen), Number(this.age), Number(this.hobby)]
          ]
          let selectedTensor = tf.tensor2d(selectedVal)
          ;(async () => {
            const model = await tf.loadLayersModel('localstorage://my-model')
            model
              .predict(selectedTensor)
              .array()
              .then((array) => (pred_array = [...array]))
              .then(() => {
                pred_array.map((v) => {
                  v[v.indexOf(Math.max(...v))] = 1
                  for (const val of v) {
                    if (val != 1) {
                      v[v.indexOf(val)] = 0
                    }
                  }
                  pred_arr.push(v)
                })
                console.log(pred_arr)
              })
          })()
        }
      } else {
        alert('기능이 동작하지 않습니다.\n불편을 끼쳐 죄송합니다.')
      }
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

/*AI 검색*/
.inputbox_color {
  background-color: antiquewhite;
}
.inputbox_design {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  color: black;
  border: 2px solid black;
  border-top: none;
  box-shadow: 5px 3px 3px gray;
}

.AI_search_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white 0.3;
}

select {
  font-family: 'jua';
  font-size: larger;
  margin: 10px 0px;
  width: 200px;
  height: 50px;
  text-align: center;
  background-color: transparent;
  border: none;
}

option {
  background-color: transparent;
}

.AI_submit_button {
  width: 150px;
  height: 50px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 10px;
  font-family: 'jua';
  font-size: larger;
  color: rgb(124, 213, 240);
  border-radius: 20px;
}

.AI_submit_button:hover {
  transform: translateY(-5px) scale(1.1);
  background-color: rgb(124, 213, 240);
  border-radius: 10px;
  color: white;
  transition: linear 0.2s;
}
</style>
