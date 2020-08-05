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
    this.myTriggers = [];
  }

  async componentDidMount() {
    this.myTriggers = this.myTriggers.map((el) => el.myRef.current);
    this.myElements = this.myElements.map((el) => el.imageRef.current);
    this.myElements.forEach((el, i) => {
      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: this.myTriggers[i],
          start: "start 65%",
          end: "start 70%",
          // scrub: 2,

          // markers: true,
        },
      });
      tl.from(
        el,
        2,

        {
          opacity: 0,
          // skewX: 30,
          // scale: 2,
        }
      );
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
            const {
              heroSrc,
              title,
              slug,
              year,
              alt,
              link,
              linkTitle,
              images,
            } = gallery;

            return (
              <RowContainer
                key={slug}
                ref={(node) => (this.myTriggers[i] = node)}
              >
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
                  linkTitle={linkTitle}
                  height={{ minHeight: "30rem" }}
                />
              </RowContainer>
            );
          })}
      </div>
    );
  }
}
