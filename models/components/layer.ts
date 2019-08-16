import Neuron from './neuron';

export default class Layer {
  constructor(wab) {
    //generates a neuron for each neuron in the state
    Object.keys(wab).forEach(n => {
      this[n] = new Neuron(wab[n].w, wab[n].b);
    });
  }
  run(i: object) {
    //wrapper array
    let res = [];

    Object.keys(this).forEach(n => {
      res.push(this[n].run(i));
    });

    return res;
  }
}
