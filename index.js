'use strict';

const figlet = require('figlet');
const imageToAscii = require('image-to-ascii');

class ArchridgeAcademy {
  constructor() {
    this.currentRoom = 'room1';
    this.rooms = {
      room1: {
        name: 'Room 1',
        description: 'Room 1 description',
        image: 'https://katyfarber.com/wp-content/uploads/2012/09/schools.jpg',
        exits: {
          west: 'room2',
          east: 'room3'
        }
      },
      room2: {
        name: 'Room 2',
        description: 'Room 2 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          north: 'room1',
          east: 'room3'
        }
      },
      room3: {
        name: 'Room 3',
        description: 'Room 3 description',
        image: 'http://i.dailymail.co.uk/i/pix/2014/06/20/article-0-1EEE985C00000578-468_964x647.jpg',
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
          const currentRoom = this.rooms[this.currentRoom];
          if (direction in currentRoom.exits) {
            this.currentRoom = currentRoom.exits[direction];
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
        func: async (input) => {
          const imgUrl = this.rooms[this.currentRoom].image;
          const convertedImage = await this.convertImage(imgUrl);
          console.log(convertedImage);
          // console.log('Look!');
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
      this.gamePrompt();
    } catch (err) {
      console.error(err);
    }
  }

  convertImage(imgUrl) {
    return new Promise((resolve, reject) => {
      imageToAscii(imgUrl, {colored: true}, (err, converted) => {
        err ? reject(err) : resolve(converted);
      });
    });
  }

  bannerText(text) {
    return new Promise((resolve, reject) => {
      figlet(text, (err, data) => {
        if (err) {
          reject(err);
        } else {
          console.log(`${data}`);
          resolve(data);
        }
      })
    });
  }

  prompt(prompt) {
    return new Promise((resolve, reject) => {
      const stdin = process.stdin;
      const stdout = process.stdout;
      const displayPrompt = prompt || '';

      stdin.resume();
      stdout.write(displayPrompt);

      stdin.once('data', function (data) {
        resolve(data.toString().trim());
      });
    });
  }

  async gamePrompt() {
    try {
      const input = await this.prompt();
      this.gameLogic(input);
    } catch (err) {
      console.error(err);
    }
  }

  // change to async function
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
