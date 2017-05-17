'use strict';

class Room {
  constructor(
    roomID,
    title,
    backgroundSound,
    description,
    image,
    doors
  ) {
    this.roomID = roomID;
    this.title = title;
    this.backgroundSound = backgroundSound;
    this.description = description;
    this.image = image;
    this.doors = doors;
  }
}

class ArchridgeAcademy {
  constructor(playerName) {
    this.playerName = playerName;
    this.inventory = {};
    this.score = 0;
    this.currentRoom = null;
    this.keywords = [
      'help',
      '?',
      'score',
      'report',
      'info',
      'look',
      'move'
    ];
  }

  main() {
    
  }
}
