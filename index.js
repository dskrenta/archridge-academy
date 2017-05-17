'use strict';
const prompt = require('prompt');

class ArchridgeAcademy {
  constructor() {
    this.playerName = 'David';
    this.actions = [
      {
        name: 'move',
        func: (input) => {
          console.log('Move!');
        }
      },
      {
        name: 'quit',
        func: (input) => {
          console.log('Goodbye!');
          process.exit();
        }
      }
    ];
    prompt.start();
    this.gamePrompt();
  }

  gamePrompt() {
    return prompt.get(this.playerName, (error, result) => {
      this.gameLogic(result[this.playerName]);
    });
  }

  gameLogic(input) {
    let performAction = false;

    for (let action of this.actions) {
      if (input.match(new RegExp(`^${action.name}`))) {
        action.func(input);
        performAction = true;
        break;
      }
    }

    if (!performAction) {
      console.log('Invalid input');
    }

    this.gamePrompt();
  }
}

const game = new ArchridgeAcademy();
