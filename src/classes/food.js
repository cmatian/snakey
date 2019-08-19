// Food Class
'use strict';

// Snake object is passed in to the Food class so that it can reference the x and y position
class Food {
    constructor(size, snake) {
        this.size = size;
        // Generate Random Position
        this.position = this.getRandomPosition(this.size, snake);
        // Track New Position
        this.x = this.position.x;
        this.y = this.position.y;
        // Track Old Position
        this.ox = this.x;
        this.oy = this.y;
    }

    // X and Y represent the bounds of the grid.
    // We generate the food's position by calling this in a while loop in the grid class
    getRandomPosition(max, snake) {

        const min = 0;
        max = Math.floor(max);

        // Make sure that new food position is never on top of the snake
        let randX, randY;
        do {
            randX = Math.floor(Math.random() * (max - min)) + min;
            randY = Math.floor(Math.random() * (max - min)) + min;
        } while(snake.getX === randX && snake.getY === randY);

        // Return the results as an object
        return {
            x: randX,
            y: randY
        };
    }

    // Triggers the generation of a new position
    newPosition(snake) {
        // Generate a new position
        let position = this.getRandomPosition(this.size, snake);

        // Update the old position
        this.ox = this.x;
        this.oy = this.y;

        // Update the new position
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