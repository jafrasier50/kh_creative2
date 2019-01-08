import React, { Component } from "react";
import { StyledContactForm } from "./ContactStyledComponents/StyledContactForm";

import Field from "./Field";
import Button from "./Button";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    //to enture 'this' when calliong 'this.updatefeild' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }
  updateField(field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    // console.log(this.state);
    return (
      <StyledContactForm>
        <div className="contact-innerdiv">
          <div className="CForm">
            <div class="contactHeader">
              <h1>Want one of my pieces or just want to say hi?</h1>
            </div>
            <div className="contactFormWrapper">
              <div className="contactForm">
                {/*Name Field*/}
                <Field
                  lable="Name"
                  onChange={event =>
                    this.updateField("name", event.target.value)
                  }
                  value={this.state.name}
                />
                {/*Email Field*/}
                <Field
                  lable="Email"
                  onChange={event =>
                    this.updateField("email", event.target.value)
                  }
                  value={this.state.email}
                />
                {/*Message TextArea*/}
                <Field
                  className="email-message"
                  lable="Message"
                  onChange={event =>
                    this.updateField("message", event.target.value)
                  }
                  textarea={true}
                  value={this.state.message}
                />
                {/*Submit Button*/}
                <div className="submit-button">
                  <Button
                    email="jafrasier50@gmail.com"
                    formValues={this.state}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="kelly-info">I am some additional information</div>
        </div>
      </StyledContactForm>
    );
  }
}

export default ContactForm;
