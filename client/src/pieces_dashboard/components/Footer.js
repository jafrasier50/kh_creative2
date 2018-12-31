import React, { Component } from "react";
import { StyledFooter } from "./styled_components/StyledFooter";
class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <div className="footer">
          <div className="social-icons">Social Media icons</div>
          <div className="site-information">I am the info</div>
          <div className="credits">
            <p>
              Site Design by
              <a href="Joshfrasier.com">Josh Frasier</a>
            </p>
          </div>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
