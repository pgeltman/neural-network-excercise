import Layer from '../components/layer';
import cli from 'philsCLI';

export default class Model {
  hl: object;

  constructor(weightsAndBiases) {
    this.hl = new Layer(weightsAndBiases.hl);
  }
  run(i: object) {
    //return this.weightsAndBiases;
  }
}
