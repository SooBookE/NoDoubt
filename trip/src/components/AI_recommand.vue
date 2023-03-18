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
          <option value="none">성별</option>
          <option value="0">남성</option>
          <option value="1">여성</option>
        </select>
        <select
          class="AI_search_select"
          placeholder="연령대를 선택해주세요."
          ref="age"
          @change="age = $refs.age.value"
        >
          <option value="none">연령대</option>
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
          <option value="none">당신의 성향은?</option>
          <option value="0">내향적이에요.</option>
          <option value="1">외향적이에요.</option>
          <option value="2">반반이에요.</option>
        </select>
        <button @click="aiSearch()" class="AI_submit_button">입력</button>
        <div class="modal">
          <div class="modal_body">
            <div>
              여행자님은 <strong>{{ recommend }}</strong> 관련 여행지가 어울리실
              것 같아요!
              <div>
                노답 컴퍼니는
                <h3>"{{ placeName }}"</h3>
                을(/를) 추천드릴게요!<br />해당 추천지를 지금 바로 확인해보세요!
              </div>
              <a :href="placeLink" target="_blank"
                >{{ placeName }} 상황 실시간 확인 하러 가기</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
document.querySelector('body').addEventListener('click', () => {
  const modal = document.querySelector('.modal')
  modal.classList.remove('show')
})
// import axios from 'axios'
import * as tf from '@tensorflow/tfjs'
// import { async } from 'rxjs'

export default {
  name: 'app',
  data() {
    return {
      gen: 'none',
      age: 'none',
      hobby: 'none',
      placeName: '',
      placeLink: '',
      result: [
        '고궁/문화유산',
        '관광특구',
        '공원',
        '발달상권 ',
        '인구밀집지역 '
      ],
      place: [
        [
          {
            name: '경복궁·서촌마을',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B2%BD%EB%B3%B5%EA%B6%81%C2%B7%EC%84%9C%EC%B4%8C%EB%A7%88%EC%9D%84&y=126.9730282&x=%EA%B2%BD%EB%B3%B5%EA%B6%81%C2%B7%EC%84%9C%EC%B4%8C%EB%A7%88%EC%9D%84'
          },
          {
            name: '광화문·덕수궁',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B4%91%ED%99%94%EB%AC%B8%C2%B7%EB%8D%95%EC%88%98%EA%B6%81&y=126.9774273&x=%EA%B4%91%ED%99%94%EB%AC%B8%C2%B7%EB%8D%95%EC%88%98%EA%B6%81'
          },
          {
            name: '창덕궁·종묘',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%B0%BD%EB%8D%95%EA%B6%81%C2%B7%EC%A2%85%EB%AC%98&y=126.9934559&x=%EC%B0%BD%EB%8D%95%EA%B6%81%C2%B7%EC%A2%85%EB%AC%98'
          }
        ],
        [
          {
            name: '강남 MICE 관광특구',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B0%95%EB%82%A8%20MICE%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC&y=127.0601678&x=%EA%B0%95%EB%82%A8%20MICE%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC'
          },
          {
            name: '동대문 관광특구',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EB%8F%99%EB%8C%80%EB%AC%B8%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC&y=127.0113516&x=%EB%8F%99%EB%8C%80%EB%AC%B8%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC'
          },
          {
            name: '명동 관광특구',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EB%AA%85%EB%8F%99%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC&y=126.9820833&x=%EB%AA%85%EB%8F%99%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC'
          },
          {
            name: '이태원 관광특구',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%9D%B4%ED%83%9C%EC%9B%90%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC&y=126.9962883&x=%EC%9D%B4%ED%83%9C%EC%9B%90%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC'
          },
          {
            name: '잠실 관광특구',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%9E%A0%EC%8B%A4%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC&y=127.1113014&x=%EC%9E%A0%EC%8B%A4%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC'
          },
          {
            name: '종로·청계 관광특구',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%A2%85%EB%A1%9C%C2%B7%EC%B2%AD%EA%B3%84%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC&y=126.9962025&x=%EC%A2%85%EB%A1%9C%C2%B7%EC%B2%AD%EA%B3%84%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC'
          },
          {
            name: '홍대 관광특구',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%ED%99%8D%EB%8C%80%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC&y=126.9218731&x=%ED%99%8D%EB%8C%80%20%EA%B4%80%EA%B4%91%ED%8A%B9%EA%B5%AC'
          }
        ],
        [
          {
            name: '국립중앙박물관·용산가족공원',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B5%AD%EB%A6%BD%EC%A4%91%EC%95%99%EB%B0%95%EB%AC%BC%EA%B4%80%C2%B7%EC%9A%A9%EC%82%B0%EA%B0%80%EC%A1%B1%EA%B3%B5%EC%9B%90&y=126.9810104&x=%EA%B5%AD%EB%A6%BD%EC%A4%91%EC%95%99%EB%B0%95%EB%AC%BC%EA%B4%80%C2%B7%EC%9A%A9%EC%82%B0%EA%B0%80%EC%A1%B1%EA%B3%B5%EC%9B%90'
          },
          {
            name: '남산공원',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EB%82%A8%EC%82%B0%EA%B3%B5%EC%9B%90&y=126.9940138&x=%EB%82%A8%EC%82%B0%EA%B3%B5%EC%9B%90'
          },
          {
            name: '뚝섬한강공원',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EB%9A%9D%EC%84%AC%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90&y=127.072721&x=%EB%9A%9D%EC%84%AC%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90'
          },
          {
            name: '망원한강공원',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EB%A7%9D%EC%9B%90%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90&y=126.8992731&x=%EB%A7%9D%EC%9B%90%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90'
          },
          {
            name: '반포한강공원',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EB%B0%98%ED%8F%AC%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90&y=126.9941323&x=%EB%B0%98%ED%8F%AC%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90'
          },
          {
            name: '북서울꿈의숲',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EB%B6%81%EC%84%9C%EC%9A%B8%EA%BF%88%EC%9D%98%EC%88%B2&y=127.0418215&x=%EB%B6%81%EC%84%9C%EC%9A%B8%EA%BF%88%EC%9D%98%EC%88%B2'
          },
          {
            name: '서울대공원',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%84%9C%EC%9A%B8%EB%8C%80%EA%B3%B5%EC%9B%90&y=127.0165014&x=%EC%84%9C%EC%9A%B8%EB%8C%80%EA%B3%B5%EC%9B%90'
          },
          {
            name: '서울숲공원',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%84%9C%EC%9A%B8%EC%88%B2%EA%B3%B5%EC%9B%90&y=127.0386028&x=%EC%84%9C%EC%9A%B8%EC%88%B2%EA%B3%B5%EC%9B%90'
          },
          {
            name: '월드컵공원',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%9B%94%EB%93%9C%EC%BB%B5%EA%B3%B5%EC%9B%90&y=126.8833351&x=%EC%9B%94%EB%93%9C%EC%BB%B5%EA%B3%B5%EC%9B%90'
          },
          {
            name: '이촌한강공원',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%9D%B4%EC%B4%8C%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90&y=126.9636195&x=%EC%9D%B4%EC%B4%8C%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90'
          },
          {
            name: '잠실종합운동장',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%9E%A0%EC%8B%A4%EC%A2%85%ED%95%A9%EC%9A%B4%EB%8F%99%EC%9E%A5&y=127.0738578&x=%EC%9E%A0%EC%8B%A4%EC%A2%85%ED%95%A9%EC%9A%B4%EB%8F%99%EC%9E%A5'
          },
          {
            name: '잠실한강공원',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%9E%A0%EC%8B%A4%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90&y=127.0851236&x=%EC%9E%A0%EC%8B%A4%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90'
          }
        ],
        [
          {
            name: '가로수길',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B0%80%EB%A1%9C%EC%88%98%EA%B8%B8&y=127.0239258&x=%EA%B0%80%EB%A1%9C%EC%88%98%EA%B8%B8'
          },
          {
            name: '낙산공원·이화마을',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%C2%B7%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84&y=127.0072961&x=%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%C2%B7%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84'
          },
          {
            name: '노량진',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EB%85%B8%EB%9F%89%EC%A7%84&y=126.9448328&x=%EB%85%B8%EB%9F%89%EC%A7%84'
          },
          {
            name: '북촌한옥마을',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EB%B6%81%EC%B4%8C%ED%95%9C%EC%98%A5%EB%A7%88%EC%9D%84&y=126.9849801&x=%EB%B6%81%EC%B4%8C%ED%95%9C%EC%98%A5%EB%A7%88%EC%9D%84'
          },
          {
            name: '성수카페거리',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%84%B1%EC%88%98%EC%B9%B4%ED%8E%98%EA%B1%B0%EB%A6%AC&y=127.0566916&x=%EC%84%B1%EC%88%98%EC%B9%B4%ED%8E%98%EA%B1%B0%EB%A6%AC'
          },
          {
            name: '수유리 먹자골목',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%88%98%EC%9C%A0%EB%A6%AC%20%EB%A8%B9%EC%9E%90%EA%B3%A8%EB%AA%A9&y=127.0259857&x=%EC%88%98%EC%9C%A0%EB%A6%AC%20%EB%A8%B9%EC%9E%90%EA%B3%A8%EB%AA%A9'
          },
          {
            name: '쌍문동 맛집거리',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%8C%8D%EB%AC%B8%EB%8F%99%20%EB%A7%9B%EC%A7%91%EA%B1%B0%EB%A6%AC&y=127.0333028&x=%EC%8C%8D%EB%AC%B8%EB%8F%99%20%EB%A7%9B%EC%A7%91%EA%B1%B0%EB%A6%AC'
          },
          {
            name: '압구정로데오거리',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C%EB%8D%B0%EC%98%A4%EA%B1%B0%EB%A6%AC&y=127.0386028&x=%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C%EB%8D%B0%EC%98%A4%EA%B1%B0%EB%A6%AC'
          },
          {
            name: '여의도',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%97%AC%EC%9D%98%EB%8F%84&y=126.9259501&x=%EC%97%AC%EC%9D%98%EB%8F%84'
          },
          {
            name: '영등포 타임스퀘어',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%98%81%EB%93%B1%ED%8F%AC%20%ED%83%80%EC%9E%84%EC%8A%A4%ED%80%98%EC%96%B4&y=126.9067563&x=%EC%98%81%EB%93%B1%ED%8F%AC%20%ED%83%80%EC%9E%84%EC%8A%A4%ED%80%98%EC%96%B4'
          },
          {
            name: '인사동·익선동',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%9D%B8%EC%82%AC%EB%8F%99%C2%B7%EC%9D%B5%EC%84%A0%EB%8F%99&y=126.9871452&x=%EC%9D%B8%EC%82%AC%EB%8F%99%C2%B7%EC%9D%B5%EC%84%A0%EB%8F%99'
          },
          {
            name: '창동 신경제 중심지',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%B0%BD%EB%8F%99%20%EC%8B%A0%EA%B2%BD%EC%A0%9C%20%EC%A4%91%EC%8B%AC%EC%A7%80&y=127.0543957&x=%EC%B0%BD%EB%8F%99%20%EC%8B%A0%EA%B2%BD%EC%A0%9C%20%EC%A4%91%EC%8B%AC%EC%A7%80'
          },
          {
            name: 'DMC(디지털미디어시티)',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=DMC(%EB%94%94%EC%A7%80%ED%84%B8%EB%AF%B8%EB%94%94%EC%96%B4%EC%8B%9C%ED%8B%B0)&y=126.8924761&x=DMC(%EB%94%94%EC%A7%80%ED%84%B8%EB%AF%B8%EB%94%94%EC%96%B4%EC%8B%9C%ED%8B%B0)'
          }
        ],
        [
          {
            name: '가산디지털단지역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B0%80%EC%82%B0%EB%94%94%EC%A7%80%ED%84%B8%EB%8B%A8%EC%A7%80%EC%97%AD&y=126.8799448&x=%EA%B0%80%EC%82%B0%EB%94%94%EC%A7%80%ED%84%B8%EB%8B%A8%EC%A7%80%EC%97%AD'
          },
          {
            name: '강남역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B0%95%EB%82%A8%EC%97%AD&y=127.0285177&x=%EA%B0%95%EB%82%A8%EC%97%AD'
          },
          {
            name: '건대입구역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B1%B4%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD&y=127.0687294&x=%EA%B1%B4%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD'
          },
          {
            name: '고속터미널역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B3%A0%EC%86%8D%ED%84%B0%EB%AF%B8%EB%84%90%EC%97%AD&y=127.0059872&x=%EA%B3%A0%EC%86%8D%ED%84%B0%EB%AF%B8%EB%84%90%EC%97%AD'
          },
          {
            name: '교대역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B5%90%EB%8C%80%EC%97%AD&y=127.0135188&x=%EA%B5%90%EB%8C%80%EC%97%AD'
          },
          {
            name: '구로디지털단지역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EA%B5%AC%EB%A1%9C%EB%94%94%EC%A7%80%ED%84%B8%EB%8B%A8%EC%A7%80%EC%97%AD&y=126.8966389&x=%EA%B5%AC%EB%A1%9C%EB%94%94%EC%A7%80%ED%84%B8%EB%8B%A8%EC%A7%80%EC%97%AD'
          },
          {
            name: '서울역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%84%9C%EC%9A%B8%EC%97%AD&y=126.9728994&x=%EC%84%9C%EC%9A%B8%EC%97%AD'
          },
          {
            name: '선릉역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%84%A0%EB%A6%89%EC%97%AD&y=127.0504475&x=%EC%84%A0%EB%A6%89%EC%97%AD'
          },
          {
            name: '신도림역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%8B%A0%EB%8F%84%EB%A6%BC%EC%97%AD&y=126.8902445&x=%EC%8B%A0%EB%8F%84%EB%A6%BC%EC%97%AD'
          },
          {
            name: '신림역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%8B%A0%EB%A6%BC%EC%97%AD&y=126.9292974&x=%EC%8B%A0%EB%A6%BC%EC%97%AD'
          },
          {
            name: '신촌·이대역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%8B%A0%EC%B4%8C%C2%B7%EC%9D%B4%EB%8C%80%EC%97%AD&y=126.9386959&x=%EC%8B%A0%EC%B4%8C%C2%B7%EC%9D%B4%EB%8C%80%EC%97%AD'
          },
          {
            name: '왕십리역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%99%95%EC%8B%AD%EB%A6%AC%EC%97%AD&y=127.039032&x=%EC%99%95%EC%8B%AD%EB%A6%AC%EC%97%AD'
          },
          {
            name: '역삼역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%97%AD%EC%82%BC%EC%97%AD&y=127.0383883&x=%EC%97%AD%EC%82%BC%EC%97%AD'
          },
          {
            name: '연신내역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%97%B0%EC%8B%A0%EB%82%B4%EC%97%AD&y=126.9208002&x=%EC%97%B0%EC%8B%A0%EB%82%B4%EC%97%AD'
          },
          {
            name: '용산역',
            url: 'https://data.seoul.go.kr/SeoulRtd/?hotspotNm=%EC%9A%A9%EC%82%B0%EC%97%AD&y=126.9604948&x=%EC%9A%A9%EC%82%B0%EC%97%AD'
          }
        ]
      ],
      recommend: ''
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
                const res_num = pred_arr[0]
                const idx = res_num.indexOf(1)
                this.recommend = this.result[idx]
                const ranPlace =
                  this.place[idx][
                    Math.floor(Math.random() * this.place[idx].length)
                  ]
                this.placeName = ranPlace.name
                this.placeLink = ranPlace.url
                console.log(this.placeName)
                console.log(this.placeLink)

                const modal = document.querySelector('.modal')
                modal.classList.add('show')
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

<style scoped>
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
.modal {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: none;

  /* background-color: rgba(0, 0, 0, 0.4); */
}
.modal.show {
  display: block;
}

.modal_body {
  position: absolute;
  top: 50%;
  left: 50%;

  width: 400px;
  height: 600px;

  padding: 40px;
  z-index: 99999999;
  text-align: center;

  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 5px 3px 0 rgba(34, 36, 38, 0.15);

  transform: translateX(-50%) translateY(-50%);
}
</style>
