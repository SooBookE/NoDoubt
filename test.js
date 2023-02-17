const data = require("./data/hobby_202210.json");

let arr = [];
for (const da of data) {
  let {
    sexdstn_flag_cd: gen,
    agrde_flag_nm: age,
    wt3m_expr_lsr_cltur_value: clt,
  } = da;
  arr.push({ gen, age, clt });
}

for (const ar of arr) {
  if (ar.gen == "M") {
    ar.gen = 0;
  } else {
    ar.gen = 1;
  }

  if (ar.age == "60대") {
    ar.age = 60;
  } else if (ar.age == "50대") {
    ar.age = 50;
  } else if (ar.age == "40대") {
    ar.age = 40;
  } else if (ar.age == "30대") {
    ar.age = 30;
  } else {
    ar.age = 20;
  }

  ar.clt = ar.clt.split(",");

  if (ar.clt[0] == "오락-휴식" || ar.clt[0] == "자기계발-자기관리") {
    ar.clt = 5;
  } else if (ar.clt[0] == "사회교류") {
    ar.clt = 4;
  } else if (
    ar.clt[0] == "운동-스포츠 직접하기" ||
    ar.clt[0] == "스포츠 관람하기"
  ) {
    ar.clt = 3;
  } else if (ar.clt[0] == "관광-여행") {
    ar.clt = 2;
  } else {
    ar.clt = 1;
  }
}
// console.log(arr); // 3개의 데이터 추출 및 변환 완료.
exports.arr = arr;
