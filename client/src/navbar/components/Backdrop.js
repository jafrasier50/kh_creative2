import React, { Component } from "react";
import { StyledBackdrop } from "../../pieces_dashboard/components/styled_components/StyledBackdrop";

class Backdrop extends Component {
  render() {
    return (
      <StyledBackdrop>
        <div className="backdrop" onClick={this.props.click} />;
      </StyledBackdrop>
    );
  }
}

export default Backdrop;
