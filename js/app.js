// Enemies our player must avoid
class Enemy {
    constructor() {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        let numRows = 6;
        let numCols = 5;
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }

    spawn() {
        // set x to start enemy off of the left side of screen
        this.x = -(ctx.canvas.width / this.numCols);
        // set y for random row
        this.y = this.getRandomInt(1, 3) * (ctx.canvas.height / this.numRows);
        // set random speed for enemy
        this.velocity = 100 * this.getRandomInt(1, 4);
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        // Update x coord with velocity over time
        this.x = Math.round(this.x + this.velocity * dt);
        if (this.x > ctx.canvas.width) {
            this.spawn();
        }
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     * This function is explained at http://stackoverflow.com/a/1527820/11926
     */
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
}

// Now write your own player class
let Player = function() {

};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {

};

Player.prototype.render = function() {

};

Player.prototype.handleInput = function() {

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
// Set game difficulty level
let level = 0;
do {
    level = Number(prompt('Select game difficulty.\n' +
                'Please enter number of enemies:\n' +
                '1: for Easy\n' +
                '2: for Medium\n' +
                '3: for Hard'));
} while (level < 1 || level > 3);
let enemies = level + 2;
for (let i = 0; i < enemies; i++) {
    allEnemies.push(new Enemy());
}
// Place the player object in a variable called player
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
