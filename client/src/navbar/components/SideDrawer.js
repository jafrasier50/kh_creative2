import React, { Component } from "react";
import { StyledSideDrawer } from "../../pieces_dashboard/components/styled_components/StyledSideDrawer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Instagram from "../../images/instagram.png";
import Linkedin from "../../images/linkedin.png";

// const closeDrawerAfterLinkIsClicked = () => {
//   return (drawerClasses = "sideDrawer open");
// };

class SideDrawer extends Component {
  render() {
    let drawerClasses = ["sideDrawer"];
    if (this.props.show) {
      drawerClasses = "sideDrawer open";
    }
    console.log("this is props", this.props);
    return (
      <StyledSideDrawer>
        <nav className={drawerClasses}>
          <ul>
            <li>
              <AnchorLink
                offset={() => 56}
                href="#home"
                onClick={this.props.closeDrawerAfterLinkIsClicked}
              >
                HOME
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset={() => 56}
                href="#bio"
                onClick={this.props.closeDrawerAfterLinkIsClicked}
              >
                BIO
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset={() => 56}
                href="#art"
                onClick={this.props.closeDrawerAfterLinkIsClicked}
              >
                ART
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset={() => 56}
                href="#contact"
                onClick={this.props.closeDrawerAfterLinkIsClicked}
              >
                CONTACT
              </AnchorLink>
            </li>
            <div className="socialIcons">
              <a href="https://www.instagram.com/kelly_a_hanning_art/?hl=en">
                <img
                  className="icon"
                  src={require("../../images/instagram.png")}
                />
              </a>
              <a href="https://www.linkedin.com/in/kelly-a-hanning-15623897">
                <img
                  className="icon"
                  src={require("../../images/linkedin.png")}
                />
              </a>
            </div>
          </ul>
        </nav>
      </StyledSideDrawer>
    );
  }
}

export default SideDrawer;
