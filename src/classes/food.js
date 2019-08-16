// Food Class
'use strict';

class Food {
    constructor(x, y) {
        this.position = this.getRandomPosition(x, y);
        this.x = this.position.x;
        this.y = this.position.y;
        console.log(this);
    }

    // X and Y represent the bounds of the grid.
    // We generate the food's position by calling this in a while loop in the grid class
    getRandomPosition(max) {

        let min = 0;
        max = Math.floor(max);

        return {
            x: Math.floor(Math.random() * (max - min)) + min,
            y: Math.floor(Math.random() * (max - min)) + min
        };
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