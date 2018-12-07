import React, { Component } from "react";
import { StyledDrawerToggle } from "../../pieces_dashboard/components/styled_components/StyledDrawerToggle";

class DrawerToggle extends Component {
  render() {
    return (
      <StyledDrawerToggle>
        <button className="toggle-button" onClick={this.props.click}>
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
        </button>
      </StyledDrawerToggle>
    );
  }
}

export default DrawerToggle;
