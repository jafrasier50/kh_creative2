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
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />;
    }

    return (
      <Router>
        <div className="App" style={{ height: "100%" }}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          {sideDrawer}
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
