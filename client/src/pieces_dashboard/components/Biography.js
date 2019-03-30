import React, { Component } from "react";
import { StyledBiography } from "./styled_components/StyledBiography";

class Biography extends Component {
  render() {
    return (
      <StyledBiography>
        <div className="bio-wrapper">
          <div className="bio-content">
            <h1 className="bioHeader">Who is she?</h1>
            <p className="bio">
              Kelly A. Hanning is an oil painter, installation and performance
              artist, whose work focuses on strict color palettes, female
              sexuality, and modern politics. Her current work seeks to afford
              the viewer the same sense of immersion she feels during the
              process of art making. Melding together elements of painting,
              installation, then appropriating techniques and narrative devices
              from other media and forms of art, she creates transformative
              environments, inviting the viewer to step out of their current
              reality and participate in a dimension of her own creation.
            </p>
          </div>
        </div>
      </StyledBiography>
    );
  }
}

export default Biography;
