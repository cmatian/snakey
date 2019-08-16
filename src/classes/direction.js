// Direction Class
'use strict';

/**
 * If Snake is going:
 * UP -> Left / Right
 * DOWN -> Left / Right
 * LEFT -> Up / Down
 * RIGHT -> Up / Down
 *
 */

class Direction {
    constructor(n, e, s, w) {
        this.n = n;
        this.e = e;
        this.s = s;
        this.w = w;
        this.direction = null;
    }

    getDirection(signal) {

    }

    returnDirection() {

    }
}

export default Direction;