import cli from 'philsCLI';

export default class Neuron {
  w: Array<number> = [0, 0, 0];
  b: number;
  maxAct: number;

  constructor(weights: Array<number>, bias?: number) {
    this.w = weights;
    this.b = bias || 0;
  }
  run(acts: Array<number>) {
    //internal array
    let results = [];
    let sumWeights: number = 0;

    //determines the activations for each input
    for (let a in acts) {
      results.push(acts[a] * this.w[a]);
    }

    //sums the activations together
    for (let i = 0; i < results.length; i++) {
      sumWeights += results[i];
    }

    sumWeights += this.b;

    //normalizes sumWeights for output Activation
    if (sumWeights > 1) {
      return 1;
    } else if (sumWeights < 0) {
      return 0;
    } else {
      return sumWeights;
    }
  }
}
