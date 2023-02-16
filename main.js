require('dotenv').config()

const appKey = process.env.appKey

// 여행지로 유효한 총 123개의 지역 코드 출력.(시군구 기준)
// 여행지로 유효한 총 18590개의 지역 코드 출력.(동/리 기준)
let district_arr = [];
(async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', appkey: appKey }
        };

        await fetch('https://apis.openapi.sk.com/puzzle/travel?type=ri', options)
            .then(response => response.json())
            .then(response => district_arr = [...response.contents])
            .catch(err => console.error(err));

        console.log(district_arr.length)
        console.log(district_arr)

        /* 
        filter나 forEach로 districName 일치하면
        districtCode 뽑기!
        */

})()

    /* 데이터로 미리 변환하자! */
    // 여행지로 유효한 총 123개의 지역 코드 출력.


    

    /* API로 받아오기. */

    // 지역에 따른 월별 추정 방문자 수
    let mon_predict_obj = {};
    (async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', appkey: appKey }
        };
        
        // url 쿼리에 요청 월, 성별, 연령대, 가족단위 유무 조건 넣어서 추정 방문자 수 출력 가능.
        await fetch('https://apis.openapi.sk.com/puzzle/traveler-count/raw/monthly/districts/5011000000?yearMonth=latest&gender=all&ageGrp=all&companionType=all', options)
        .then(response => response.json())
        .then(response => mon_predict_obj={...response.contents.raw})
        .catch(err => console.error(err));
        
        // console.log(mon_predict_obj)
    })()
    // 지역에 따른 월별 추정 방문자 수
    
    // 지역에 따른 일별 추정 방문자 수
    let day_predict_obj = {};
    (async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', appkey: appKey}
        };
        
        // url 쿼리에 요청 월, 성별, 연령대, 가족단위 유무 조건 넣어서 추정 방문자 수 출력 가능.

        // 호출 일자에서 -33일부터 -4일까지의 일자 데이터를 출력하므로, 한 달에 한 번씩 호출해서 DB에 축적하는 알고리즘으로 가자!
        await fetch('https://apis.openapi.sk.com/puzzle/traveler-count/raw/daily/districts/5011000000?gender=all&ageGrp=all&companionType=all', options)
        .then(response => response.json())
        .then(response => console.log(response.contents.raw.length))
        .catch(err => console.error(err));
        
        // console.log(day_predict_obj)
    })()
    // // 지역에 따른 월별 추정 방문자 수

