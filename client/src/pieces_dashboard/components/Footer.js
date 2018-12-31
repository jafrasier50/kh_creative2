import React, { Component } from "react";
import { StyledFooter } from "./styled_components/StyledFooter";
import { SocialIcon } from "react-social-icons";

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <div className="footer">
          <div className="social-icons-div">
            <h1>You've reached the bottom.</h1>{" "}
            <h4>here's some other cool places</h4>
            <ul className="social-icons">
              <li className=".social-icon-items">
                <SocialIcon
                  url="https://www.instagram.com/kelly_a_hanning_art/"
                  style={{ height: 35, width: 35 }}
                />
              </li>
              <li className=".social-icon-items">
                <SocialIcon
                  url="https://www.linkedin.com/in/kelly-a-hanning-15623897"
                  style={{ height: 35, width: 35 }}
                />
              </li>
              <li className=".social-icon-items">
                <SocialIcon
                  url="http://twitter.com/jaketrent"
                  style={{ height: 35, width: 35 }}
                />
              </li>
            </ul>
          </div>
          <div className="credits">
            <p>
              Site Design by
              <a href="joshfrasier.com">Josh Frasier</a>
            </p>
          </div>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
