import styled from "styled-components";

export const StyledEditPieceForm = styled.div`
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 2px 2px 7px 1px black;
  height: 400px;
  width: 310px;
  margin: 10px;
  padding: 10px;
  align-items: center;

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


  .styledPieceDiv {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-weight: 300;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.8rem;
  }
  img {
    max-width: 160px;
    max-height: 330px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  strong {
    font-weight: 500;
    font-size: 0.8rem;
  }
  .editButton {
    background: darkred;
    border: border-box 1px;
    border-color: black;
  }
}
`;
