// Board Class
'use strict';

class Grid {
    /**
     * Board Constructor
     *  - size
     *  - space
     *  - grid
     *  - available
     **/
    constructor(size) {
        this.size = size; // Size of the board
        this.space = size * size; // Total empty space
        this.grid = this.createGrid(); // Initialize the grid
        this.available = [];
    }

    /* Methods */

    // Create grid needs to initialize the snake's origin, as well as the food's origin
    createGrid() {
        // Generate the grid as a 2d array
        const grid = [];
        for(let i = 0; i < this.size; i++) {
            grid.push([]);
            for(let j = 0; j < this.size; j++) {
                grid[i].push(' ');
            }
        }

        // Return the initialized grid
        return grid;
    }

    // Should probably be moved to some class that handles moves and validates them
    validateMove(x) {
        // Return false from out of bound entries
        return !(x < 0 || x >= this.size);
    }

    // Currently only handles updating a single size snake position
    // Will update this in the future to something that can handle larger bodies.
    updateGrid(snake, food) {
        // Using the snake body we need to loop through it and set the new positions
        snake.body.forEach((item) => {
            this.grid[item.oy][item.ox] = ' ';
            this.grid[item.y][item.x] = 'x';
        });

        // Update the Food Position in the Matrix
        this.grid[food.y][food.x] = 'o';

        // Print the current grid
        this.printGrid();
    }

    reduceSpace() {
        this.space = this.space - 1;
    }

    // Purely for testing until I set up a means to render the board in the DOM
    printGrid() {
        let render = '';
        this.grid.forEach((parent) => {
            let childString = '';
            parent.forEach((child) => {
                if(child === 'o') {
                    // Render Food Position
                    childString += '[o]';
                } else {
                    // Space or Snake
                    childString += (child === ' ') ? '[ ]' : '[x]';
                }
            });
            render += (childString + '\n');
        });
        console.log(render);
    }

    /* Get Functions for Grid Class */
    get getGridCenter() {
        return Math.floor(this.size / 2);
    }
}

export default Grid;