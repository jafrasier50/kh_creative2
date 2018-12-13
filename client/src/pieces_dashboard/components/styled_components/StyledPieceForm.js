import styled from "styled-components";

export const StyledPieceForm = styled.div`
  h4 {
    color: whitesmoke;
    font-weight: 300;
  }
  form {
    width: 260px;
    background-color: rgba(0, 0, 0, 0.8);
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
`;
