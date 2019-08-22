import Grid from './classes/grid';
import Snake from './classes/snake';
import Food from './classes/food';
'use strict';

// Grid Size
const size = 9;

// Create required instances
const board = new Grid(size); // Board Instance
const snake = new Snake(board.getGridCenter); // Snake Instance
const food = new Food(size, board); // Food Instance

// Render the Grid
board.updateGrid(snake, food);

const keyHandler = (event) => {

    // Update the snake's old position
    snake.updateOldXY();

    // Move up
    if(event.keyCode === 38) {
        if(board.validateMove(snake.getY - 1)) {
            snake.setY = (snake.getY - 1);
        }
    }
    // Move Down
    if(event.keyCode === 40) {
        if(board.validateMove(snake.getY + 1)) {
            snake.setY = (snake.getY + 1);
        }
    }
    // Move Left
    if(event.keyCode === 37) {
        if(board.validateMove(snake.getX - 1)) {
            snake.setX = (snake.getX - 1);
        }
    }
    // Move Right
    if(event.keyCode === 39) {
        if(board.validateMove(snake.getX + 1)) {
            snake.setX = (snake.getX + 1);
        }
    }

    // Clear the console
    console.clear();

    console.log(snake);
    console.log(food);

    // Check if the snake landed on the food tile
    // If it did
    //      - Move the food object to a new tile position
    //      - Generate a new snake object to push to the original snake object
    if(snake.x === food.x && snake.y === food.y) {
        food.newRandomPosition(board);
        snake.createNewSnake(new Snake);
    }

    // Update the Grid with the new positions
    board.updateGrid(snake, food);
};

document.addEventListener("keyup", (event) => {
    if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
        keyHandler(event);
    }
});
