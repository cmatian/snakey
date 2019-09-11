// Food Class
'use strict';

// Snake object is passed in to the Food class so that it can reference the x and y position
class Food {
    constructor(size, board) {
        // Size keeps a record of the grid size
        this.size = size;

        // Track  Position - initially null until newRandomPosition defines them
        this.x = null;
        this.y = null;

        // Initialize the starting tile of the food
        this.newRandomPosition(board);
    }

    // Returns and object containing an X coordinate and a Y coordinate
    generateRandomPosition(max, board, ox, oy) {

        const min = 0;
        max = Math.floor(max);

        let loop = 0;

        /*
        Set the new position ensuring that it's not on top of a snake tile and it's not over its
        its old position.
         */

        let x, y;
        do {

            loop++;

            // Hard stop loops that exceed 50,000 loops
            if(loop === 500000) {
                throw new Error("Fatal Error - do-while loop exceeded 50,000 loops");
            }

            if(board.space <= 0) {
                throw new Error('No more board space.');
            }

            x = Math.floor(Math.random() * (max - min)) + min;
            y = Math.floor(Math.random() * (max - min)) + min;

        } while(board.grid[y][x] === 'x' || (x === ox && y === oy));

        // Reduce the available board space (means that there's no room for the food tile)
        board.reduceSpace();

        return {
            x: x,
            y: y
        };
    }



    // Triggers the generation of a new position -> calls generateRandomPosition();
    newRandomPosition(board) {

        // Generate a new random position
        let position = this.generateRandomPosition(this.size, board, this.x, this.y);

        // Update the current positions
        this.x = position.x;
        this.y = position.y;
    }

    // Getters
    get getX() {
        return this.x;
    }

    get getY() {
        return this.y;
    }
}

export default Food;