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

  .navButton {
    background: transparent;
    color: whitesmoke;
    display: block;
    border: none;
    font-size: 15px;
  }

  .toolbarNavigationItems a {
    color: white;
    text-decoration: none;
  }

  .toolbarNavigationItems a:hover,
  .toolbarNavigationItems a:active {
    color: lightgrey;
  }

  @media (max-width: 768px) {
    .toolbarNavigationItems {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .sidebarToggleButton {
      display: none;
    }
    .toolbarLogo {
      margin-left: 0;
    }
  }
`;
