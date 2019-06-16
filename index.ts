//neural network excercise
import cli from './philsCLI';
import Model from './components/model';

cli.addCommand('new', name => {
  let moddy = new Model(name);
});

cli.addCommand('model', () => {});

cli.start("Phil's Machine Learning Tool");
