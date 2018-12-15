import React, { Component } from "react";
import { Parallax } from "react-parallax";
import { StyledLandingPage } from "./styled_components/StyledLandingaPage";
class LandingPage extends Component {
  render() {
    return (
      <StyledLandingPage>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require("../../images/LandingPageImage.jpg")}
          bgImageAlt="the dog"
          strength={700}
        >
          <h1 className="landingPageHeader">
            Weirdsley Von
            <br /> Henning’s
            <br />{" "}
            <span className="landingPageSubHeader">
              Twice-Blessed <br />
              Definitely Not Cursed <br />
              Painting Emporium
            </span>
          </h1>
          <div style={{ height: "100vh" }} />
        </Parallax>
      </StyledLandingPage>
    );
  }
}

export default LandingPage;
