const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function(moves) {
  let pos = [0,0]
  for(let dir of moves){
    switch (dir) {
      case 'north':
        pos[1] = pos[1] + 1;
        break;
      case 'south':
        pos[1] = pos[1] - 1;
        break;
      case 'east':
        pos[0] = pos[0] + 1;
        break;
      case 'west':
        pos[0] = pos[0] - 1;
        break;
      default:
        break;
    }
  }
  return pos;
};

console.log(finalPosition(moves));
