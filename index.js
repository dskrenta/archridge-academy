'use strict';

const figlet = require('figlet');
const imageToAscii = require('image-to-ascii');
const AsciiTable = require('ascii-table');

class ArchridgeAcademy {
  constructor() {
    this.currentRoom = 'school';
    this.rooms = {
      school: {
        name: 'School Entrance',
        description: 'School description',
        image: 'https://katyfarber.com/wp-content/uploads/2012/09/schools.jpg',
        exits: {
          north: 'hall1',
          east: 'hall2',
          west: 'hall3',
          south: 'bus'
        }
      },
      bus: {
        name: 'Bus',
        description: 'Bus description',
        image: 'https://katyfarber.com/wp-content/uploads/2012/09/schools.jpg',
        exits: {
          north: 'school'
        }
      },
      hall1: {
        name: 'Hall 1',
        description: 'Hall 1 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          south: 'school',
          north: 'hall4',
          west: 'bathroom',
          east: 'cafeteria'
        }
      },
      cafeteria: {
        name: 'Cafeteria',
        description: 'Cafeteria description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          west: 'hall1'
        }
      },
      bathroom: {
        name: 'Bathroom',
        description: 'Bathroom description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          east: 'hall1'
        }
      },
      hall2: {
        name: 'Hall 2',
        description: 'Hall 2 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          west: 'school',
          north: 'hall5',
          south: 'gym',
          east: 'greenhouse'
        }
      },
      gym: {
        name: 'Gymnasium',
        description: 'Gymnasium description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          north: 'hall2'
        }
      },
      greenhouse: {
        name: 'Greenhouse',
        description: 'Greenhouse description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          west: 'hall2'
        }
      },
      hall3: {
        name: 'Hall 3',
        description: 'Hall 3 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          east: 'school',
          north: 'hall6',
          south: 'music',
          west: 'auditorium'
        }
      },
      music: {
        name: 'Music Hall',
        description: 'Music Hall description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          north: 'hall3'
        }
      },
      auditorium: {
        name: 'Auditorium',
        description: 'Auditorium description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          east: 'hall3'
        }
      },
      hall4: {
        name: 'Hall 4',
        description: 'Hall 4 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          south: 'hall1',
          east: 'library',
          north: 'class1',
          west: 'class2',
        }
      },
      library: {
        name: 'Library',
        description: 'Library description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          west: 'hall4'
        }
      },
      hall5: {
        name: 'Hall 5',
        description: 'Hall 5 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          south: 'hall2',
          east: 'play',
          north: 'class3',
          west: 'class4'
        }
      },
      play: {
        name: 'Playground',
        description: 'Playground description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          west: 'hall5'
        }
      },
      hall6: {
        name: 'Hall 6',
        description: 'Hall 6 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          south: 'hall3',
          east: 'class5',
          north: 'class6',
          west: 'class7'
        }
      },
      class1: {
        name: 'Class 1',
        description: 'Class 1 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          south: 'hall4'
        }
      },
      class2: {
        name: 'Class 2',
        description: 'Class 2 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          east: 'hall4'
        }
      },
      class3: {
        name: 'Class 3',
        description: 'Class 3 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          south: 'hall5'
        }
      },
      class4: {
        name: 'Class 4',
        description: 'Class 4 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          east: 'hall5'
        }
      },
      class5: {
        name: 'Class 5',
        description: 'Class 5 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          west: 'hall6'
        }
      },
      class6: {
        name: 'Class 6',
        description: 'Class 6 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          south: 'hall6'
        }
      },
      class7: {
        name: 'Class 7',
        description: 'Class 7 description',
        image: 'http://www.charitiesnfplaw.com.au/files/2012/04/Old-school-building.jpg',
        exits: {
          east: 'hall6'
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
          this.help();
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
          this.info();
        }
      },
      {
        name: 'credits',
        func: (input) => {
          this.credits();
        }
      },
      {
        name: 'look',
        func: async (input) => {
          const imgUrl = this.rooms[this.currentRoom].image;
          const convertedImage = await this.convertImage(imgUrl);
          console.log(convertedImage);
        }
      },
      {
        name: 'quit',
        func: async (input) => {
          await this.bannerText('Goodbye!');
          process.exit();
        }
      },
      {
        name: 'exits',
        func: (input) => {
          const exits = this.rooms[this.currentRoom].exits;
          const rows = [];
          for (let exit in exits) {
            rows.push([exit, this.rooms[exits[exit]].description]);
          }
          const exitsTable = AsciiTable.factory({
            title: 'Exits',
            heading: ['Direction', 'Description'],
            rows: rows
          });
          console.log(exitsTable.toString());
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

  info() {
    console.log('info');
  }

  credits() {
    const creditsTable = new AsciiTable('Help')
      .setHeading('Person', 'Role')
      .addRow('David', 'Programmer')
      .addRow('Alex', 'Writer')
      .addRow('Pedro', 'Designer')
      .addRow('Serene', 'Interior Visuals')
      .addRow('Hannah', 'Interior Visuals')
      .addRow('Bryce', 'Writer & Interior Visuals')
      .addRow('Tino', 'Writer & Interior Visuals')
      .addRow('Luis', 'Writer & Interior Visuals')
    console.log(creditsTable.toString());
  }

  help() {
    const helpTable = new AsciiTable('Help')
      .setHeading('Command', 'Definition')
      .addRow('quit', 'Exit the game')
      .addRow('help', 'Display possible commands')
      .addRow('move', 'Move [north|east|south|west]')
      .addRow('look', 'Generate a visual of the current room')
      .addRow('score', 'Display current score')
      .addRow('info', 'Display information about the school')
      .addRow('credits', 'Display the credits for the game');
    console.log(helpTable.toString());
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
