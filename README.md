# Frontend Nanodegree Arcade Game Project
---

## Student Instructions

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## How to Play
1. When the game loads you will receive a prompt to enter degree of game difficulty. Choose from: 1 for easy, 2 for medium and 3 for difficult.
2. Your player will begin at the bottom middle of the game board.
3. Your player should be moved from the grass area at the bottom of the board to the water at the top of the board. You move the player by using the `arrow` keys.
4. You will see bugs travelling from left to right across the board, at various speeds, in the paved area. These are your enemies and should be avoided.

## Scoring
1. Your will increase your game score by one every time you player reaches the water without colliding with an enemy.
2. Every time you collide with an enemy you will lose one point from your game score.

## Win Condition
You will receive a game won message once you reach the water for the tenth time. A pop-up will offer the chance to play a new game.

## Contributing
CONTRIBUTING.md contains contacts instructions for providing comment/feedback. I do not believe that I have produced the most efficient code possible and would welcome any feedback on alternative approaches to make the code more efficient.

## LICENSE
This code is produced with a [MIT license](https://opensource.org/licenses/MIT).

## Documentation
[jsdoc](http://usejsdoc.org/) documentation is included in the "out" folder within the "js" directory. Open the index.html file within to view the documentation.

## Tips for future students
Follow the logical order provided in the instructions for the project. My approach proceeded as follows:
1. Get the game board displayed on screen.
2. Get the enemies displayed on screen.
3. Get the player displayed on screen.
4. Implement player movement controls.
5. Implement player movement limits.
6. Implement x-axis collision detection and player position reset.
7. Implement y-axis collision detection and player position reset.
8. Implement game score display.
9. Implement game score decrement for collisions.
10. Implement game score increment for player reaching the water.
11. Implement game win condition and message display.

TODO:

12. Implement player sprite change option.
This could not be completed due to a bug preventing the game running if any sprite other than char-boy.png was selected for the player object.
