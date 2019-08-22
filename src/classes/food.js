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

    // Returns and object containing an X coordinate and a Y coordinate of the -> calls evaluatePosition();
    generateRandomPosition(max, board) {

        const min = 0;
        max = Math.floor(max);

        /* Note:
        It will be more efficient to directly check the tile rather than loop through the snake body.
        The two loops run at o(n^2) efficiency. Can be evaluated at o(n).
         */

        // Make sure that new food position is never on top of the snake tile
        let x, y;
        do {
            x = Math.floor(Math.random() * (max - min)) + min;
            y = Math.floor(Math.random() * (max - min)) + min;
        } while(board.grid[y][x] === 'x');

        return {
            x: x,
            y: y
        };
    }



    // Triggers the generation of a new position -> calls generateRandomPosition();
    newRandomPosition(board) {
        // Generate a new random position
        let position = this.generateRandomPosition(this.size, board);

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