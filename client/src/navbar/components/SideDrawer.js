import React, { Component } from "react";
import { StyledSideDrawer } from "../../pieces_dashboard/components/styled_components/StyledSideDrawer";
class SideDrawer extends Component {
  render() {
    let drawerClasses = ["sideDrawer"];
    if (this.props.show) {
      drawerClasses = "sideDrawer open";
    }
    return (
      <StyledSideDrawer>
        <nav className={drawerClasses}>
          <ul>
            <li>
              <a href="/home">HOME</a>
            </li>
            <li>
              <a href="/home">BIO</a>
            </li>
            <li>
              <a href="/home">ART</a>
            </li>
            <li>
              <a href="/home">CONTACT</a>
            </li>
          </ul>
        </nav>
      </StyledSideDrawer>
    );
  }
}

export default SideDrawer;
