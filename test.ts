import data from './test.json';
import fs from 'fs';

data.push(1);

console.log(data);

fs.writeFile('./test.json', JSON.stringify(data), err => {
  if (err) throw err;
  console.log('Updated!');
});
