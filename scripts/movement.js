// Movement variables, and how pacman movement is handled. Includes processing and general timing functions along this.
let UP_ARROW = false;
let DOWN_ARROW = false; 
let LEFT_ARROW = false; 
let RIGHT_ARROW = false; 
let position = player.getBoundingClientRect();


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
    if(downPressed) {
        let bottomCheck = position.bottom;
        let leftCheck = position.left;
        let rightCheck = position.right;
        
        
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




// Event Listeners for key presses and releases
document.addEventListener('keydown', key_pressed);
document.addEventListener('keyup', key_released);