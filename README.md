# Frontend Nanodegree Arcade Game Project
---

## Student Instructions

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## How to Play
1. When the game loads you will receive a prompt to enter degree of game difficulty. Choose from: 1 for easy, 2 for medium and 3 for difficult.
2. Your player will begin at the bottom middle of the game board. Use the `ctrl` key to change characters.
3. Your player should be moved from the grass area at the bottom of the board to the water at the top of the board. You move the player by using the `arrow` keys.
4. You will see bugs travelling from left to right across the board, at various speeds, in the paved area. These are your enemies and should be avoided.

## Scoring
1. Your will increase your game score by one every time you player reaches the water without colliding with an enemy.
2. Every time you collide with an enemy you will lose one point from your game score.

## Win Condition
You will receive a game won message once you reach the water for the tenth time. A pop-up will offer the chance to play a new game.

## Attribution
Much credit to the author of https://github.com/madrisan/js-games/tree/master/frogger. Reading the code there provided inspiration for the areas where I needed to study more in order to complete this project.

## Tips for future students
Pay attention to the way that the coordinates are calculated in this code. I was unable to make a start with progressing this code with the main issue being that I could not even display the board before beginning to start coding the enemy and player. The Math elements were also not covered in any detail in the course to date which will present a real challenge in this project.

## Contributing
CONTRIBUTING.md contains contacts instructions for providing comment/feedback. I do not believe that I have produced the most efficient code possible and would welcome any feedback on alternative approaches to make the code more efficient.
