import styled from "styled-components";

export const StyledEditPieceForm = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 75%;
  margin: auto;

  form {
    display: block;
    max-width: 100%;
    padding: 10px;
    height: auto;
    margin: 0 auto;
  }
  input[type="text"] {
    width: 50%;
    background-color: whitesmoke;
    border: border-box;
    border-color: black;
  }
  input[type="file"] {
    width: 50%;
    background-color: whitesmoke;
    border: border-box;
    border-color: black;
  }
  input[type="submit"] {
    height: 29px;
    width: 30%;
    background: darkred;
    border: border-box 1px;
    border-color: black;
  }
`;
