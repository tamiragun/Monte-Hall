# Monty Hall

This was an assignment for the React portion of my coding bootcamp. It is a visual simulation of the [Monte Hall](https://en.wikipedia.org/wiki/Monty_Hall_problem) problem in statistics, which originally was formulated as:

> "Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?"

Most people think that it is best to stick with your original choice, or that there is a 50-50 chance that the car will be behind it. However, the winning door will in fact be the opposite of the initially selected door about 2/3rds of the time.

Check out this project to see for yourself!

**Stack used**: JavaScript - React - CSS

## The brief

These were the detailed instructions for the assignment:

- Create a React app that simulates the Monty Hall problem:
- The user should be shown three doors that they can click. One of the three doors is a winning door, and the other two are losing doors. I.e. the user wishes to pick the winning door, but which one is unknown (random). You can put a pot of gold behind the winning door, or whatever you choose as the prize.
- When the user clicks on a door it should be marked selected. It should not be opened yet.
- Following this, one of the other two doors that is a losing door should be opened. I.e. at this point one door is selected, one losing door is open, and one door is closed.
- The user must now be allowed to open either one of the two closed doors. This is their final decision.
- Their chosen door should open to reveal whether it is the winning door or not.
- The user must be able to reset the game at any time and start over.

## My contribution

Most of the files and folders in this repository are React-generated files. The code I wrote can be found in:

- /src/components
- The main component with the game logic is /src/components/game.js.

## How to install this project

1. Clone the repository on Github into a directory of your choice.
2. If you don't already have Npm installed, go ahead and do that first.
3. Navigate to the directory where you saved the repository, and open a new terminal window. Type `npm install` to get the node modules on your local computer.
4. Type `npm start` to get the app up and running - it should open in a new browser tab.

## Credits

I got the images from https://www.rapidinsight.com/blog/the-monty-hall-problem-demystified/, which also has a great explanation of the statistics behind the Monte Hall problem.
