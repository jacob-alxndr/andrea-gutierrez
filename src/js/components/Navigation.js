import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <ul className="Navigation__list">
          <li className="Navigation__item ">
            <NavLink
              exact
              activeClassName="selected"
              to="/"
              className="Navigation__link"
            >
              home
            </NavLink>
          </li>
          <li className="Navigation__item">
            <NavLink
              exact
              activeClassName="selected"
              to="/portfolio"
              className="Navigation__link"
            >
              portfolio
            </NavLink>
          </li>
          <li className="Navigation__item">
            <NavLink
              exact
              activeClassName="selected"
              to="/contact"
              className="Navigation__link"
            >
              about + contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
