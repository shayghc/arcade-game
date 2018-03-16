// Global variables for app.js
let colWidth = 101;
let rowHeight = 83;
let total = 0;


// Victory condition
let victory = function() {
    let refreshScreen = confirm('Congratulations\n\n' +
                                'You win!\n\n' +
                                'Play again?');
    if (refreshScreen) {
        setTimeout('location.reload(true);',500);
    }
};

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
        this.x = -colWidth;
        // set y for random row
        this.y = this.getRandomInt(1, 3) * rowHeight - 20;
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
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     * This function is explained at http://stackoverflow.com/a/1527820/11926
     */
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
}


// Now write your own player class.
// "class" not used as this is for a single entity.
let Player = function() {
    this.sprite = 'images/char-boy.png';
    this.spawn();
};

Player.prototype.spawn = function() {
    this.x = colWidth * 2;
    // 5th row, 83 from engine.js, line 137 (rowHeight). 8 is an offset to centre the sprite.
    this.y = 5 * rowHeight - 8;
}
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {
    // Something happens here
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

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keycode) {
    switch(keycode) {
        case 'ctrl':
            // Not used at this stage
            break;
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
        17: 'ctrl', // keycode identified using website, keycode.info
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
