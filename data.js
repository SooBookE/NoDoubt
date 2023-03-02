// 데이터 라벨 정의.
const HOBBY_CLASSES = [
  "고궁·문화유산",
  "관광특구",
  "공원",
  "발달상권",
  "인구밀집지역",
];
const HOBBY_NUM_CLASSES = HOBBY_CLASSES.length;
// const tf = require("@tensorflow/tfjs");

// CJS 모듈 불러오기.
const source = require("./dataMerge.js");
const HOBBY_DATA = source.data;
// console.log(HOBBY_DATA);

// 텐서 변환 함수 작성.
function convertToTensors(data, targets, testSplit) {
  const numExamples = data.length;
  if (numExamples !== targets.length) {
    throw new Error("데이터와 타깃의 길이가 다릅니다.");
  }

  // indices로 데이터와 타겟 셔플.
  const indices = [];
  for (let i = 0; i < numExamples; i++) {
    indices.push(i);
  }
  tf.util.shuffle(indices);

  const shuffledData = [];
  const shuffledTargets = [];
  for (let i = 0; i < numExamples; i++) {
    shuffledData.push(data[indices[i]]);
    shuffledTargets.push(targets[indices[i]]);
  }

  // 테스트스플릿을 기준으로 데이터를 훈련 세트/테스트 세트로 분리.
  const numTestExamples = Math.round(numExamples * testSplit);
  const numTrainExamples = numExamples - numTestExamples;
  const xDims = shuffledData[0].length;

  // 특성 데이터 2D 텐서로 변환.
  const xs = tf.tensor2d(shuffledData, [numExamples, xDims]);

  // 레이블 원핫 인코딩 이용 텐서로 변환.
  const ys = tf.oneHot(tf.tensor1d(shuffledTargets).toInt(), HOBBY_NUM_CLASSES);

  // slice로 훈련/테스트 세트 분리.
  const xTrain = xs.slice([0, 0], [numTrainExamples, xDims]);
  const xTest = xs.slice([numTrainExamples, 0], [numTestExamples, xDims]);
  const yTrain = ys.slice([0, 0], [numTrainExamples, HOBBY_NUM_CLASSES]);
  const yTest = ys.slice([0, 0], [numTestExamples, HOBBY_NUM_CLASSES]);
  return [xTrain, yTrain, xTest, yTest];
}

// 구동 함수 작성.
function getHobbyData(testSplit) {
  return tf.tidy(() => {
    const dataByClass = [];
    const targetsByClass = [];
    for (let i = 0; i < HOBBY_CLASSES.length; ++i) {
      dataByClass.push([]);
      targetsByClass.push([]);
    }
    for (const example of HOBBY_DATA) {
      const target = example[example.length - 1];
      const data = example.slice(0, example.length - 1);
      dataByClass[target].push(data);
      targetsByClass[target].push(target);
    }

    const xTrains = [];
    const yTrains = [];
    const xTests = [];
    const yTests = [];
    for (let i = 0; i < HOBBY_CLASSES.length; ++i) {
      const [xTrain, yTrain, xTest, yTest] = convertToTensors(
        dataByClass[i],
        targetsByClass[i],
        testSplit
      );
      xTrains.push(xTrain);
      yTrains.push(yTrain);
      xTests.push(xTest);
      yTests.push(yTest);
    }

    const concatAxis = 0;
    return [
      tf.concat(xTrains, concatAxis),
      tf.concat(yTrains, concatAxis),
      tf.concat(xTests, concatAxis),
      tf.concat(yTests, concatAxis),
    ];
  });
}
exports.HOBBY_CLASSES = HOBBY_CLASSES;
exports.HOBBY_NUM_CLASSES = HOBBY_NUM_CLASSES;
exports.getHobbyData = getHobbyData;
