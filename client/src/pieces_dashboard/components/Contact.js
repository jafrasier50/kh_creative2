import React, { Component } from "react";
import { StyledContact } from "./styled_components/StyledContact";

class Contact extends Component {
  render() {
    return (
      <StyledContact>
        <div className="contactContent">
          <h1>I AM THE CONTACT SECTION</h1>
        </div>
      </StyledContact>
    );
  }
}

export default Contact;
