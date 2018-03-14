// Enemies our player must avoid
class Enemy {
    constructor() {
        // Variables applied to each of our instances go here
        // The image/sprite for our enemies
        this.sprite = 'images/enemy-bug.png';
        // Initial positional x and y values and velocity are called in the spawn() function
        this.spawn();
    }

    spawn() {
        // set x to start enemy off of the left side of screen
        this.x = -101;
        // set y for random row
        this.y = this.getRandomInt(1, 3) * 83 - 20;
        // set random speed for enemy
        this.enemyVelocity = this.getRandomInt(90, 110) * this.getRandomInt(1, 4);
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        // Update x coord with velocity over time
        this.x = Math.round(this.x + this.enemyVelocity * dt);
        if (this.x > ctx.canvas.width) {
            this.spawn();
        }
    }

    // Draw the enemy on the screen, required method for game
    render() {
        // Check for collision with player sprite
        this.width = this.x + 101;
        if (this.width > player.x + 25 && this.x < player.x +101) {
            if (this.y > player.y - 30 && this.y < player.y + 30) {
                //Reset player position if collision detected
                player.spawn();
            }
        }
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
    this.sprite = 'images/char-boy.png';
    this.spawn();
};

Player.prototype.spawn = function() {
    this.x = 202;
    this.y = 5 * 83 - 8; // 5th row, 83 from engine.js, line 137. 8 is an offset to centre the sprite.
}
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {
    // Something happens here
};

Player.prototype.render = function() {
    // Something happens here
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keycode) {
    // Something happens here
    switch(keycode) {
        case 'ctrl':
            //
            break;
        case 'left':
            if (this.x > 0) {
                this.x = this.x - 101;
            }
            break;
        case 'up':
            if (this.y > 0) {
                this.y = this.y - 83;
            }
            break;
        case 'right':
            if (this.x < 404) {
                this.x = this.x + 101;
            }
            break;
        case 'down':
            if (this.y < 4 * 83) {
                this.y = this.y + 83;
            }
            break;
        default:
            return;
    }
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
let enemies = level;
for (let i = 0; i < enemies; i++) {
    allEnemies.push(new Enemy());
}
// Place the player object in a variable called player
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        17: 'ctrl', // keycode identified using website, keycode.info
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
