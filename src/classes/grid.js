// Board Class
'use strict';

class Grid {
    /**
     * Board Constructor
     *  - size
     *  - grid
     **/
    constructor(size) {
        this.size = size; // Size of the board
        this.grid = null;
    }

    // Create grid needs to initialize the snake's origin, as well as the food's origin
    createGrid(snake, food) {
        // Generate the grid as a 2d array
        const grid = [];
        for(let i = 0; i < this.size; i++) {
            grid.push([]);
            for(let j = 0; j < this.size; j++) {
                grid[i].push(' ');
            }
        }

        // Set the Snake and Food initial positions
        grid[snake.y][snake.x] = 'x';
        grid[food.y][food.x] = 'o';

        // Update the snake's grid property
        this.grid = grid;
    }

    // Should probably be moved to some class that handles moves and validates them
    validateMove(x) {
        // Return false from out of bound entries
        return !(x < 0 || x >= this.size);
    }

    // Currently only handles updating a single size snake position
    // Will update this in the future to something that can handle larger bodies.
    updateGrid(snake, food) {
        // Update the Food Position in the Matrix
        this.grid[food.oy][food.ox] = ' ';
        this.grid[food.y][food.x] = 'o';

        // Update the Snake Position in the Matrix
        this.grid[snake.oy][snake.ox] = ' ';
        this.grid[snake.y][snake.x] = 'x';

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

    /* Get Methods for Grid Class */
    get getGridCenter() {
        return Math.floor(this.size / 2);
    }
}

export default Grid;