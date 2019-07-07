import cli from 'philsCLI';

export default class Neuron {
  w: Array<number> = [0, 0, 0];
  b: number;
  maxAct: number;
  minAct: number;

  constructor(weights: Array<number>, bias?: number) {
    this.w = weights;
    this.b = bias || 0;
  }
  run(acts: Array<number>) {
    let res = [];
    for (let a in acts) {
      res.push(acts[a] * this.w[a]);
    }
    return res;
  }
}
