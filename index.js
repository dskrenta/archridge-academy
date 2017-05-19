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
        description: 'Archridge Academy',
        image: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr06/2013/8/26/16/enhanced-buzz-wide-7742-1377549191-11.jpg',
        // image: 'https://katyfarber.com/wp-content/uploads/2012/09/schools.jpg',
        exits: {
          north: 'hall1',
          east: 'hall2',
          west: 'hall3',
          south: 'bus'
        }
      },
      bus: {
        name: 'Bus',
        description: 'A small girl is standing next to a burning inverted bus. She stares at the now \ndetached steering wheel that she used to careen the bus to its fiery doom. Her eyes tear \nup as the screams of the other students are drowned out by the fire. She is the only one \nwho survived. Grief sets in… what to crash now!?',
        image: 'http://cdn.theatlantic.com/static/infocus/torn030512/t12_RTR2YT5T.jpg',
        exits: {
          north: 'school'
        }
      },
      hall1: {
        name: 'Hall 1',
        description: 'You have entered a hallway leading to pain, suffering, and student debt.',
        image: 'http://coachfore.org/wp-content/uploads/2015/01/emptyschoolhallway.jpg',
        exits: {
          south: 'school',
          north: 'hall4',
          west: 'bathroom',
          east: 'cafeteria'
        }
      },
      cafeteria: {
        name: 'Cafeteria',
        description: 'Appears to be similar to those of other high schools. Tables, chairs and food \nare slightly astray, but it’s far from decrepit. Something is off, it could be that everything seems to be much \nolder than appearance indicates. Whatever it is, you’ll want to get out of there as soon as possible.',
        image: 'http://www.capecentralhigh.com/wp-content/uploads/2013/01/Trinity-Lutheran-School-cafeteria-03-14-2012_9557.jpg',
        exits: {
          west: 'hall1'
        }
      },
      bathroom: {
        name: 'Bathroom',
        description: 'Relatively untouched. Stalls and toilets are in decent shape. There is some \nrubble, and the water pipes aren’t working perfectly, but the room is far from a hellhole.',
        image: 'http://s3.otherpeoplespixels.com/sites/27116/assets/2IV2kT81W3lD7XPu.jpg',
        exits: {
          east: 'hall1'
        }
      },
      hall2: {
        name: 'Hall 2',
        description: 'You have entered a hallway leading to happiness.',
        image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/03/trinity-college-long-room-library-dublin-12.jpg',
        exits: {
          west: 'school',
          north: 'hall5',
          south: 'gym',
          east: 'greenhouse'
        }
      },
      gym: {
        name: 'Gymnasium',
        description: 'Physical education is an optional class for students because it is a private school. We have state \nof the art strength training equipment and sporting facilities available to all students during both class and recess periods. \nThere are multiple versatile courts that can host a wide variety of sports.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Old_Fashioned_Gym_%287981005513%29.jpg',
        exits: {
          north: 'hall2'
        }
      },
      greenhouse: {
        name: 'Greenhouse',
        description: 'The f&ck, this school has a greenhouse! My school couldn’t even afford a music department! Anyways, \nthe school’s greenhouse is overgrown with plants altough they are lined in organized rows. The sun is visible, \nand the room is much less creepy than the rest of school. You take a deep breath. Light mist \nclings to the warm air. The sounds of the rainforest surrounds you. But wait, aren’t you in a school?  ',
        image: 'http://www.420nation.com/wp-content/uploads/2015/12/121115_Growing-Weed-the-Greenhouse-Way.jpg',
        exits: {
          west: 'hall2'
        }
      },
      hall3: {
        name: 'Hall 3',
        description: 'This hallway only contains that echoes of the long lost chior club.',
        image: 'http://coachfore.org/wp-content/uploads/2015/01/emptyschoolhallway.jpg',
        exits: {
          east: 'school',
          north: 'hall6',
          south: 'music',
          west: 'auditorium'
        }
      },
      music: {
        name: 'Music Hall',
        description: 'The music hall is full with chairs. There is also a stage for students to work with. \nStages have access to cabinets where they can store their instruments.  A kid is beating \nanother kid with some sticks... is he the drummer? The band and orchestra seem to be \nconducting a musical war, with dozens of broken instruments and crying children scattered through the hall.  \nThe teachers are rallying the campus police to stall the riot. Anyways, other than the brutal beatdown, the \nrest of the room is in a decent condition. Instruments line the walls, and the chairs are placed \nin rows. Several awards of achievement are strung up on the walls, though some have fallen down from the musical genocide. Death to the violinists!',
        image: 'http://www.britishschoolmanila.org/staging/sites/default/files/Senior%20Music%20Room.png',
        exits: {
          north: 'hall3'
        }
      },
      auditorium: {
        name: 'Auditorium',
        description: 'In a much worse state than the cafeteria. Chairs are broken, and rubble covers most of \nthe walkways. Holes appear in the ceiling, walls, and even in the floor. Tread carefully here.',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/6c/e3/91/6ce39160d17486aa0cda5c183f6ae4ff.jpg',
        exits: {
          east: 'hall3'
        }
      },
      hall4: {
        name: 'Hall 4',
        description: 'Neverending hallway leading to the light at the heart of the library',
        image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/03/trinity-college-long-room-library-dublin-12.jpg',
        exits: {
          south: 'hall1',
          east: 'library',
          north: 'class1',
          west: 'class2',
        }
      },
      library: {
        name: 'Library',
        description: 'There is no library. The funds that would have been there for the library were \nallocated to make the now useless greenhouse. And they say bureaucracy isn’t bad.',
        image: 'https://static.wixstatic.com/media/922da6_dd9841dda4164a46b7b8ac4b00abefd6~mv2.jpg',
        exits: {
          west: 'hall4'
        }
      },
      hall5: {
        name: 'Hall 5',
        description: 'This id one of the most academic hallways in the Academy, leading to two distinct classes.',
        image: 'http://coachfore.org/wp-content/uploads/2015/01/emptyschoolhallway.jpg',
        exits: {
          south: 'hall2',
          east: 'play',
          north: 'class3',
          west: 'class4'
        }
      },
      play: {
        name: 'Playground',
        description: 'The playground is a colorful combination of rebar, concrete, and PVC. \nThere are slides leading to never ending ignorance. Kids can be seen playing but their \nmental state is unreachable. You will never be as happy and careless as they are now.',
        image: 'http://www.loriknutson.com/images/Musings/Playground.jpg',
        exits: {
          west: 'hall5'
        }
      },
      hall6: {
        name: 'Hall 6',
        description: 'Hallway leading to the deep, dark depths of knowledge.',
        image: 'http://coachfore.org/wp-content/uploads/2015/01/emptyschoolhallway.jpg',
        exits: {
          south: 'hall3',
          east: 'class5',
          north: 'class6',
          west: 'class7'
        }
      },
      class1: {
        name: 'Physcial Science Department',
        description: 'The physical science department allows students to effectively learn and demonstrate principles \nof physics. Closets around the perimeter contain all necessary materials for hands on lab \nexperiments. The walls are filled with decorations of physics materials like posters and what not.',
        image: 'https://nebula.wsimg.com/924cecbb554acdb61d8d5b88fb7128b8?AccessKeyId=FB49ADE8D2724A03FDB0&disposition=0&alloworigin=1',
        exits: {
          south: 'hall4'
        }
      },
      class2: {
        name: 'Chemisty Department',
        description: 'When you enter the chemistry department, you’ll notice that everything seems to be in pristine \ncondition. The specialized chemical lab classroom allows for students to learn chemistry in a \nhands on way. The beakers, chairs, and desks are all intact. Classroom has many sinks and stations for proper sanitation and safety procedures.',
        image: 'https://images.fineartamerica.com/images-medium-large-5/victorian-old-west-classroom-daniel-hagerman.jpg',
        exits: {
          east: 'hall4'
        }
      },
      class3: {
        name: 'English Department',
        description: 'Traditional classroom with desks in rows as well as a whiteboard and projector screen towards \nthe front. This room has a connected library to one side allowing students to easily access book \nand learning materials. This makes it so students cannot have excuses like “I forgot my book” or “I never got the book.”',
        image: 'https://c1.staticflickr.com/4/3654/3659802019_682024f8e4.jpg',
        exits: {
          south: 'hall5'
        }
      },
      class4: {
        name: 'Environmental Science Department',
        description: 'This class has lab tables and the lab materials stored in closets on the walls. These \nclasses also have access to the greenhouse for students to have hands-on science lectures or \nlabs. Contains sinks, eye washers, and showers for safety precautions.',
        image: 'https://c.tribune.com.pk/2011/01/school1-640x480.jpg',
        exits: {
          east: 'hall5'
        }
      },
      class5: {
        name: 'Mathematics Department',
        description: 'Traditional classrooms with desk in rows. These classrooms have storage closets \nwith any necessary supplies such as calculators, books, pens, pencils, etc.',
        image: 'https://nebula.wsimg.com/924cecbb554acdb61d8d5b88fb7128b8?AccessKeyId=FB49ADE8D2724A03FDB0&disposition=0&alloworigin=1',
        exits: {
          west: 'hall6'
        }
      },
      class6: {
        name: 'Arts Department',
        description: 'Contains traditional class spaces with necessary mediums for art students. Painting \nmaterials are in foot locker type storage boxes under canvases for students to use. Storage closets \ninside walls with any necessary materials like paint, and clay, and such. Also has big tables \ngiving art students enough space for art creation like modeling and such.',
        image: 'https://c.tribune.com.pk/2011/01/school1-640x480.jpg',
        exits: {
          south: 'hall6'
        }
      },
      class7: {
        name: 'Nurse\'s Office',
        description: 'It’s a nice room, but the nurse seems to be in a coma, and is \nlying on the floor. Do I treat my minor ailment first, or call the ambulance? Treat nurse: \nAfter calling for help, the staff notices that you don’t belong at the academy, and you are \npromptly directed off campus. Ignore the nurse: You help yourself to some band-aids, \ntylenol and those little lollipops. You then walk out of the room, leaving the nurse on the ground. \nSurvival of the fittest.',
        image: 'https://images.fineartamerica.com/images-medium-large-5/victorian-old-west-classroom-daniel-hagerman.jpg',
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
            console.log(`\n${this.rooms[this.currentRoom].description}\n`);
          } else {
            console.log(`You can't go ${direction}`);
          }
        }
      },
      {
        name: 'help',
        func: (input) => {
          const helpTable = new AsciiTable('Help')
            .setHeading('Command', 'Definition')
            .addRow('quit', 'Exit the game')
            .addRow('help', 'Display possible commands')
            .addRow('move', 'Move [north|east|south|west]')
            .addRow('look', 'Generate a visual of the current room')
            .addRow('score', 'Display current score')
            .addRow('info', 'Display information about the school')
            .addRow('credits', 'Display the credits for the game')
            .addRow('exits', 'Display all possible exits');
          console.log(helpTable.toString());
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
          const creditsTable = new AsciiTable('Help')
            .setHeading('Person', 'Role')
            .addRow('David', 'Programmer')
            .addRow('Alex', 'Writer')
            .addRow('Pedro', 'Designer & Propaganda Minister')
            .addRow('Serene', 'Interior Visuals')
            .addRow('Hannah', 'Interior Visuals')
            .addRow('Bryce', 'Writer & Interior Visuals')
            .addRow('Tino', 'Writer & Interior Visuals')
            .addRow('Luis', 'Writer & Interior Visuals')
          console.log(creditsTable.toString());
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
            rows.push([exit, this.rooms[exits[exit]].name]);
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
      console.log('"The unrivaled utopia is a dystopia." - David Skrenta\n');
      this.gamePrompt();
    } catch (err) {
      console.error(err);
    }
  }

  info() {
    console.log('info');
  }

  convertImage(imgUrl) {
    return new Promise((resolve, reject) => {
      imageToAscii(imgUrl, {colored: true, size: {width: 90}}, (err, converted) => {
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
