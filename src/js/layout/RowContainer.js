import React, { Component } from "react";

export default class RowContainer extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div className="RowContainer" ref={this.myRef}>
        <div className="RowContainer__item"> {this.props.children}</div>
      </div>
    );
  }
}
