import styled from "styled-components";
import img from "../../../images/sideDrawerBackground.jpg";

export const StyledSideDrawer = styled.div`
  .sideDrawer {
    height: 100%;
    background-image: url(${img});
    background-attachment: fixed;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
  }

  .sideDrawer.open {
    transform: translateX(0);
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
    font-size: 1.5rem;
    font-weight: 300;
    display: block;
  }

  .sideDrawer a:hover,
  .sideDrawer a:active {
    color: darkgray;
  }

  @media (min-width: 769px) {
    .sideDrawer {
      display: none;
    }
  }
`;
