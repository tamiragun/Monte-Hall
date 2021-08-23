import React from "react";

export class RestartButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  //Call the parent's event handler here
  handleClick(e) {
    this.props.newGame();
  }

  //Call the child's event handler in the
  render() {
    return (
      <button className="restart-button" onClick={this.handleClick}>
        Restart
      </button>
    );
  }
}
