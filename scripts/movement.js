// Movement variables, and how pacman movement is handled. Includes processing and general timing functions along this.
let UP_ARROW = false;
let DOWN_ARROW = false; 
let LEFT_ARROW = false; 
let RIGHT_ARROW = false; 

player = document.querySelector('#player');
playerMouth = player.querySelector('.mouth');
playerTop = 0;
playerLeft = 0;

function key_released(event) {
    if (event.key === 'ArrowUp') {
        UP_ARROW = false;
    } else if (event.key === 'ArrowDown') {
        DOWN_ARROW = false;
    } else if (event.key === 'ArrowLeft') {
        LEFT_ARROW = false;
    } else if (event.key === 'ArrowRight') {
        RIGHT_ARROW = false;
    }
}

function key_pressed(event) {
    if (event.key === 'ArrowUp') {
        UP_ARROW = true;
    } else if (event.key === 'ArrowDown') {
        DOWN_ARROW = true;
    } else if (event.key === 'ArrowLeft') {
        LEFT_ARROW = true;
    } else if (event.key === 'ArrowRight') {
        RIGHT_ARROW = true;
    }
}
setInterval(function() {
    let position = player.getBoundingClientRect();
    if (UP_ARROW) {
        let topCheck = position.top -   1;
        let leftCheck = document.elementFromPoint(position.left, topCheck);
        let rightCheck = document.elementFromPoint(position.right, topCheck);

        if (!leftCheck.classList.contains('wall') && !rightCheck.classList.contains('wall')) {
            playerTop--;
            player.style.top = playerTop + 'px';
        }

        playerMouth.classList = 'up';
    }
    
    else if (DOWN_ARROW) {
        let bottomCheck = position.bottom + 1;
        let leftCheck = document.elementFromPoint(position.left, bottomCheck);
        let rightCheck = document.elementFromPoint(position.right, bottomCheck);

        if (!leftCheck.classList.contains('wall') && !rightCheck.classList.contains('wall')) {
            playerTop++;
            player.style.top = playerTop + 'px';
        }

        playerMouth.classList = 'down';
    }
    
    else if (LEFT_ARROW) {
        let leftCheck = position.left - 1;
        let topCheck = document.elementFromPoint(leftCheck, position.top);
        let bottomCheck = document.elementFromPoint(leftCheck, position.bottom);

        if (!topCheck.classList.contains('wall') && !bottomCheck.classList.contains('wall')) {
            playerLeft--;
            player.style.left = playerLeft + 'px';
        }

        playerMouth.classList = 'left';
    }
    
    else if (RIGHT_ARROW) {
        let rightCheck = position.right + 1;
        let topCheck = document.elementFromPoint(rightCheck, position.top);
        let bottomCheck = document.elementFromPoint(rightCheck, position.bottom);

        if (!topCheck.classList.contains('wall') && !bottomCheck.classList.contains('wall')) {
            playerLeft++;
            player.style.left = playerLeft + 'px';
        }

        playerMouth.classList = 'right';
    }
}, 10);




// Event Listeners for key presses and releases
document.addEventListener('keydown', key_pressed);
document.addEventListener('keyup', key_released);