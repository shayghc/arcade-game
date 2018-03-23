# Frontend Nanodegree Arcade Game Project
---

## How to Play
1. Load index.html in your favourite browser.
2. When the game loads you will receive a prompt to enter degree of game difficulty. Choose from: 1 for easy, 2 for medium and 3 for difficult.
3. Your player will begin at the bottom middle of the game board. Use the `space` bar to change the player sprite.
4. Your player should be moved from the grass area at the bottom of the board to the water at the top of the board. You move the player by using the `arrow` keys.
5. You will see bugs travelling from left to right across the board, at various speeds, in the paved area. These are your enemies and should be avoided.

## Scoring
1. Your will increase your game score by one every time you player reaches the water without colliding with an enemy.
2. Every time you collide with an enemy you will lose one point from your game score (Zero is the minimum, the score will not progress to negative values).

## Win Condition
You will receive a game won message once you reach the water for the tenth time. A pop-up will offer the chance to play a new game.

## Contributing
**CONTRIBUTING.md** contains contacts instructions for providing comment/feedback. I do not believe that I have produced the most efficient code possible and would welcome any feedback on alternative approaches to make the code more efficient.

## LICENSE
This code is produced with a [MIT license](https://opensource.org/licenses/MIT).

## Documentation
[jsdoc](http://usejsdoc.org/) documentation is included in the **"out"** folder within the **"js"** directory. Open the **index.html** file within to view the documentation.

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
12. Implement player sprite change option - This required adding the images to **Resources.load()** in the **engine.js** file.

**TODO:**

13. Produce CSS modals to replace the use of the JS confirm, prompt and alert modals.
