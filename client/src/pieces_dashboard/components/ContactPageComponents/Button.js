import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./ContactStyledComponents/StyledButton";

class Button extends Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }

  logFormDataToConsole(event) {}

  render() {
    const recipient = `mailto: ${this.props.email}`;
    const subject = `?subject=${this.props.formValues.name}`;
    const body = `&body=${this.props.formValues.message}`;
    return (
      <StyledButton>
        <a
          href={`${recipient}${subject}${body}`}
          onClick={this.logFormDataToConsole}
        >
          Submit
        </a>
      </StyledButton>
    );
  }
}

export default Button;
