// Direction Class
'use strict';



class Direction {
    constructor(direction = null) {
        this.direction = direction;
    }

    get getDirection() {
        return this.direction;
    }

    set setDirection(string) {
        if(typeof string !== "string") {
            throw new Error("Invalid direction. Must be of type string.");
        }

        if(string === "n" || string === "e" || string === "s" || string === "w") {
            this.direction = string;
        }
    }
}

export default Direction;