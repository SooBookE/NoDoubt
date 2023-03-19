<template>
  <!-- eslint-disable -->
  <div class="categorie_container">
    <div
      @click="$router.push('/')"
      style="margin-bottom: 15px; cursor: pointer"
    >
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

      <div class="login_container" v-if="cookie">
        <button
          id="login_button"
          class="login_button"
          @click="$router.push('/login')"
        >
          login
        </button>

        <div>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
        <button
          id="join_button"
          class="join_button"
          @click="$router.push('/join')"
        >
          join
        </button>
        <button @click="retrain()">AI 재학습하기</button>
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
import chating from './profile.vue'
import * as tf from '@tensorflow/tfjs'
import arr from '../../public/dataMerge'
import { async } from 'rxjs'

export default {
  name: 'app',
  data() {
    return {
      customer_nickname: '',
      nickname_false: false,
      chating_screen: false,
      cookie: true
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
    },
    retrain() {
      if (
        window.localStorage['tensorflowjs_models/my-model/model_topology'] ??
        0
      ) {
        if (confirm('재학습을 진행할까요?')) {
          ;(async () => {
            axios.post('/info_get').then((res) => {
              let infoArr = res.data
              if (infoArr.length == 0) {
                alert('저장된 데이터가 없어 재학습할 필요가 없습니다.')
                return
              }
              infoArr.map((v) => {
                const data = {}
                data.gen = v.gender
                data.age = v.age
                data.exper = v.hobby
                data.target = v.hob
                arr.data.push(data)
              })
              const HOBBY_CLASSES = [
                '고궁·문화유산',
                '관광특구',
                '공원',
                '발달상권',
                '인구밀집지역'
              ]
              const HOBBY_NUM_CLASSES = HOBBY_CLASSES.length
              const HOBBY_DATA = arr.data

              // 텐서 변환 함수 작성.
              function convertToTensors(data, targets, testSplit) {
                const numExamples = data.length
                if (numExamples !== targets.length) {
                  throw new Error('데이터와 타깃의 길이가 다릅니다.')
                }

                // indices로 데이터와 타겟 셔플.
                const indices = []
                for (let i = 0; i < numExamples; i++) {
                  indices.push(i)
                }
                tf.util.shuffle(indices)

                const shuffledData = []
                const shuffledTargets = []
                for (let i = 0; i < numExamples; i++) {
                  shuffledData.push(data[indices[i]])
                  shuffledTargets.push(targets[indices[i]])
                }

                // 테스트스플릿을 기준으로 데이터를 훈련 세트/테스트 세트로 분리.
                const numTestExamples = Math.round(numExamples * testSplit)
                const numTrainExamples = numExamples - numTestExamples
                const xDims = shuffledData[0].length

                // 특성 데이터 2D 텐서로 변환.
                const xs = tf.tensor2d(shuffledData)
                // 레이블 원핫 인코딩 이용 텐서로 변환.
                const ys = tf.oneHot(
                  tf.tensor1d(shuffledTargets).toInt(),
                  HOBBY_NUM_CLASSES
                )

                // slice로 훈련/테스트 세트 분리.
                const xTrain = xs.slice([0, 0], [numTrainExamples, xDims])
                const xTest = xs.slice(
                  [numTrainExamples, 0],
                  [numTestExamples, xDims]
                )
                const yTrain = ys.slice(
                  [0, 0],
                  [numTrainExamples, HOBBY_NUM_CLASSES]
                )
                const yTest = ys.slice(
                  [numTrainExamples, 0],
                  [numTestExamples, HOBBY_NUM_CLASSES]
                )

                return [xTrain, yTrain, xTest, yTest]
              }

              // 구동 함수 작성.
              function getHobbyData(testSplit) {
                return tf.tidy(() => {
                  const dataByClass = []
                  const targetsByClass = []

                  for (const example of HOBBY_DATA) {
                    const target = example.target

                    delete example.target

                    const data = example
                    const arr = []
                    arr.push(data.gen)
                    arr.push(data.age)
                    arr.push(data.exper)
                    dataByClass.push(arr)
                    targetsByClass.push(target)
                  }
                  const [xTrain, yTrain, xTest, yTest] = convertToTensors(
                    dataByClass,
                    targetsByClass,
                    testSplit
                  )

                  return [xTrain, yTrain, xTest, yTest]
                })
              }

              ;(async function () {
                const [xTrain, yTrain, xTest, yTest] = await getHobbyData(0.15)

                const input = tf.input({
                  shape: [3]
                })
                const A = tf.layers
                  .dense({
                    units: 30,
                    activation: 'softmax'
                  })
                  .apply(input)
                const B = tf.layers
                  .dense({
                    units: 5,
                    activation: 'softmax'
                  })
                  .apply(A)

                const model = tf.model({ inputs: input, outputs: B })
                /* 1. validationData 2. 데이터 정규화로 최종 실험 해보고 안 되면 80~84%로 만족! */

                model.compile({
                  optimizer: 'adam',
                  loss: 'categoricalCrossentropy',
                  metrics: ['accuracy']
                })

                const fitParam = {
                  epochs: 200,
                  batchSize: 32,
                  callbacks: {
                    onEpochEnd: function (epoch, logs) {
                      console.log(
                        'epoch : ',
                        epoch,
                        logs,
                        'RMSE => ',
                        Math.sqrt(logs.loss)
                      )
                    }
                  },
                  validationData: [xTest, yTest]
                }

                let pred_array = []
                const pred_arr = []
                model.fit(xTrain, yTrain, fitParam).then((_) => {
                  model
                    .predict(xTest)
                    .array()
                    .then((array) => (pred_array = [...array]))
                    .then((_) => {
                      pred_array.map((v) => {
                        v[v.indexOf(Math.max(...v))] = 1
                        for (const val of v) {
                          if (val != 1) {
                            v[v.indexOf(val)] = 0
                          }
                        }
                        pred_arr.push(v)
                      })
                    })
                    .then((_) => {
                      let real_arr = []
                      const total_num = pred_arr.length
                      let coinci_num = 0
                      yTest
                        .array()
                        .then((array) => (real_arr = [...array]))
                        .then((_) => {
                          pred_arr.forEach((v, i) => {
                            if (
                              JSON.stringify(v) == JSON.stringify(real_arr[i])
                            ) {
                              coinci_num++
                            }
                          })
                          const accur_num =
                            Number((coinci_num / total_num).toFixed(2)) * 100
                          const predict_per = accur_num + ' %'
                          console.log(predict_per)
                          if (accur_num >= 10) {
                            ;(async () => {
                              await model.save('localstorage://my-model')
                              const topo = await window.localStorage[
                                'tensorflowjs_models/my-model/model_topology'
                              ]
                              const weightD = await window.localStorage[
                                'tensorflowjs_models/my-model/weight_data'
                              ]
                              const weightS = await window.localStorage[
                                'tensorflowjs_models/my-model/weight_specs'
                              ]
                              const info = await window.localStorage[
                                'tensorflowjs_models/my-model/info'
                              ]
                              const meta = await window.localStorage[
                                'tensorflowjs_models/my-model/model_metadata'
                              ]
                              axios.post('/dbu', {
                                topo,
                                weightD,
                                weightS,
                                info,
                                meta
                              })
                              console.log('모델 저장 완료.')
                            })()
                          }
                        })
                    })
                })
              })()
            })
          })()
        }
      } else {
        alert('저장된 학습이 없어 재학습할 수 없습니다.')
      }
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

/*로그인*/
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
  font-family: 'dohyeon';
  font-weight: 100;
  font-size: x-large;
}
.login_button:hover,
.join_button:hover {
  transform: translateY(-5px) scale(1.2);
  transition: linear 0.2s;
  color: white;
}
/*로그인 박스*/
.login_container {
  display: flex;
  justify-content: right;
}
</style>
