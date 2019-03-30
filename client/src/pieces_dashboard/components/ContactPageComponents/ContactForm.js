import React, { Component } from "react";
import { StyledContactForm } from "./ContactStyledComponents/StyledContactForm";
import Field from "./Field";
import Button from "./Button";
import Instagram from "../../../images/instagram.png";
import Linkedin from "../../../images/linkedin.png";

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
    return (
      <StyledContactForm>
        <div className="contact-form">
          <div className="contactFormLeft">
            <div className="contactHeader">
              <h1>
                Want my art?
                <br />
                Want to say hi?
              </h1>
            </div>
            <div className="contactForm">
              {/*Name Field*/}
              <Field
                className="name-input"
                lable="Name"
                onChange={event => this.updateField("name", event.target.value)}
                value={this.state.name}
              />
              {/*Email Field*/}
              <Field
                className="email-input"
                lable="Email"
                onChange={event =>
                  this.updateField("email", event.target.value)
                }
                value={this.state.email}
              />
              {/*Message TextArea*/}
              <Field
                textarea
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
                  email="kellyann0902@gmail.com"
                  formValues={this.state}
                />
              </div>
            </div>
          </div>
          <div className="contactFormRight">
            <div className="kelly-info-div">
              <ul className="kelly-info-list">
                <li>
                  <span style={{ color: "#711A8C", fontSize: "1.2rem" }}>
                    Kelly Hanning
                  </span>
                </li>
                <li>
                  <span>Tallahassee</span>
                </li>

                <li>
                  <span>Artist</span>
                </li>
                <li>
                  <span>Feminist</span>
                </li>
                <li>
                  <span>Curly Fries Lover</span>
                </li>
              </ul>
            </div>
            <div className="socialIconsDiv">
              <div className="socialIcons">
                <h4 style={{ color: "#711A8C", fontSize: "1.2rem" }}>
                  Find me on these below
                </h4>
                <a href="https://www.instagram.com/kelly_a_hanning_art/?hl=en">
                  <img
                    className="icon"
                    src={require("../../../images/instagram.png")}
                  />
                </a>
                <a href="https://www.linkedin.com/in/kelly-a-hanning-15623897">
                  <img
                    className="icon"
                    src={require("../../../images/linkedin.png")}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyledContactForm>
    );
  }
}

export default ContactForm;
