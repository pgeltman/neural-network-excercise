export default {
  settings: {
    description:
      'a basic model to demonstrate the mechanics of a neural network',
    structure: [3, 3, 1],
    learnRate: 0.05,
    accuracy: 0.0
  },
  wab: {
    hl: {
      n0: { w: [0.0, 0.0, 0.0], b: 0.0 },
      n1: { w: [0.0, 0.0, 0.0], b: 0.0 },
      n2: { w: [0.0, 0.0, 0.0], b: 0.0 }
    },
    out: {
      n: { w: [1.0, 1.0, 0.0], b: -1 }
    }
  }
};
