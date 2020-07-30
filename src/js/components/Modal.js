import React, { Component } from "react";
import Lightbox from "./Lightbox";
import Container from "../layout/Container";
import FlexContainer from "../layout/FlexContainer";
export default class Modal extends Component {
  render() {
    const { imageSet, updateIndex } = this.props;
    return (
      <div className="Modal">
        <Container>
          <FlexContainer direction="row">
            <Lightbox imageSet={imageSet} isModal updateIndex={updateIndex} />
          </FlexContainer>
        </Container>
      </div>
    );
  }
}
