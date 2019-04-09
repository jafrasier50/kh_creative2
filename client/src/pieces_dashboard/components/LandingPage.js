import React, { Component } from "react";
import { StyledLandingPage } from "./styled_components/StyledLandingaPage";
class LandingPage extends Component {
  render() {
    return (
      <StyledLandingPage>
        <main className="wrapper">
          <section className="section parallax bg1">
            <div className="landing-text">
              <h1>WEIRDSLEY VON HENNING’S</h1>
              <h2>
                Twice-Blessed <br />
                Definitely
                <strong className="def-not-cursed"> Not </strong>
                Cursed
                <br />
                Painting Emporium
              </h2>
            </div>
          </section>
        </main>
      </StyledLandingPage>
    );
  }
}

export default LandingPage;
