import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import { StyledLandingPage } from "./styled_components/StyledLandingaPage";
class LandingPage extends Component {
  render() {
    return (
      <StyledLandingPage>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require("../../images/LandingPageImage.jpg")}
          bgImageAlt="the dog"
          strength={-500}
        >
          <h1 className="landingPageHeader">
            Kelly's <br />
            Sandbox <br />
            for <br />
            "Things"
          </h1>
          <div style={{ height: "13rem" }} />
        </Parallax>
      </StyledLandingPage>
    );
  }
}

export default LandingPage;
