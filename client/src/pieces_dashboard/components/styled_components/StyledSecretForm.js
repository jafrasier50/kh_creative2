import styled from "styled-components";
import img from "../../../images/sideDrawerBackground.jpg";

export const StyledSecretForm = styled.div`
  .form-wrapper {
    height: 240px;
    width: 250px;

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: whitesmoke;
    background-image: url(${img});
    background-attachment: fixed;
    padding: 30px;
    max-width: 260px;
    margin-left: auto;
    margin-right: auto;
    border: px solid whitesmoke;
  }
  form {
    height: 210px;
    width: 220px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: whitesmoke;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 30px;
    max-width: 260px;
    margin-left: auto;
    margin-right: auto;
    border: px solid whitesmoke;
  }
`;
