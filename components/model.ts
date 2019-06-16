import Layer from './layer';
import cli from '../philsCLI';

export default class Model {
  name: string;

  constructor(name) {
    this.name = name;
    cli.respond(`a new model called '${name}' has been generated`);
    new Layer();
  }
}
