/**
 * @fileOverview Arcade Game project for Udacity FEWD Nanodegree course.
 * @author Seamus Connolly <sghconnolly@gmail.com">
 * @version 2.0
 * @license MIT license included in the LICENSE.txt file.
 * @see jsdoc documentation is included in the "out" directory which is in the js directory.
 *
 * TODO:
 * A bug encountered in writing this code is that in Chrome, no sprite except "char-boy" would work.
 * Selecting any other image for the player sprite crashed the game.
 */

// Global variables for app.js
let colWidth = 101;
let rowHeight = 83;
let total = 0;

/**
 * @function victory
 * @description Generates a victory condition message with an option to play another game.
 */
let victory = function() {
    let refreshScreen = confirm('Congratulations\n\n' +
                                'You win!\n\n' +
                                'Play again?');
    if (refreshScreen) {
        setTimeout('location.reload(true);',500);
    } else {
        alert("Thank you for playing!");
    }
};


/**
 * @class
 * @classdesc Creates a new enemy object when called with the new keyword.
 */
class Enemy {
    constructor() {
        // Variables applied to each of our instances go here
        // The image/sprite for our enemies
        this.sprite = 'images/enemy-bug.png';
        // Initial positional x and y values and velocity are called in the spawn() function
        this.spawn();
    }

    /**
     * @function spawn
     * @description Sets the initial position of an enemy object, off screen to the left and on a random row and velocity.
     */
    spawn() {
        // set x to start enemy off of the left side of screen
        this.x = -colWidth;
        // set y for random row
        this.y = this.getRandomInt(1, 3) * rowHeight - 20;
        // set random speed for enemy
        this.enemyVelocity = this.getRandomInt(90, 110) * this.getRandomInt(1, 4);
    }

    /**
     * @function update
     * @description Calculates movement of the enemy object and resets position if object gets to edge of screen.
     * @param {number} dt The dt parameter will ensure the game runs at the same speed for all computers: a time delta between ticks.
     */
    update(dt) {
        // Update x coord with velocity over time
        this.x = Math.round(this.x + this.enemyVelocity * dt);
        if (this.x > ctx.canvas.width) {
            this.spawn();
        }
    }

    // Draw the enemy on the screen, required method for game
    /**
     * @function render
     * @description 1 Generates the sprite image on the game board.
     * @description 2 Detects collisions between an enemy object and the player object, then resets the player position.
     * @description 3 Generates the score in the bottom left of the game board.
     */
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        // Check for collision with player sprite
        this.width = this.x + colWidth;
        if (this.width > player.x + 25 && this.x < player.x + colWidth) {
            if (this.y > player.y - 30 && this.y < player.y + 30) {
                //Reset player position if collision detected
                setTimeout(function() {
                    if (total > 0) {
                        total--;
                    }
                    player.spawn();
                }, 10);
            }
        }
        ctx.font = "italic bold 20px Pangolin";
        ctx.fillText("Score: " + total.toString(), 5, 570);
    }

    /**
     * @function getRandomInt
     * @description Returns a random integer between min (inclusive) and max (inclusive)
     * @param {number} min Lowest integer value for calculating a random number within a range.
     * @param {number} max Highest integer value for calculating a random number within a range.
     * @see This function is explained at http://stackoverflow.com/a/1527820/11926
     */
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
}


/**
 * @class
 * @classdesc Creates the player object when called with the new keyword. Class keyword not used as player is a single entity.
 */
let Player = function() {
    this.sprite = 'images/char-boy.png';
    this.spawn();
};

/**
 * @function spawn
 * @description Calculates the player initial position.
 */
Player.prototype.spawn = function() {
    this.x = colWidth * 2;
    // 5th row, 83 from engine.js, line 137 (rowHeight). 8 is an offset to centre the sprite.
    this.y = 5 * rowHeight - 8;
}

/**
 * @function update
 * @description Resets player position at top of the board. Calls the victory func if win condition is met.
 */
Player.prototype.update = function() {
    if (player.y === -8) {
        setTimeout(function() {
            total++;
            if (total === 10) {
                victory();
            }
            player.spawn();
        }, 10);
    }
};

/**
 * @function renderEntities
 * @description Generates the player sprite on the game board.
 */
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
 * @function handleInput
 * @description Provides player positional information based on user keyboard input.
 * @param {string} keycode Event listener code for player movement user input
 * @this Refers to the player object
 */
Player.prototype.handleInput = function(keycode) {
    switch(keycode) {
        case 'left':
            if (this.x > 0) {
                this.x = this.x - colWidth;
            }
            break;
        case 'up':
            if (this.y > 0) {
                this.y = this.y - rowHeight;
            }
            break;
        case 'right':
            if (this.x < colWidth * 4) {
                this.x = this.x + colWidth;
            }
            break;
        case 'down':
            if (this.y < 4 * rowHeight) {
                this.y = this.y + rowHeight;
            }
            break;
        default:
            return;
    }
};


// Declare array to contain enemy objects
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
// Variable adjustment to generate correct number of enemies for difficulty level selection.
let enemies = level + 2;
// Generate enemy objects and push to the allEnemies array.
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
