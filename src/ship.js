function ship(start, end) {
  let coordinates = [start];
  let length = 0;

  //check if ship is 1 square
  if (start[0] === end[0] && start[1] === end[1]) {
    length = 1;
  }
  //check for direction of ship
  else if (start[0] === end[0]) {
    let vertical = start[1] + 1;
    while (vertical <= end[1]) {
      coordinates.push([start[0], vertical]);
      vertical++;
    }
    length = end[1] - start[1] + 1;
  } else {
    let horizontal = start[0] + 1;
    while (horizontal <= end[0]) {
      coordinates.push([horizontal, start[1]]);
      horizontal++;
    }
    length = end[0] - start[0] + 1;
  }

  return {
    length,
    hits: 0,
    sunk: false,
    coordinates,
    hit() {
      this.hits = this.hits + 1;
      return this.hits;
    },
    isSunk() {
      if (this.hits === this.length) {
        this.sunk = true;
        return true;
      }
      return false;
    },
  };
}

module.exports = ship;
