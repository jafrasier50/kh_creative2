import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { StyledSecretForm } from "../pieces_dashboard/components/styled_components/StyledSecretForm";

const cookies = new Cookies();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };

    let piecesPassCookie = cookies.get("pieces_secret");

    if (piecesPassCookie) {
      this.state.authenticated = true;
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { pieces_pass } = e.target;
    const valueEntered = pieces_pass.value;
    let result = await axios.get("api/auth", {
      headers: { Authorization: "Basic " + valueEntered }
    });

    if (result && result.data) {
      if (result.data.secret) {
        cookies.set("pieces_secret", result.data.secret);
        this.setState({ authenticated: true });
        this.props.history.replace("/pieces_dashboard");
      }
    }
  };
  render() {
    const { authenticated } = this.state;
    return (
      <StyledSecretForm>
        <div className="form-wrapper">
          {!authenticated ? (
            <form onSubmit={this.handleSubmit}>
              <p>
                Enter the Secret Password
                <br />
                <br /> ( ͡° ͜ʖ ͡°)
              </p>
              <input
                type="password"
                name="pieces_pass"
                placeholder="Enter the Secret Pass..."
              />
            </form>
          ) : null}
        </div>
      </StyledSecretForm>
    );
  }
}

export default Login;
