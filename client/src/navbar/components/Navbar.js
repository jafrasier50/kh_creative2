import React, { Component } from "react";
import Cookies from "universal-cookie";
import { withRouter } from "react-router";
import { checkAuth } from "../../auth/checkAuth";
import { StyledNavbar } from "../../pieces_dashboard/components/styled_components/StyledNavbar";
import DrawerToggle from "./DrawerToggle";
import AnchorLink from "react-anchor-link-smooth-scroll";

const cookies = new Cookies();

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    cookies.remove("pieces_secret");
    this.props.history.replace("/home");
  };

  login = e => {
    this.props.history.replace("/login");
  };

  render() {
    const { loggedIn } = this.props;
    const currentRoute = window.location.pathname;

    return (
      <div>
        <StyledNavbar>
          <div className="toolbar">
            <nav className="toolbarNavigation">
              <div className="sidebarToggleButton">
                <DrawerToggle click={this.props.drawerClickHandler} />
              </div>
              <div className="toolbarLogo">
                <a href="/home"> KH CREATIVE</a>
              </div>
              <div className="spacer" />
              <div className="toolbarNavigationItems">
                <ul>
                  {(loggedIn === true &&
                    currentRoute === "/pieces_dashboard") ||
                  currentRoute === "/login" ? null : (
                    <React.Fragment>
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
                    </React.Fragment>
                  )}
                  <li>
                    {loggedIn && currentRoute !== "/home" ? (
                      <a href="home">Home</a>
                    ) : null}
                    {loggedIn && currentRoute !== "/pieces_dashboard" ? (
                      <a href="pieces_dashboard">Kelly's Dashboard</a>
                    ) : null}
                    {!loggedIn && currentRoute !== "/login" ? (
                      <button className="navButton" onClick={this.login}>
                        Login
                      </button>
                    ) : null}
                  </li>
                  <li>
                    {loggedIn ? (
                      <button className="navButton" onClick={this.logout}>
                        Logout
                      </button>
                    ) : null}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </StyledNavbar>
      </div>
    );
  }
}

export default withRouter(checkAuth(Navbar));
