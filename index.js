'use strict';

const prompt = require('prompt');
const figlet = require('figlet');

class ArchridgeAcademy {
  constructor() {
    this.playerName = 'David';
    this.currentRoom = 'room1';
    this.rooms = {
      room1: {
        name: 'Room 1',
        description: 'Room 1 description',
        image: 'http://someurl.com',
        exits: {
          west: 'room2',
          east: 'room3'
        }
      },
      room2: {
        name: 'Room 1',
        description: 'Room 2 description',
        image: 'http://someurl.com',
        exits: {
          north: 'room1',
          east: 'room3'
        }
      },
      room3: {
        name: 'Room 1',
        description: 'Room 3 description',
        image: 'http://someurl.com',
        exits: {
          west: 'room2',
          east: 'room1'
        }
      }
    };
    this.actions = [
      {
        name: 'move',
        func: (input) => {
          const direction = input.match(/move(.*)/)[1].trim();
          if (direction in this.rooms[this.currentRoom].exits) {
            this.currentRoom = this.rooms[this.currentRoom].exits[direction];
            console.log(this.rooms[this.currentRoom].description);
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
          const imgUrl = this.rooms[this.currentRoom].image;
          console.log('Look!');
        }
      },
      {
        name: 'quit',
        func: async (input) => {
          await this.bannerText('Goodbye!');
          process.exit();
        }
      }
    ];

    this.main();
  }

  async main() {
    try {
      await this.bannerText('Welcome to Archridge Academy!');
      prompt.start();
      this.gamePrompt();
    } catch (err) {
      console.error(err);
    }
  }

  bannerText(text) {
    return new Promise((resolve, reject) => {
      figlet(text, (err, data) => {
        if (err) {
          reject(err);
        } else {
          console.log(`\n${data}`);
          resolve(data);
        }
      })
    });
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
