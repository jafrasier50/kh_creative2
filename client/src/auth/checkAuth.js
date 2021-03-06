import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const checkAuth = WrappedComponent => {
  class HOC extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      const passwordCookie = cookies.get("pieces_secret");

      return (
        <WrappedComponent
          loggedIn={!!passwordCookie}
          secret={passwordCookie}
          {...this.props}
        />
      );
    }
  }

  return HOC;
};
