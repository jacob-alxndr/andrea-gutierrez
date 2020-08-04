import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getContent } from "./helpers/getContent";
import Home from "./layout/Home";
import Portfolio from "./layout/Portfolio";
import Contact from "./layout/Contact";
import Modal from "./components/Modal";
import Container from "./layout/Container";
import FlexContainer from "./layout/FlexContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerySets: [],
      imageSet: [],
      currentIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(i) {
    this.setState({ currentIndex: i });
  }
  async componentDidMount() {
    // console.log("App", "Mount");
    const data = await getContent();
    const imageSet = data.filter((card) => card.type === "post-gallery");
    const galleries = imageSet.map((set) => {
      const { title, images, link, year } = set.data;

      const gallerySet = {
        title: title[0].text,
        heroSrc: set.data["hero-image"].url,
        alt: set.data["hero-image"].alt,
        year,
        link,
        images: images.map((img) => img.image),
        slug: set.uid,
        position: set.data.position,
      };
      return gallerySet;
    });
    const imageCards = data.filter((card) => card.type === "post-imagecard");
    const images = imageCards.reverse().map((image) => ({
      url: image.data["desktop-image"].url,
      mobileSrc: image.data["mobile-image"].url,
      alt: image.data.title[0].text,
      year: image.data.year[0] ? image.data.year[0].text : "",
      link: image.data.link.url,
    }));
    this.setState({ gallerySets: galleries, imageSet: images });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home imageSet={this.state.imageSet} />}
            />
            <Route
              key="portfolio"
              exact
              path="/portfolio"
              render={(routeProps) => (
                <Portfolio
                  routeProps={routeProps}
                  galleries={this.state.gallerySets}
                />
              )}
            />
            <Route
              key="modal"
              exact
              path="/portfolio/:id"
              render={(routeProps) => (
                <Modal
                  history={routeProps.history}
                  imageSet={routeProps.location.state}
                  updateIndex={this.updateIndex}
                />
              )}
            />
            <Route exact key="contact" path="/contact" component={Contact} />
            <Route
              component={
                <Container>
                  <FlexContainer direction="row">
                    <h1>404</h1>
                  </FlexContainer>
                </Container>
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
