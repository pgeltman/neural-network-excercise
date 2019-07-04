import cli from 'philsCLI';

export default class Neuron {
  weights: Array<number> = [0, 0, 0];
  bias: number;
  maxAct: number;
  minAct: number;

  constructor(weights: Array<number>, bias?: number) {
    this.weights = weights;
    this.bias = bias || 0;
    this.maxAct = this.getMaxAct();
  }
  run(activations: Array<number>) {
    let aggregate = [];
    for (let a in activations) {
      aggregate.push(activations[a] * this.weights[a]);
    }
    cli.json(aggregate);
    return 1;
  }
  getMaxAct() {
    return 1;
  }
}
