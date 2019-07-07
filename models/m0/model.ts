import Layer from '../components/layer';

export default class Model {
  constructor(wab) {
    //generates a layer for each layer in the state
    Object.keys(wab).forEach(l => {
      this[l] = new Layer(wab[l]);
    });
  }
  run(i: object) {
    return this['out'].run(i);
  }
}
