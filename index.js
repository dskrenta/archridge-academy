'use strict';
const prompt = require('prompt');

prompt.start();

/*
prompt.get('playername', (err, result) => {
  console.log(`Entered: ${result.playername}`);
});
*/

mainPrompt('Hello');

function mainPrompt(input) {
  return prompt.get(input, (err, result) => {
    console.log(`Entered: ${result[input]}`);
  });
}
