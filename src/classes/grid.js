// Board Class
'use strict';

class Grid {
    /**
     * Board Constructor
     *  - size
     *  - grid
     **/
    constructor(size) {
        this.size = size; // size of the board
        this.grid = this.createGrid(); // Generate the Grid
    }

    // Create grid needs to initialize the snake's origin, as well as the food's origin
    createGrid(food = null) {
        let middle = this.gridCenter;
        const grid = [];
        for(let i = 0; i < this.size; i++) {
            grid.push([]);
            for(let j = 0; j < this.size; j++) {
                if(!food) {
                    console.log('test');
                }

                if(i === middle && j === middle) {
                    grid[i].push('x');
                    continue;
                }
                grid[i].push(' ');
            }
        }
        return grid;
    }

    // Should probably be moved to some class that handles moves and validates them
    validateMove(x) {
        // Return from out of bound entries
        return !(x < 0 || x >= this.size);
    }

    // Currently only handles updating a single size snake position
    // Will update this in the future to something that can handle larger bodies.
    updateGrid(x, y, ox, oy) {
        this.grid[oy][ox] = ' ';
        this.grid[y][x] = 'x';

        // Print the updated grid
        this.printGrid();
    }

    // Purely for testing until I set up a means to render the board in the DOM
    printGrid() {
        let render = '';
        this.grid.forEach((parent) => {
            let childString = '';
            parent.forEach((child) => {
                if(child === 'o') {
                    // Render Food Position
                    childString += '[O]';
                } else {
                    // Space or Snake
                    childString += (child === ' ') ? '[ ]' : '[X]';
                }
            });
            render += (childString + '\n');
        });
        console.log(render);
    }

    /* Get Methods for Grid Class */
    get gridCenter() {
        return Math.floor(this.size / 2);
    }
}

export default Grid;