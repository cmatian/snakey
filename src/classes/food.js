// Food Class
'use strict';

// Snake object is passed in to the Food class so that it can reference the x and y position
class Food {
    constructor(size, snake) {
        // Size keeps a record of the grid size
        this.size = size;

        // Track  Position - initially null until newRandomPosition defines them
        this.x = null;
        this.y = null;

        // Initialize the starting tile of the food
        this.newRandomPosition(snake);
    }

    // Returns and object containing an X coordinate and a Y coordinate of the
    generateRandomPosition(max, snake) {

        const min = 0;
        max = Math.floor(max);

        // Make sure that new food position is never on top of the snake tile
        let randX, randY;
        do {
            randX = Math.floor(Math.random() * (max - min)) + min;
            randY = Math.floor(Math.random() * (max - min)) + min;
        } while(snake.getX === randX && snake.getY === randY);

        return {
            x: randX,
            y: randY
        };
    }

    // Triggers the generation of a new position
    newRandomPosition(snake) {
        // Generate a new random position
        let position = this.generateRandomPosition(this.size, snake);

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