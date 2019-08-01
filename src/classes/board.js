// Board Class
'use strict';

class Board {
    // Board Constructor
    // - Size
    constructor(size) {
        this.size = size; // size of the board
    }

    create() {
        const size = this.size;
        let grid = [];
        for(let i = 0; i < size; i++) {
            grid.push([]);
            for(let j = 0; j < size; j++) {
                grid[i].push('_');
            }
        }
        return grid;
    }
}

export default Board;