import React from "react";

export class Image extends React.Component {
  render() {
    //The image url will be passed as a prop by the parent
    return (
      <img src={this.props.imageUrl} alt={"door that " + this.props.altText} />
    );
  }
}
