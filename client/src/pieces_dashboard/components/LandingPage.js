import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import { StyledLandingPage } from "./styled_components/StyledLandingaPage";
class LandingPage extends Component {
  render() {
    return (
      <StyledLandingPage>
        <Parallax className="landingPage" strength={300}>
          <div>Use the background component for custom elements</div>
          <Background className="custom-bg">
            <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
          </Background>
        </Parallax>
        ;
      </StyledLandingPage>
    );
  }
}

export default LandingPage;
