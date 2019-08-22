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

        this.pointer = null;

        // Track the body of the Snake
        this.body = [this];
    };

    /* Methods */

    // Update the size of the snake
    updateSize() {
        this.size = this.size + 1;
    }

    // Update the previous position of the snake
    updateOldXY() {
        this.ox = this.getX;
        this.oy = this.getY;
    }

    // Extend the snake body
    createNewSnake(snake) {
        // Update the size of the master class snake
        this.updateSize();

        // Update and/or generate the properties of the sub-class snake parameter
        snake.size = this.getSize;
        snake.x = this.getX;
        snake.y = this.getY;
        snake.ox = snake.getX;
        snake.oy = snake.getY;
        snake.pointer = this.body[snake.size - 1]; // Set the pointer to the next time

        // Push the newly generated snake to the array
        this.body.push(snake);
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

    set setSize(int) {
        this.size = int;
    }
}

export default Snake;