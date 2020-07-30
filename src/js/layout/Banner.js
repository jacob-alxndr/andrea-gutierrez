import React, { Component } from "react";

export default class AbsoluteContent extends Component {
  render() {
    const { position, top, bottom, left, right, content } = this.props;
    return (
      <div
        className="Banner"
        style={{
          top: top,
          left: left,
          right: right,
          bottom: bottom,
          position: position,
        }}
      >
        {content}
      </div>
    );
  }
}
