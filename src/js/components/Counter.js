import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <p>
          featured {this.props.currentIndex + 1} / {this.props.imageCount}
        </p>
      </div>
    );
  }
}
