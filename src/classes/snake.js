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
        this.x = position;
        this.y = position;
        this.size = size;
        this.color = color;
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