// Snake Class
'use strict';

class Snake {
    constructor(position, size = 1, color = '#35d47a') {
        this.x = position;
        this.y = position;
        this.size = size;
        this.color = color;
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