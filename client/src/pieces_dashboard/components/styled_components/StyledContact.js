import styled from "styled-components";
import img from "../../../images/ContactBackground.jpg";
export const StyledContact = styled.div`
  /* Mobile first queries */
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  border-top: 5px solid black;
  height: 837px;

  .contactContent {
    background-color: rgba(0, 0, 0, 0.6);
    height: 837px;
  }

  /* Larger than mobile */
  @media (min-width: 400px) {
  }

  /* Larger than phablet */
  @media (min-width: 550px) {
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
  }
  /* Larger than desktop */
  @media (min-width: 1000px) {
    height: 100vh;
    .contactContent {
      height: 100%;
      background-color: transparent;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
  }
`;
