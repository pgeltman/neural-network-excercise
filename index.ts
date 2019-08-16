//neural network excercise

//load model components
import Model from './models/m0/model';

//load saved state
import state from './models/m0/state';
import cli from 'philsCLI';

//generate model in the current saved state
let m = new Model(state.wab);
let input = [1, 0, 0];

//run the model with an input
let result = m.run(input);

console.log(`input: ${input} returned: ${result}`);
cli.json(m);
