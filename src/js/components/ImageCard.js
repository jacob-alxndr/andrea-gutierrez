import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { updateDisplay, index, match, history, slug, images } = this.props;
    console.log(images);
    updateDisplay && updateDisplay(index);
    match && history.push(`${match.path}/${slug}`, images);
  }
  render() {
    const { index, display, src, alt, title, year, link } = this.props;

    let url;
    if (link) {
      link.url
        ? (url = (
            <span>
              Collaboration w/{" "}
              <a target="_blank" rel="noopener noreferrer" href={link.url}>
                {link.url}
              </a>
              .
            </span>
          ))
        : (url = "");
    }
    return (
      <div
        index={index}
        onClick={this.handleClick}
        className={
          display
            ? `ImageCard ${this.props.styles} display`
            : `ImageCard ${this.props.styles}`
        }
      >
        <div className="ImageCard__container">
          <img
            // srcSet="./assets/img/img_sm--10.JPG 300w, ./assets/img/img_lg--10.JPG 1000w"
            // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5) 30vw, 1000px"
            alt={alt}
            src={src}
          />
        </div>
        {link && (
          <p className="ImageCard__text">
            {title}, {year}. {url}
          </p>
        )}
      </div>
    );
  }
}
