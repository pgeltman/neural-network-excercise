import Layer from '../components/layer';

export default class Model {
  constructor(wab) {
    //generates a layer for each layer in the state
    Object.keys(wab).forEach(l => {
      this[l] = new Layer(wab[l]);
    });
  }
  run(i) {
    //eventually this will need to feed i into a specific layer, and then each layer into the next

    return this['out'].run(i);
  }
}
