export default {
  settings: {
    description:
      'a basic model to demonstrate the mechanics of a neural network',
    structure: [3, 3, 1],
    learnRate: 0.05,
    accuracy: 0.0
  },
  weightsAndBiases: {
    hl: {
      n0: { w: [0.0, 0.0, 0.0], b: 0.0 },
      n1: { w: [1.0, 1.0, 1.0], b: 1.1 },
      n2: { w: [2.0, 2.0, 2.0], b: 2.2 }
    },
    out: {
      n: { w0: 0.0, w1: 0.0, w2: 0.0, b: 0.0 }
    }
  }
};
