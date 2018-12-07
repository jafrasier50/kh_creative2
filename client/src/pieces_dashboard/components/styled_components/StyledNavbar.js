import styled from "styled-components";

export const StyledNavbar = styled.div`
  .toolbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: black;
    height: 56px;
  }

  .toolbarNavigation {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1rem;
  }

  .toolbarLogo {
    margin-left: 1rem;
  }

  .toolbarLogo a {
    color: whitesmoke;
    text-decoration: none;
    font-size: 24px;
    font-weight: 200;
  }

  .spacer {
    flex: 1;
  }

  .toolbarNavigationItems ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .toolbarNavigationItems li {
    padding: 0 0.5rem;
  }

  .toolbarNavigationItems a {
    color: white;
    text-decoration: none;
  }

  .toolbarNavigationItems a:hover,
  .toolbarNavigationItems a:active {
    color: lightgrey;
  }

  /* position: absolute;
  top: 0;
  left: 0;
  padding: 0 100px;
  background: purple;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .logo {
    color: white;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    float: left;
    font-weight: 200;
    padding-left: 25px;
  }

  nav {
    float: right;
  }

  nav ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  nav ul li {
    list-style: None;
  }

  nav ul li a {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    color: whitesmoke;
    text-decoration: none;
    display: block;
  }

  button {
    border: none;
  }

  nav ul li a:hover,
  nav ul li a.active {
    color: whitesmoke;
    background: #333;
  } */

  /* @media (max-width: 991px) {
     {
      padding: 0 20px;
    }

    .hamburger-toggle {
      display: block;
    }

    nav {
      position: absolute;
      width: 100%;
      height: calc(100vh - 50px);
      background: #333;
      top: 50px;
      left: -100%;
      transition: 0.5s;
    }

    nav.active {
      left: 0;
    }

    nav ul {
      display: block;
      text-align: center;
    }
    nav ul li a {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  } */
`;
