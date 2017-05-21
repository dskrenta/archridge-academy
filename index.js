'use strict';

const figlet = require('figlet');
const imageToAscii = require('image-to-ascii');
const AsciiTable = require('ascii-table');

class ArchridgeAcademy {
  constructor() {
    this.currentRoom = 'school';
    this.imgPath = 'images/';
    this.rooms = {
      school: {
        name: 'School Entrance',
        description: 'Archridge Academy',
        image: 'school.jpg',
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
        image: 'bus.jpg',
        exits: {
          north: 'school'
        }
      },
      hall1: {
        name: 'Hall 1',
        description: 'You have entered a hallway leading to pain, suffering, and student debt.',
        image: 'hall1.jpg',
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
        image: 'cafeteria.jpg',
        exits: {
          west: 'hall1'
        }
      },
      bathroom: {
        name: 'Bathroom',
        description: 'Relatively untouched. Stalls and toilets are in decent shape. There is some \nrubble, and the water pipes aren’t working perfectly, but the room is far from a hellhole.',
        image: 'bathroom.jpg',
        exits: {
          east: 'hall1'
        }
      },
      hall2: {
        name: 'Hall 2',
        description: 'You have entered a hallway leading to happiness.',
        image: 'hall2.jpg',
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
        image: 'gym.jpg',
        exits: {
          north: 'hall2'
        }
      },
      greenhouse: {
        name: 'Greenhouse',
        description: 'The f&ck, this school has a greenhouse! My school couldn’t even afford a music department! Anyways, \nthe school’s greenhouse is overgrown with plants altough they are lined in organized rows. The sun is visible, \nand the room is much less creepy than the rest of school. You take a deep breath. Light mist \nclings to the warm air. The sounds of the rainforest surrounds you. But wait, aren’t you in a school?  ',
        image: 'greenhouse.jpg',
        exits: {
          west: 'hall2'
        }
      },
      hall3: {
        name: 'Hall 3',
        description: 'This hallway only contains that echoes of the long lost choir club.',
        image: 'hall1.jpg',
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
        image: 'music.jpg',
        exits: {
          north: 'hall3'
        }
      },
      auditorium: {
        name: 'Auditorium',
        description: 'In a much worse state than the cafeteria. Chairs are broken, and rubble covers most of \nthe walkways. Holes appear in the ceiling, walls, and even in the floor. Tread carefully here.',
        image: 'auditorium.jpg',
        exits: {
          east: 'hall3'
        }
      },
      hall4: {
        name: 'Hall 4',
        description: 'Neverending hallway leading to the light at the heart of the library',
        image: 'hall1.jpg',
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
        image: 'library.jpg',
        exits: {
          west: 'hall4'
        }
      },
      hall5: {
        name: 'Hall 5',
        description: 'This is one of the most academic hallways in the Academy, leading to two distinct classes.',
        image: 'hall2.jpg',
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
        image: 'playground.jpg',
        exits: {
          west: 'hall5'
        }
      },
      hall6: {
        name: 'Hall 6',
        description: 'Hallway leading to the deep, dark depths of knowledge.',
        image: 'hall1.jpg',
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
        image: 'class1.jpg',
        exits: {
          south: 'hall4'
        }
      },
      class2: {
        name: 'Chemisty Department',
        description: 'When you enter the chemistry department, you’ll notice that everything seems to be in pristine \ncondition. The specialized chemical lab classroom allows for students to learn chemistry in a \nhands on way. The beakers, chairs, and desks are all intact. Classroom has many sinks and stations for proper sanitation and safety procedures.',
        image: 'class2.jpg',
        exits: {
          east: 'hall4'
        }
      },
      class3: {
        name: 'English Department',
        description: 'Traditional classroom with desks in rows as well as a whiteboard and projector screen towards \nthe front. This room has a connected library to one side allowing students to easily access book \nand learning materials. This makes it so students cannot have excuses like “I forgot my book” or “I never got the book.”',
        image: 'class3.jpg',
        exits: {
          south: 'hall5'
        }
      },
      class4: {
        name: 'Environmental Science Department',
        description: 'This class has lab tables and the lab materials stored in closets on the walls. These \nclasses also have access to the greenhouse for students to have hands-on science lectures or \nlabs. Contains sinks, eye washers, and showers for safety precautions.',
        image: 'class4.jpg',
        exits: {
          east: 'hall5'
        }
      },
      class5: {
        name: 'Mathematics Department',
        description: 'Traditional classrooms with desk in rows. These classrooms have storage closets \nwith any necessary supplies such as calculators, books, pens, pencils, etc.',
        image: 'class1.jpg',
        exits: {
          west: 'hall6'
        }
      },
      class6: {
        name: 'Arts Department',
        description: 'Contains traditional class spaces with necessary mediums for art students. Painting \nmaterials are in foot locker type storage boxes under canvases for students to use. Storage closets \ninside walls with any necessary materials like paint, and clay, and such. Also has big tables \ngiving art students enough space for art creation like modeling and such.',
        image: 'class2.jpg',
        exits: {
          south: 'hall6'
        }
      },
      class7: {
        name: 'Nurse\'s Office',
        description: 'It’s a nice room, but the nurse seems to be in a coma, and is \nlying on the floor. Do I treat my minor ailment first, or call the ambulance? Treat nurse: \nAfter calling for help, the staff notices that you don’t belong at the academy, and you are \npromptly directed off campus. Ignore the nurse: You help yourself to some band-aids, \ntylenol and those little lollipops. You then walk out of the room, leaving the nurse on the ground. \nSurvival of the fittest.',
        image: 'class3.jpg',
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
            .addRow('info', 'Display information about the school')
            .addRow('credits', 'Display the credits for the game')
            .addRow('exits', 'Display all possible exits')
            .addRow('schedule', 'Display schedule');
          console.log(helpTable.toString());
        }
      },
      {
        name: 'info',
        func: (input) => {
          console.log(`
            Archridge Academy is a project based learning style private school.
            All income for the school is generated through existing and current projects developed by students at Archridge.
            Archridge is open to all high school students who have demonstrated an ability above that of the typical students with respect to certian spectrums.
            Archridge seeks out students with differing learning rates, abilities, styles, and skills in order to create project teams in which the students learn basic and complex problem solving skills.
            All students participate in the assembly of teams and projects which aim to solve issues facing the developing world.
            All regular course curriculum is taught through the student's chosen projects.
          `);
        }
      },
      {
        name: 'credits',
        func: (input) => {
          const creditsTable = new AsciiTable('Help')
            .setHeading('Person', 'Role')
            .addRow('David', 'Programmer & Warden')
            .addRow('Bryce', 'Game Engineer & Interior Visuals')
            .addRow('Alex', 'Chief Content Creator')
            .addRow('Pedro', 'Designer & Propaganda Minister')
            .addRow('Serene', 'Interior Visuals')
            .addRow('Hannah', 'Interior Visuals')
            .addRow('Tino', 'Writer')
            .addRow('Luis', 'Writer')
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
      },
      {
        name: 'schedule',
        func: (input) => {
          const scheduleTable = new AsciiTable('Schedule')
            .setHeading('Section', 'Class', 'Start Time', 'End Time', 'Description')
            .addRow(1, 'Project Development', '10:00 AM', '12:00 PM', 'Structured project development')
            .addRow(2, 'Break', '12:00 PM', '1:30 PM', 'Optional break')
            .addRow(3, 'Project Development', '1:30 PM', '3:00 PM', 'Unstructured project development')
            .addRow(4, 'Industry Guests & Open Teacher Review', '3:00 PM', '4:00 PM', 'Networking, technological discovery, peer and teacher progress reviews')
            .addRow(5, 'Break', '4:00 PM', '4:30 PM', 'Optional break')
            .addRow(6, 'Intellectual Expansion', '4:30 PM', '5:00 PM', 'Expansion of critial thinking and problem solving skills')
          console.log(scheduleTable.toString());
        }
      }
    ];

    this.main();
  }

  async main() {
    try {
      await this.bannerText('Welcome to Archridge Academy!');
      console.log('"The unrivaled utopia is a dystopia."\n');
      this.gamePrompt();
    } catch (err) {
      console.error(err);
    }
  }

  convertImage(img) {
    return new Promise((resolve, reject) => {
      imageToAscii(`${this.imgPath}${img}`, {colored: true, size: {width: 90}}, (err, converted) => {
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
