import React, { Component } from "react";
import { StyledBiography } from "./styled_components/StyledBiography";
import { Parallax } from "react-parallax";

class Biography extends Component {
  render() {
    return (
      <StyledBiography>
        <div className="bioContent">
          <h1 className="bioHeader">Who is she?</h1>
          <div>
            <p className="bio">
              Kelly A. Hanning is an oil painter, installation and performance
              artist, whose work focuses on strict color palettes, female
              sexuality, and modern politics. Her current work seeks to afford
              the viewer the same sense of immersion she feels during the
              process of art making. Melding together elements of painting,
              installation, then appropriating techniques and narrative devices
              from other media and forms of art, she creates transformative
              environments, inviting the viewer to step out of their current
              reality and participate in a dimension of her own creation
            </p>
          </div>
        </div>
        {/* <div className="kelly">
          <Parallax
            className="bioParallax"
            blur={{ min: -15, max: 15 }}
            bgImage={require("../../images/Kelly.jpg")}
            bgImageAlt="the dog"
            strength={100}
          >
            <h1 className="landingPageHeader" />
            <div style={{ height: "100vh" }} />
          </Parallax>
        </div> */}
      </StyledBiography>
    );
  }
}

export default Biography;
