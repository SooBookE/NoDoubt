import { HOBBY_CLASSES, HOBBY_NUM_CLASSES, getHobbyData } from "./data.js";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";

console.log(HOBBY_CLASSES);
console.log(HOBBY_NUM_CLASSES);
console.log(getHobbyData);

const [xTrains, yTrains, xTests, yTests] = getHobbyData(0.15);
console.log(xTrains);
console.log(yTrains);
console.log(xTests);
console.log(yTests);
const input = tf.input({ shape: [4] });
const A = tf.layers.dense({ units: 200, activation: "relu" }).apply(input);
const B = tf.layers.dense({ units: 200, activation: "relu" }).apply(A);
const C = tf.layers.dense({ units: 5, activation: "relu" }).apply(B);

const model = tf.model({ inputs: input, outputs: C });

model.compile({
  optimizer: tf.train.adam(),
  loss: "caregoricalCrossentropy",
  metrics: ["accuracy"],
});

const trainLogs = [];
const lossContainer = document.getElementById("lossCanvas");
const accContainer = document.getElementById("accuracyCanvas");
const beginMs = performance.now();
const fitParam = {
  epochs: 6000,
  validationData: [xTests, yTests],
  callbacks: {
    onEpochEnd: async (epoch, logs) => {
      // 훈련 에포크가 끝날 때마다 손실과 정확도 값을 출력합니다.
      const secPerEpoch = (performance.now() - beginMs) / (1000 * (epoch + 1));
      ui.status(`모델을 훈련합니다... 약 ${secPerEpoch.toFixed(4)} 초/에포크`);
      trainLogs.push(logs);
      tfvis.show.history(lossContainer, trainLogs, ["loss", "val_loss"], {
        xLabel: "에포크",
        yLabel: "손실",
      });
      tfvis.show.history(accContainer, trainLogs, ["acc", "val_acc"], {
        xLabel: "에포크",
        yLabel: "정확도",
      });
      calculateAndDrawConfusionMatrix(model, xTests, yTests);
    },
  },
};
const history = model.fit(xTrains, yTrains, fitParam).then((_) => {
  const result = model.predict(xTests);
  result.print();
});

async function calculateAndDrawConfusionMatrix(model, xTest, yTest) {
  const [preds, labels] = tf.tidy(() => {
    const preds = model.predict(xTest).argMax(-1);
    const labels = yTest.argMax(-1);
    return [preds, labels];
  });

  const confMatrixData = await tfvis.metrics.confusionMatrix(labels, preds);
  const container = document.getElementById("confusion-matrix");
  tfvis.render.confusionMatrix(
    container,
    { values: confMatrixData, labels: data.IRIS_CLASSES },
    { shadeDiagonal: true, xLabel: "예측", yLabel: "레이블" }
  );

  tf.dispose([preds, labels]);
}
