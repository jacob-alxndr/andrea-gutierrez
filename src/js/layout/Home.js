import React, { Component } from "react";
import Header from "../components/Header";
import Lightbox from "../components/Lightbox";
import Container from "./Container";
import FlexContainer from "./FlexContainer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      imageSet: this.props.imageSet,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(i) {
    this.setState({ currentIndex: i });
  }

  render() {
    return (
      <div className="Home">
        <Container>
          <FlexContainer direction="row">
            <Header
              title
              name
              counter
              imageCount={this.props.imageSet.length}
              currentIndex={this.state.currentIndex}
            />
            <Lightbox
              imageSet={this.props.imageSet}
              updateIndex={this.updateIndex}
            />
          </FlexContainer>
        </Container>
      </div>
    );
  }
}
