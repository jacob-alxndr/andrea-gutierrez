import React, { Component } from "react";
import ImageCard from "./ImageCard";
import RowContainer from "../layout/RowContainer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleries: [],
      justifyContent: [],
    };
    this.myElements = [];
  }

  async componentDidMount() {
    this.myElements = this.myElements.map((el) => el.imageRef.current);
    this.myElements.forEach((el) => {
      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: el,
          start: "start 70%",
          minHeight: "10rem",
          end: "bottom 75å%",
          // markers: true,
        },
      });
      tl.from(el, 0.5, {
        opacity: 0,
        y: 20,
        clearProps: "all",
      });
    });
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

            return (
              <RowContainer key={slug}>
                <ImageCard
                  ref={(node) => (this.myElements[i] = node)}
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
                  styles={""}
                  height={{ minHeight: "30rem" }}
                />
              </RowContainer>
            );
          })}
      </div>
    );
  }
}
