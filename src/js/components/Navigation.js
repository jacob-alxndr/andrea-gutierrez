import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: ["home", "portfolio", "contact"],
    };
    this.myElements = [];
    this.tl = gsap.timeline({
      paused: true,
    });
  }
  componentDidMount() {
    this.tl
      .from(this.myElements, 0.4, {
        y: 20,
        // opacity: 0,
        stagger: { amount: 0.4 },
      })
      .play();
  }
  render() {
    return (
      <nav className="Navigation">
        <ul className="Navigation__list">
          {this.state.navLinks.map((link, i) => {
            if (link === "home") {
              return (
                <li
                  className="Navigation__item "
                  key={`${link}`}
                  // ref={(node) => (this.myElements[i] = node)}
                >
                  <NavLink
                    exact
                    activeClassName="selected"
                    to="/"
                    ref={(node) => (this.myElements[i] = node)}
                  >
                    {link}
                  </NavLink>
                </li>
              );
            } else if (link === "contact") {
              return (
                <li
                  className="Navigation__item"
                  key={`${link}`}
                  // ref={(node) => (this.myElements[i] = node)}
                >
                  <NavLink
                    exact
                    activeClassName="selected"
                    to={`/${link}`}
                    ref={(node) => (this.myElements[i] = node)}
                  >
                    {`about + ${link}`}
                  </NavLink>
                </li>
              );
            } else {
              return (
                <li
                  className="Navigation__item"
                  key={`${link}`}
                  // ref={(node) => (this.myElements[i] = node)}
                >
                  <NavLink
                    exact
                    activeClassName="selected"
                    to={`/${link}`}
                    ref={(node) => (this.myElements[i] = node)}
                  >
                    {link}
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    );
  }
}
