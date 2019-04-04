import React, { Component } from "react";
import PiecesDashboard from "./PiecesDashboard";
// import Cookies from "universal-cookie";
import { checkAuth } from "../../auth/checkAuth";
// const cookies = new Cookies();

class PiecesDashboardView extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        {loggedIn ? (
          <PiecesDashboard loggedIn={this.props.loggedIn} />
        ) : (
          <p>fucking sign in Kelly</p>
        )}
      </div>
    );
  }
}

export default checkAuth(PiecesDashboardView);
