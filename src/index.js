import Grid from './classes/grid';
import Snake from './classes/snake';
import Food from './classes/food';
'use strict';


// Grid Size
const size = 9;

// Create required instances
const board = new Grid(size); // Board Instance
const snake = new Snake(board.gridCenter); // Snake Instance
const food = new Food(size, size); // Food Instance

const state = {
    snake: {
        x: snake.getX,
        y: snake.getY
    }
};

board.printGrid();

const keyHandler = (event) => {

    const oldX = snake.getX,
          oldY = snake.getY;

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

    console.log(snake.getY, snake.getX);

    board.updateGrid(snake.getX, snake.getY, oldX, oldY);


    state.snake.x = snake.getX;
    state.snake.y = snake.getY;
    console.log(state.snake);
};

document.addEventListener("keyup", (event) => {
    if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
        keyHandler(event);
    }
});
