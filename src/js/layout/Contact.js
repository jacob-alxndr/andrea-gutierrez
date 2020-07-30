import React, { Component } from "react";
import FlexContainer from "./FlexContainer";
import Paragraph from "./Paragraph";
import Banner from "./Banner";
import Header from "../components/Header";
import Container from "./Container";
export default class Contact extends Component {
  render() {
    return (
      <Container>
        <FlexContainer direction="row">
          <Header center />
          <div
            className="Contact__container"
            style={{ flex: 5, position: "relative" }}
          >
            <FlexContainer direction="column" justify="center">
              <Banner
                position="absolute"
                top={0}
                right={0}
                content="thank you"
              />

              <Paragraph>
                <p>
                  I am a film photographer based in the Bay Area. I focused on
                  conceptualizing and directing photo shoots whether they are
                  personal or commercial projects. My work is not limited to,
                  but mainly inspired by composition, color and expression. I am
                  self-represented and take clients on a regular basis.
                </p>
                <p>
                  email:
                  <a
                    href="mailto:gtzs.andrea@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gtzs.andrea@gmail.com
                  </a>
                </p>
                <p>
                  instagram:
                  <a
                    href="https://www.instagram.com/_agutierrezs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @_agutierrezs
                  </a>
                </p>
              </Paragraph>
            </FlexContainer>
          </div>
        </FlexContainer>
      </Container>
    );
  }
}
