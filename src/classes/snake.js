// Snake Class
'use strict';

/*
Snake X and Y represent the head of the snake.
The Snake body represents a linked list.
Each body segment, when added, will contain its current X and Y position, as well as a pointer to the next body
The head of the snake always points to null
 */

class Snake {
    constructor(position, size = 1, color = '#35d47a') {
        // Track Current Snake Position
        this.x = position;
        this.y = position;
        // Track Old Snake Position
        this.ox = this.getX;
        this.oy = this.getY;
        // Track Size and Color
        this.size = size;
        this.color = color;
        // Track Body of the Snake
        this.body = [
            {
                x: position,
                y: position,
                index: 0,
                pointer: null
            }
        ];
    };

    /* Methods */
    updateSize() {
        this.size = this.size + 1;
    }

    updateOldXY() {
        this.ox = this.getX;
        this.oy = this.getY;
    }

    /* Get Snake Properties */
    get getX() {
        return this.x;
    }

    get getY() {
        return this.y;
    }

    get getSize() {
        return this.size;
    }

    get getColor() {
        return this.color;
    }

    /* Set Snake Properties */
    set setX(int) {
        this.x = int;
    }

    set setY(int) {
        this.y = int;
    }

    set setColor(hex) {
        this.color = hex;
    }
}

export default Snake;