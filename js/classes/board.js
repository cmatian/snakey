// Board Class
'use strict';

class Board {
    // Board Constructor
    // - Size
    constructor(size) {
        this.size = size; // size of the board
        this.grid = grid // 2d array
    }

    createBoard() {
        const gridArray = [];
        for(let i = 0; i < this.size; i++) {
            for(let j = 0; j < this.size; i++) {
                grid[i][j] = '_';
            }
        }
        return gridArray;
    }

    grid = this.createBoard();
}

export default Board;