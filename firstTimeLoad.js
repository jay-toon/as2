function initialise() {
    // Check if the user has visited the site before
    if (localStorage.getItem('firstTimeLoad') === null) {
        // If not, set the firstTimeLoad key to false
        localStorage.setItem('firstTimeLoad', 'false');
        localStorage.setItem('scores', [['Chris', 500],['John', 300],['Jane', 100]]);
        localStorage.setItem('theme', 'dark');
        localStorage.setItem('muted', 'on');
        localStorage.setItem('difficulty', 'easy');
        localStorage.setItem('controls', 'arrows');
        localStorage.setItem('language', 'english');
        localStorage.setItem('volume', '50');
    }
}

// Call the initialise function
initialise();