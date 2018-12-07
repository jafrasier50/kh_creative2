import React, { Component } from "react";
import { StyledSideDrawer } from "../../pieces_dashboard/components/styled_components/StyledSideDrawer";
class SideDrawer extends Component {
  render() {
    return (
      <StyledSideDrawer>
        <nav className="sideDrawer">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">BIO</a>
            </li>
            <li>
              <a href="/">ART</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </nav>
      </StyledSideDrawer>
    );
  }
}

export default SideDrawer;
