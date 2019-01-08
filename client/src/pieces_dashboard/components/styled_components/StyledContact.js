import styled from "styled-components";
import img from "../../../images/ContactBackground.jpg";
export const StyledContact = styled.div`
  /* Mobile first queries */
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  .contactContent {
    height: 200px;
    position: relative;
  }

  .contactFormWrapper {
    height: 400px;
    display: inline-block;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 20px;
    margin: auto;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
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
  }

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
  }
`;
