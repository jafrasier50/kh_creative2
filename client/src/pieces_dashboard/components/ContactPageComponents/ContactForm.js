import React, { Component } from "react";

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
    return (
      <div>
        {/*Name Field*/}
        <Field
          lable="Name"
          onChange={event => this.updateField("name", event.target.value)}
          value={this.state.name}
        />
        {/*Email Field*/}
        <Field
          lable="Email"
          onChange={event => this.updateField("email", event.target.value)}
          value={this.state.email}
        />
        {/*Message TextArea*/}
        <Field
          lable="Message"
          onChange={event => this.updateField("message", event.target.value)}
          textarea={true}
          value={this.state.message}
        />
        {/*Submit Button*/}
        <Button email="jafrasier50@gmail.com" formValues={this.state} />
      </div>
    );
  }
}

export default ContactForm;
