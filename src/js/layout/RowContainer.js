import React, { Component } from "react";

export default class RowContainer extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div className="RowContainer">
        <div className="RowContainer__item" ref={this.myRef}>
          {" "}
          {this.props.children}
        </div>
      </div>
    );
  }
}
