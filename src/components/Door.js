import React from "react";
import { Image } from "./Image.js";
import car from "../assets/car.jpg";
import goat from "../assets/goat.jpg";
import closed_door from "../assets/closed_door.png";

export class Door extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const doorNumber = parseInt(e.target.value);
    this.props.onClick(doorNumber);
  }

  render() {
    //Mark the first chosen door as chosen
    if (
      this.props.firstChosenDoor === this.props.name &&
      this.props.doorsPicked === 1
    ) {
      return (
        <div>
          <Image imageUrl={closed_door} altText="is closed" />
          <div>
            <button
              className="door-button"
              value={this.props.name}
              onClick={this.handleClick}
            >
              Stick with your choice?
            </button>
          </div>
        </div>
      );

      //Mark the randomly selected losing door as opened
    } else if (this.props.doorToOpen === this.props.name) {
      return (
        <div>
          <Image imageUrl={goat} altText="is closed" />
          <div>
            <button className="door-button" value={this.props.name}>
              It's not this door...
            </button>
          </div>
        </div>
      );

      //Mark the remaining door as openable
    } else if (
      this.props.firstChosenDoor !== this.props.name &&
      this.props.doorsPicked === 1
    ) {
      return (
        <div>
          <Image imageUrl={closed_door} altText="is closed" />
          <div>
            <button
              className="door-button"
              value={this.props.name}
              onClick={this.handleClick}
            >
              Or pick this one rather?
            </button>
          </div>
        </div>
      );

      //If the second chosen door is the winning one...
    } else if (
      this.props.secondChosenDoor === this.props.winningDoor &&
      this.props.doorsPicked === 2
    ) {
      //...mark the selected door as won...
      if (this.props.secondChosenDoor === this.props.name) {
        return (
          <div>
            <Image imageUrl={car} altText="has a car" />
            <div>
              <button className="door-button">You win!</button>
            </div>
          </div>
        );

        //...and mark the remaining door as losing.
      } else if (this.props.secondChosenDoor !== this.props.name) {
        return (
          <div>
            <Image imageUrl={closed_door} altText="is closed" />
            <div>
              <button className="door-button">It's not this door...</button>
            </div>
          </div>
        );
      }

      //If the second chosen door is NOT the winning one...
    } else if (
      this.props.secondChosenDoor !== this.props.winningDoor &&
      this.props.doorsPicked === 2
    ) {
      //...mark the selected door as lost...
      if (this.props.secondChosenDoor === this.props.name) {
        return (
          <div>
            <Image imageUrl={goat} altText="has a goat" />
            <div>
              <button className="door-button">You lose :(</button>
            </div>
          </div>
        );

        //...and mark the remaining door as the winning door.
      } else if (this.props.secondChosenDoor !== this.props.name) {
        return (
          <div>
            <Image imageUrl={closed_door} altText="is closed" />
            <div>
              <button className="door-button">It was this door.</button>
            </div>
          </div>
        );
      }

      //...Mark the initial state of all doors as openable.
    } else {
      return (
        <div>
          <Image imageUrl={closed_door} altText="is closed" />
          <div>
            <button
              className="door-button"
              value={this.props.name}
              onClick={this.handleClick}
            >
              Choose
            </button>
          </div>
        </div>
      );
    }
  }
}
