import React, { Component } from "react";
import { StyledFooter } from "./styled_components/StyledFooter";
class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <div className="footer">
          <h1>I am the Footer</h1>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
