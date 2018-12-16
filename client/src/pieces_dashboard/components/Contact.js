import React, { Component } from "react";
import { StyledContact } from "./styled_components/StyledContact";
import ContactForm from "./ContactPageComponents/ContactForm";

class Contact extends Component {
  render() {
    return (
      <StyledContact>
        <div className="contactContent">
          <h1>I AM THE CONTACT SECTION</h1>
          <ContactForm />
        </div>
      </StyledContact>
    );
  }
}

export default Contact;
