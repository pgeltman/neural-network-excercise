import Neuron from './neuron';
import cli from 'philsCLI';

export default class Layer {
  neurons: Object;
  constructor(weightsAndBiases) {
    let neuronList: Array<any> = Object.keys(weightsAndBiases);
    neuronList.forEach(n => {
      console.log(n);

      // this.neurons[n] = new Neuron(
      //   weightsAndBiases[n].w,
      //   weightsAndBiases[n].b
      // );
    });
  }
}
