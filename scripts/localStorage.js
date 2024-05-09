function submitScore(username, score) {
    let scores = JSON.parse(localStorage.getItem('scores')) || [username, score];
    localStorage.setItem('scores', JSON.stringify(scores));
}

function changeTheme() {
    localStorage.getItem(theme) === "dark" ? light : dark;
}

function mute() {
    localStorage.getItem(muted) === "on" ? off : on;
}

function changeDifficulty() {
    localStorage.getItem(difficulty) === "easy" ? medium : hard;
}

function changeControls() {
    localStorage.getItem(controls) === "arrows" ? wasd : arrows;
}

function changeLanguage() {
    localStorage.getItem(language) === "english" ? french : english;
}

function changeVolume() {
    localStorage.getItem(volume) = document.getElementById('volume').value;
}