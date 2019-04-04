import styled from "styled-components";
import img from "../../../images/sideDrawerBackground.jpg";

export const StyledPieceForm = styled.div`
  position: sticky;
  top: 56px;
  h4 {
    font-size: 1rem;
    color: whitesmoke;
    font-weight: 300;
  }
  form {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.96);
    box-shadow: 2px 2px 6px black;
    padding: 10px;
    height: auto;
    margin: 0 auto;
  }
  input {
    margin-bottom: 2px;
  }

  input[type="text"] {
    width: 94%;
    height: 2rem;
    background-color: lightgrey;
    border: solid black 1px;
    border-color: black;
  }

  .form-actions {
    color: whitesmoke;
  }
  input[type="file"] {
    display: none;
  }
  .custom-upload__button {
    display: inline-block;
    height: 30px;
    width: 120px;
    margin: auto;
    margin-bottom: 5px;
    vertical-align: middle;
    background: darkred;
    color: whitesmoke;
    border: solid black 1px;
    border-radius: 8px;
    cursor: pointer;
  }
  .custom-upload__button label {
    height: 100%;
    width: 100%;
    line-height: 30px;
    padding: 0;
    cursor: pointer;
  }
  .upload-preview {
    height: 100px;
    width: auto;
  }

  input[type="submit"] {
    font-size: 1rem;
    height: 30px;
    width: 120px;
    background: darkred;
    color: whitesmoke;
    border: border-box 1px;
    border-color: black;
    border-radius: 8px;
    cursor: pointer;
  }
  input::placeholder {
    color: black;
  }

  @media (min-width: 610px) {
    top: 0;
    width: 240px;
    height: 100%;
    position: relative;

    form {
      background-image: url(${img});
      position: fixed;
      width: inherit;
      margin-left: auto;
      margin-right: auto;
      height: 100%;
    }
    input {
      margin-bottom: 10px;
    }
    input[type="file"] {
      width: 95%;
      background-color: grey;
      border: border-box;
      border-color: black;
    }
    input[type="text"] {
      font-size: 0.8rem;
      width: 95%;
      height: 60px;
      background-color: grey;
      border: border-box;
      border-color: black;
    }
    input::placeholder {
      color: black;
    }
    input[type="submit"] {
      height: 30px;
      width: 120px;
      background: darkred;
      color: whitesmoke;
      border: border-box 1px;
      border-color: black;
      border-radius: 8px;
    }
  }

  @media (min-width: 900px) {
    height: 100%;
    width: 20%;
    position: relative;
    box-shadow: 2px 2px 6px black;

    h4 {
      font-size: 1.5rem;
      font-weight: 500;
    }
    form {
      position: fixed;
      height: 100%;
      width: inherit;
      min-width: 250px;
    }

    input {
      margin-bottom: 10px;
    }

    input[type="text"] {
      font-size: 0.8rem;
      width: 95%;
      height: 60px;
      background-color: grey;
      border: border-box;
      border-color: black;
    }
  }
`;
