import React from "react";
import { RestartButton } from "./RestartButton.js";
import { Door } from "./Door.js";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winningDoor: 0,
      doorsPicked: 0,
      doorsArray: [1, 2, 3],
      doorToOpen: 0,
      firstChosenDoor: 0,
      secondChosenDoor: 0,
    };
    this.onClick = this.onClick.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  //Choose a random winning door upon mount
  componentDidMount() {
    this.setState({ winningDoor: pickRandomDoor() });
  }

  //Event handler for when a user clicks on one of the door chosing buttons
  onClick(doorNumber) {
    //If this is the first door being picked, do different actions than if the
    //first door is already picked
    if (this.state.doorsPicked === 0) {
      //Update Door's props to show that it is marked
      this.setState({ firstChosenDoor: doorNumber });
      //Remove this door from the list of doors, so that there are only two
      //doors left in the array
      this.setState({
        doorsArray: removeDoorFromArray(doorNumber, this.state.doorsArray),
      });
      //Choose one of the remaining doors:
      const index = Math.floor(Math.random() * 2);
      //Check if the door at the randomly generated index is a losing door:
      if (this.state.doorsArray[index] !== this.state.winningDoor) {
        this.setState({ doorToOpen: this.state.doorsArray[index] });
        //If it isn't, choose the door at the other index. At this point
        //there will only be two items in the array anyway.
      } else {
        this.setState({
          doorToOpen: this.state.doorsArray[Math.abs(index - 1)],
        });
      }
      //Increment the number of doorspicked
      this.setState({ doorsPicked: this.state.doorsPicked + 1 });

      //If this is the first door being picked, the actions are slightly different
    } else if (this.state.doorsPicked === 1) {
      //Set second chosen door.
      this.setState({ secondChosenDoor: doorNumber });

      //Increment the number of doorspicked
      this.setState({ doorsPicked: this.state.doorsPicked + 1 });

      //If a second door has been chosen, the game has ended, so the game
      //should be rest if anything else is clicked.
    }
  }

  //Event handler for when a user clicks on the reset game button
  newGame() {
    this.setState({
      winningDoor: pickRandomDoor(),
      doorsPicked: 0,
      doorsArray: [1, 2, 3],
      doorToOpen: 0,
      firstChosenDoor: 0,
      secondChosenDoor: 0,
    });
  }

  render() {
    //Pass state down as props
    return (
      <div>
        <h1>Monty Hall</h1>
        <p>
          Behind one of these three doors is a car. Behind the other two doors
          are goats. Start the game by choosing one door. What are your odds of
          winning a car vs getting a goat? After you have made your choice,
          we'll open one of the other doors (but not the winning one).
        </p>
        <p>
          Now choose again: either the door you chose in the first round, or the
          remaining closed door. What are your odds of winning a car vs getting
          a goat now?
        </p>
        <div className="doors">
          <div className="door">
            <h4>Door 1</h4>
            <div>
              <Door
                name={1}
                winningDoor={this.state.winningDoor}
                firstChosenDoor={this.state.firstChosenDoor}
                doorToOpen={this.state.doorToOpen}
                secondChosenDoor={this.state.secondChosenDoor}
                doorsPicked={this.state.doorsPicked}
                onClick={this.onClick}
              />
            </div>
          </div>
          <div className="door">
            <h4>Door 2</h4>
            <Door
              name={2}
              winningDoor={this.state.winningDoor}
              firstChosenDoor={this.state.firstChosenDoor}
              doorToOpen={this.state.doorToOpen}
              secondChosenDoor={this.state.secondChosenDoor}
              doorsPicked={this.state.doorsPicked}
              onClick={this.onClick}
            />
          </div>
          <div className="door">
            <h4>Door 3</h4>
            <Door
              name={3}
              winningDoor={this.state.winningDoor}
              firstChosenDoor={this.state.firstChosenDoor}
              doorToOpen={this.state.doorToOpen}
              secondChosenDoor={this.state.secondChosenDoor}
              doorsPicked={this.state.doorsPicked}
              onClick={this.onClick}
            />
          </div>
        </div>
        <div>
          <RestartButton newGame={this.newGame} />
        </div>
      </div>
    );
  }
}

//Helper method to pick a random door number
const pickRandomDoor = () => {
  return Math.ceil(Math.random() * 3);
};

//Helper method to remove the doorNumber from the array
const removeDoorFromArray = (doorNumber, array) => {
  let copyOfArray = array;
  const index = array.indexOf(doorNumber);
  if (index > -1) {
    copyOfArray.splice(index, 1);
  }
  return copyOfArray;
};
