'use strict';
const prompt = require('prompt');

class ArchridgeAcademy {
  constructor() {
    this.playerName = 'David';
    prompt.start();
    this.gamePrompt();
  }

  gamePrompt() {
    return prompt.get(this.playerName, (error, result) => {
      this.gameLogic(result[this.playerName]);
    });
  }

  gameLogic(input) {
    if (input.match(/move/)) {
      console.log('move!');
    } else if (input.match(/help/)) {
      console.log('help!');
    } else if (input.match(/quit/)) {
      console.log('Goodbye!');
      process.exit();
    } else {
      console.log('Invalid input');
    }
    this.gamePrompt();
  }
}

const game = new ArchridgeAcademy();
