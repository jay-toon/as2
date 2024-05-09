// This shit needs to be refactored in many files. I'm too lazy for it. Lord help me.

let upPressed = false; // This is a boolean variable that will be used to check if the up arrow key is pressed. If the up arrow key is pressed, the value of this variable will be set to true. If the up arrow key is not pressed, the value of this variable will be set to false.
let downPressed = false; // This is a boolean variable that will be used to check if the down arrow key is pressed. If the down arrow key is pressed, the value of this variable will be set to true. If the down arrow key is not pressed, the value of this variable will be set to false.
let leftPressed = false; // This is a boolean variable that will be used to check if the left arrow key is pressed. If the left arrow key is pressed, the value of this variable will be set to true. If the left arrow key is not pressed, the value of this variable will be set to false.
let rightPressed = false; // This is a boolean variable that will be used to check if the right arrow key is pressed. If the right arrow key is pressed, the value of this variable will be set to true. If the right arrow key is not pressed, the value of this variable will be set to false.

let lives = 3;

const main = document.querySelector('main'); // This will select the main div element in the HTML file and store it in the main variable.

//Player = 2, Wall = 1, Enemy = 3, Point = 0
let maze = [ // This is a 2D array that will be used to create the maze. The array will contain the walls, power pellets, ghosts, dots, and pacman himself. The array will be used to create the maze by iterating through the array and creating div elements for each block in the maze.
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // In the maze of neon, where the ghosts reside,
    [1, 2, 0, 1, 0, 0, 0, 0, 3, 1], // Pacman roams, with nowhere to hide.
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1], // Through corridors of blue and walls of black,
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // He gobbles dots, no looking back.
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 1], // Chasing cherries, evading the specter's chase.

    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1], // Fear turns to courage with a power pellet's glow,h
    [1, 0, 0, 1, 0, 3, 0, 0, 0, 1], // The hunter becomes hunted, in this timeless show.
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1], // In Pacman's world, the maze is his stage,
    [1, 3, 1, 0, 0, 0, 0, 0, 0, 1], // A hero's journey, through each neon cage,
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] // And so Pacman ventures, from a bygone arcade age.
]; // This ends the maze array.  

// This class will be used to create the player object that will be controlled by the user. This player object, Pacman,  will be used to move the player around the maze and collect the points, power pellets, and avoid the ghosts. Pacman will also be used to keep track of the player's score, lives, name, powerstate and position within the game.



// These nested loops will iterate through the maze array and create a div element for each block in the maze. The div elements will be given classes based on the value of the array position. Then, the div elements will then be appended to the main div element.
for (let y of maze) { // This will iterate through the rows of the maze that will be containing the walls, power pellets, ghosts, dots, and pacman himself. A total of 10 rows will be created through this loop as the maze array has 10 rows.
    for (let x of y) { // This will iterate through the columns of the maze that will be containing the rows themself. This adds a depth and x axis to the maze. The maze array has 10 columns.
        let block = document.createElement('div'); // This will create a div element for each block in the maze.
        block.classList.add('block'); // This adds the block class to the div element that was created in the previous line of code.

        switch (x) { // This is a switch statement that will check the value of x and will execute the code block that equates to the value of x.
            case 1: // For the case where x is equal to 1, the array position will be given the wall class.
                block.classList.add('wall'); // This adds the wall class to the block div element.
                break; // This ends the switch statement and prevents more elements to be added within one block of the array.
            case 2: // For the case where x is equal to 2, the array position will be given the player class.
                block.id = 'player'; // This adds the player id to the block div element.
                let mouth = document.createElement('div'); // This creates a div element for the mouth of the player.
                mouth.classList.add('mouth');  // This adds the mouth class to the mouth div element.
                block.appendChild(mouth); // This appends the mouth div element to the block div element.
                break; // This ends the switch statement and prevents more elements to be added within one block of the array.
            case 3: // For the case where x is equal to 3, the array position will be given the enemy class.
                block.classList.add('enemy'); // This adds the enemy class to the block div element.
                break; // This ends the switch statement and prevents more elements to be added within one block of the array.
            default: // For the case where x is equal to anyt other value the array position will be given the point class.
                block.classList.add('point'); // This adds the point class to the block div element.
                block.style.height = '1vh'; // This sets the height of the block div element to 1vh.
                block.style.width = '1vh'; //  This sets the width of the block div element to 1vh.
        } // This ends the inner for loop.
        main.appendChild(block); // This appends the block div element[] to the main div element.
    }
}

//Player movement
function keyUp(event) {
    if (event.key === 'ArrowUp') {
        upPressed = false;
    } else if (event.key === 'ArrowDown') {
        downPressed = false;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = false;
    } else if (event.key === 'ArrowRight') {
        rightPressed = false;
    }
}

function keyDown(event) {
    if (event.key === 'ArrowUp') {
        upPressed = true;
    } else if (event.key === 'ArrowDown') {
        downPressed = true;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = true;
    } else if (event.key === 'ArrowRight') {
        rightPressed = true;
    }
}

class Pacman {
    player = document.querySelector('#player');
    playerMouth = player.querySelector('.mouth');
     playerTop = 0;
    playerLeft = 0;
}

setInterval(function() {
    if(downPressed) {
        playerTop++;
        player.style.top = playerTop + 'px';
        playerMouth.classList = 'down';
    }
    else if(upPressed) {
        playerTop--;
        player.style.top = playerTop + 'px';
        playerMouth.classList = 'up';
    }
    else if(leftPressed) {
        playerLeft--;
        player.style.left = playerLeft + 'px';
        playerMouth.classList = 'left';
    }
     else if(rightPressed) {
        playerLeft++;
        player.style.left = playerLeft + 'px';
        playerMouth.classList = 'right';
    }
}, 10);

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


// This section will be used for the extra code I will have to add to meet the requirements outlined within the assignment. This will include the code for the enemies, the points, and the power pellets. This will also include the code for the collision detection between the player and the enemies, the player and the points, and the player and the power pellets. This will also include the code for the score and the game over screen also, along with a countdown timer, lives functionality, 

// This function prevents other code to run at the start of a game until a key or button is pressed.
function startGame() {
    pauseGame = true;
    while (!pauseGame) {
        document.addEventListener('keydown', keyDown);
        document.addEventListener('keyup', keyUp);

        if (keyUp === true) {
            pauseGame = false;
        } else if (keyDown === true) {
            pauseGame = false;
        }
    }
}

// This function will be used to supply lives functionality to Pacman, including resetting the position of pacman and the ghosts for a fairer continuation within the game.
function loseLife() { // Lives mechanic, called on a death and will return a preferred output.
    if (lives == 0) { // Death Event
        alert('Game Over');
        username = prompt("Enter your name, or leave this blank to remain anonymous.");
        if (!username) {
            username = 'Player';
        }
        submitScore(username, score);
    }

    else { // Life Lost Event
        pacman.lives--;
        setTimeout(5000);
        maze[2][8] = 3;
    }
}




// Submits the score to the localStorage "database"
function submitScore(username, score) {
    let scores = JSON.parse(localStorage.getItem('scores')) || [username, score];
    localStorage.setItem('scores', JSON.stringify(scores));
}