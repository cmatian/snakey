import Board from './classes/board';
'use strict';

// Create the board
const board = new Board(8);

//
let area = board.create();

console.log("Properties:", board);
console.log("Grid Size:", board.size);
console.log("2d Array:", area);