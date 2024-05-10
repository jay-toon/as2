// Importing other files into here
import  './submitScore.js';
import './firstTimeLoad.js';
import './gameOver.js';



// This shit needs to be refactored in many files. I'm too lazy for it. Lord help me.
let lives = 3;

const main = document.querySelector('main'); // This will select the main div element in the HTML file and store it in the main variable.

//Point = 0,  Wall = 1, Player = 2, Enemy = 3, 
let maze = [ 
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
];

for (let y of maze) {
    for (let x of y) {
        let block = document.createElement('div');
        block.classList.add('block');

        switch (x) {
            case 1:
                block.classList.add('wall');
                break;
            case 2:
                block.id = 'player';
                let mouth = document.createElement('div');
                mouth.classList.add('mouth');
                block.appendChild(mouth);
                break;
            case 3:
                block.classList.add('enemy');
                break;
            default:
                block.classList.add('point');
                block.style.height = '1vh';
                block.style.width = '1vh'; 
        }
        main.appendChild(block); 
    }
}

class Pacman {
    player = document.querySelector('#player');
    playerMouth = player.querySelector('.mouth');
     playerTop = 0;
    playerLeft = 0;
}





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
    if (pacman.lives>=1) {
        pacman.lives--;
        setTimeout(5000);
        maze[2][8] = 3;
    }

    else { // Life Lost Event
        if (lives == 0) { // Death Event
            alert('Game Over');
            username = prompt("Enter your name, or leave this blank to remain anonymous.");
            if (!username) {
                username = 'Player';
            }
            submitScore(username, score);
        }
    }
}




// Submits the score to the localStorage "database"
