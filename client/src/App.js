import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/components/Navbar";
import PiecesView from "./all_pieces/components/PiecesView";
import PiecesDashboardView from "./pieces_dashboard/components/View";
import Login from "./auth/Login";
import SideDrawer from "./navbar/components/SideDrawer";
import Backdrop from "./navbar/components/Backdrop";
import LandingPage from "./pieces_dashboard/components/LandingPage";
import Biography from "./pieces_dashboard/components/Biography";
import Footer from "./pieces_dashboard/components/Footer";
import Contact from "./pieces_dashboard/components/Contact";
import AnchorLink from "react-anchor-link-smooth-scroll";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  closeDrawerAfterLinkIsClicked = () => {
    this.setState({ sideDrawerOpen: false });
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <div className="App" style={{ height: "100%" }}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />

          <SideDrawer
            show={this.state.sideDrawerOpen}
            closeDrawerAfterLinkIsClicked={this.closeDrawerAfterLinkIsClicked}
          />
          {backdrop}
          <main style={{ marginTop: "56px" }}>
            <Route exact path="/home" component={this.visitorView} />
            <Route
              exact
              path="/pieces_dashboard"
              component={PiecesDashboardView}
            />
            <Route exact path="/login" component={Login} />
          </main>
        </div>
      </Router>
    );
  }

  visitorView() {
    return (
      <div>
        <section id="home">
          <LandingPage />
        </section>
        <section id="bio">
          {" "}
          <Biography />
        </section>
        <section id="art">
          <PiecesView />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
