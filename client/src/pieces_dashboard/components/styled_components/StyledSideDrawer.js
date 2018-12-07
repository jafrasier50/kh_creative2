import styled from "styled-components";

export const StyledSideDrawer = styled.div`
  .sideDrawer {
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    z-index: 200;
  }

  .sideDrawer ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .sideDrawer li {
    margin: 0.5rem;
  }

  .sideDrawer a {
    color: whitesmoke;
    text-decoration: none;
    font-size: 1.2rem;
    display: block;
  }

  .sideDrawer a:hover,
  .sideDrawera:active {
    color: darkgray;
  }
`;
