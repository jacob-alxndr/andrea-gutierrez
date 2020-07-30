import React, { Component } from "react";

export default class RowContainer extends Component {
  render() {
    return (
      <div className="RowContainer">
        <div className="RowContainer__item"> {this.props.children}</div>
      </div>
    );
  }
}
