import Neuron from './neuron';
import cli from 'philsCLI';

export default class Layer {
  constructor() {
    cli.respond('a new layer has been generated');
    new Neuron();
  }
  input = 'yellow';
}
