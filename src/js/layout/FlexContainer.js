import React, { Component } from "react";
export default class FlexContainer extends Component {
  render() {
    // let direction;
    // this.props.direction
    //   ? (direction = {
    //       flexDirection: this.props.direction,
    //       // alignItems: "flex-start",
    //       justifyContent: "center",
    //     })
    //   : (direction = null);
    return (
      <div
        className={`FlexContainer ${this.props.direction} ${this.props.justify}`}
      >
        {this.props.children}
      </div>
    );
  }
}
