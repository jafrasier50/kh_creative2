import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/components/Navbar";
import PiecesView from "./all_pieces/components/PiecesView";
import PiecesDashboardView from "./pieces_dashboard/components/View";
import Login from "./auth/Login";
import SideDrawer from "./navbar/components/SideDrawer";
import Backdrop from "./navbar/components/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    console.log("you fuck ass lilly licker");
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
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          <main style={{ marginTop: "64px" }}>
            <Route exact path="/home" component={PiecesView} />
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
}

export default App;
