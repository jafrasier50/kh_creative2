import styled from "styled-components";
import img from "../../../images/sideDrawerBackground.jpg";

export const StyledPieceForm = styled.div`
  h4 {
    color: whitesmoke;
    font-weight: 300;
  }
  form {
    width: 260px;
    background-image: url(${img});
    padding: 10px;
    height: auto;
    margin: 0 auto;
  }
  input[type="text"] {
    width: 95%;
    background-color: whitesmoke;
    border: border-box;
    border-color: black;
  }
  input[type="file"] {
    width: 95%;
    background-color: whitesmoke;
    border: border-box;
    border-color: black;
  }
  input[type="submit"] {
    background: darkred;
    border: border-box 1px;
    border-color: black;
  }

  @media (min-width: 610px) {
    width: 20%;
    height: 100%;
    form {
      width: auto;
      margin-left: auto;
      margin-right: auto;
      max-width: 580px;
    }
    input[type="file"] {
      max-width: 550px;
    }
    input[type="text"] {
      max-width: 550px;
    }
  }

  @media (min-width: 900px) {
    height: 100%;
    width: 20%;
    position: relative;
    form {
      position: fixed;
      height: 100%;
      width: inherit;
    }
  }
`;
