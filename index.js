'use strict';
const prompt = require('prompt');

class ArchridgeAcademy {
  constructor() {
    this.playerName = 'David';
    this.actions = [
      {
        name: 'move',
        func: (input) => {
          const direction = input.match(/move(.*)/)[1].trim();
          if (
            direction === 'north' ||
            direction === 'south' ||
            direction === 'west' ||
            direction === 'east'
          ) {
            console.log(`moved ${direction}`);
          } else {
            console.log(`You can't go ${direction}`);
          }
        }
      },
      {
        name: 'help',
        func: (input) => {
          console.log('Help!');
        }
      },
      {
        name: 'score',
        func: (input) => {
          console.log('Score!');
        }
      },
      {
        name: 'info',
        func: (input) => {
          console.log('Info!');
        }
      },
      {
        name: 'credits',
        func: (input) => {
          console.log('Credits!');
        }
      },
      {
        name: 'look',
        func: (input) => {
          console.log('Look!');
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
