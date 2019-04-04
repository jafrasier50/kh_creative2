import React, { Component } from "react";
import { StyledFooter } from "./styled_components/StyledFooter";

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <div className="footer">
          <div className="social-icons-div">
            <h1>You've reached the bottom,</h1>{" "}
            <h4>but here's some other cool places</h4>
            <div className="socialIcons">
              <a href="https://www.instagram.com/kelly_a_hanning_art/?hl=en">
                <img
                  className="icon"
                  src={require("../../images/instagram.png")}
                  alt=""
                />
              </a>
              <a href="https://www.linkedin.com/in/kelly-a-hanning-15623897">
                <img
                  className="icon"
                  src={require("../../images/linkedin.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="credits">
            <p>
              Design by
              <a href="http://joshfrasier.com"> Josh Frasier</a> | 2019
            </p>
          </div>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
