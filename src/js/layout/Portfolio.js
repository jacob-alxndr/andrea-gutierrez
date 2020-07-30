import React, { Component } from "react";
import FlexContainer from "./FlexContainer";
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import Container from "./Container";
// import { getContent } from "../helpers/getContent";
export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerySets: this.props.galleries,
    };
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.galleries !== this.props.galleries) {
  //     this.setState({ gallerySets: this.props.galleries });
  //   }
  // }

  render() {
    return (
      <div className="Portfolio">
        <Container>
          <FlexContainer direction="row">
            <Header center />
            <ImageGallery
              galleries={this.props.galleries}
              {...this.props.routeProps}
            />
          </FlexContainer>
        </Container>
      </div>
    );
  }
}
