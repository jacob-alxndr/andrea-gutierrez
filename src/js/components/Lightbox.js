import React, { Component } from "react";
import ImageCard from "./ImageCard";

export default class Lightbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: [],
      yAxis: 0,
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.handleDirection = this.handleDirection.bind(this);
  }

  componentDidMount() {
    // console.log("Lightbox", "Mount");

    const displayedList = Array.from({
      length: this.props.imageSet.length,
    }).map((img, i) => (i === 0 ? true : false));
    this.setState({ isDisplayed: displayedList });
    document.addEventListener("keydown", this.handleDirection);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.imageSet !== this.props.imageSet) {
      const displayedList = Array.from({
        length: this.props.imageSet.length,
      }).map((img, i) => (i === 0 ? true : false));
      this.setState({ isDisplayed: displayedList });
    }
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleDirection);
  }
  handleDirection(e) {
    const direction = e.currentTarget.innerText;
    const index = this.state.isDisplayed.findIndex((i) => i === true);
    if (e.code === "ArrowLeft" || direction === "prev") {
      this.updateDisplay(index, true);
    } else if (e.code === "ArrowRight" || direction === "next") {
      this.updateDisplay(index);
    } else {
      return false;
    }
  }
  updateDisplay(index, back = false) {
    const newDisplayed = this.state.isDisplayed.map((img) => false);
    if (back) {
      if (index - 1 < 0) {
        newDisplayed[this.state.isDisplayed.length - 1] = true;
      } else if (index - 1 >= 0) {
        console.log("else if");
        newDisplayed[index - 1] = true;
      }
    } else if (back === false) {
      if (index + 1 > this.state.isDisplayed.length - 1) {
        newDisplayed[0] = true;
      } else if (index + 1 <= this.state.isDisplayed.length - 1) {
        newDisplayed[index + 1] = true;
      }
    }
    this.setState({ isDisplayed: newDisplayed }, function () {
      const index = this.state.isDisplayed.findIndex((i) => i === true);
      this.props.updateIndex(index);
    });
  }

  render() {
    const { isDisplayed } = this.state;
    let lightBox;
    this.props.isModal
      ? (lightBox = (
          <div className="Lightbox">
            <button
              className="button button--close"
              onClick={this.props.history.goBack}
            >
              close
            </button>
            <button
              className="button button--prev"
              onClick={this.handleDirection}
            >
              prev
            </button>
            <div className="Lightbox__container" tabIndex={0}>
              {this.props.imageSet.map((img, i) => {
                return (
                  <ImageCard
                    styles={"home"}
                    index={i}
                    updateDisplay={this.updateDisplay}
                    key={i}
                    src={img.url}
                    alt={img.alt}
                    display={isDisplayed[i]}
                    images={img.images}
                  />
                );
              })}
            </div>
            <button
              className="button button--next"
              onClick={this.handleDirection}
            >
              next
            </button>
          </div>
        ))
      : (lightBox = (
          <div className="Lightbox">
            <div className="Lightbox__container" tabIndex={0}>
              {this.props.imageSet.map((img, i) => {
                return (
                  <ImageCard
                    styles={"home"}
                    index={i}
                    updateDisplay={this.updateDisplay}
                    key={i}
                    src={img.url}
                    alt={img.alt}
                    display={isDisplayed[i]}
                    images={img.images}
                  />
                );
              })}
            </div>
          </div>
        ));

    return lightBox;
  }
}
