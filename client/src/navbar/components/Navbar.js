import React, { Component } from "react";
import Cookies from "universal-cookie";
import { withRouter } from "react-router";
import { checkAuth } from "../../auth/checkAuth";
import { StyledNavbar } from "../../pieces_dashboard/components/styled_components/StyledNavbar";
import DrawerToggle from "./DrawerToggle";
const cookies = new Cookies();

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

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
    console.log(this.props.drawerClickHandler);
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
                  <li>
                    {loggedIn && currentRoute != "/home" ? (
                      <a href="home">Home</a>
                    ) : null}
                    {loggedIn && currentRoute != "/pieces_dashboard" ? (
                      <a href="pieces_dashboard">Kelly's Dashboard</a>
                    ) : null}
                    {!loggedIn && currentRoute != "/login" ? (
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
