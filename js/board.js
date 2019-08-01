// Board Class
'use strict';

class Board {
    // Board Constructor
    // - Size
    constructor(size, grid) {
        this.size = size; // size of the board
        this.grid = grid // 2d array
    }

    createBoard() {
        const gridArray = [];
        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; i++) {
                grid[i][j] = '_';
            }
        }
        return gridArray;
    }

    grid = this.createBoard();
}

export default Board;