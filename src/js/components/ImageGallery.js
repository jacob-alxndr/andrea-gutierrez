import React, { Component } from "react";
import ImageCard from "./ImageCard";
import RowContainer from "../layout/RowContainer";
export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleries: [],
      justifyContent: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.galleries !== this.props.galleries) {
      this.setState({ galleries: this.props.galleries });
    }
  }
  render() {
    const { match, location, history } = this.props;

    return (
      <div className="ImageGallery">
        {this.props.galleries
          .sort((a, b) => (a.position > b.position ? 1 : -1))
          .map((gallery, i) => {
            const { heroSrc, title, slug, year, alt, link, images } = gallery;
            // console.log(images);
            return (
              <RowContainer key={slug}>
                <ImageCard
                  index={i}
                  key={i}
                  src={heroSrc}
                  title={title}
                  slug={slug}
                  year={year}
                  alt={alt}
                  link={link}
                  images={images}
                  match={match}
                  location={location}
                  history={history}
                />
              </RowContainer>
            );
          })}
      </div>
    );
  }
}
