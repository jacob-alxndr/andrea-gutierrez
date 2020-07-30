import React, { Component } from "react";
import Navigation from "./Navigation";
import Counter from "./Counter";
import Banner from "../layout/Banner";
export default class Header extends Component {
  render() {
    const { title, name, counter, center } = this.props;
    const isHome = title && name && counter;
    return (
      <header
        className="Header"
        style={{ justifyContent: center ? "center" : "space-between" }}
      >
        {isHome && <Banner content="welcome" />}
        <div className="Header__content">
          {isHome && (
            <div className="Header__name">
              <span>Andrea Gutierrez</span>
            </div>
          )}
          <Navigation />
        </div>

        {isHome && (
          <Counter
            imageCount={this.props.imageCount}
            currentIndex={this.props.currentIndex}
          />
        )}
      </header>
    );
  }
}
