import React, { Component } from "react";
import FlexContainer from "./FlexContainer";
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import Container from "./Container";

// import { getContent } from "../helpers/getContent";
export default class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <Container>
          <FlexContainer direction="row">
            <Header center />
            {this.props.galleries.length ? (
              <ImageGallery
                galleries={this.props.galleries}
                {...this.props.routeProps}
              />
            ) : null}
          </FlexContainer>
        </Container>
      </div>
    );
  }
}
