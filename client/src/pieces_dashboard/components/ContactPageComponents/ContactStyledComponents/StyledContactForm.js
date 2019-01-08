import styled from "styled-components";

export const StyledContactForm = styled.div`
  /* Mobile first queries */
  .contact-innerdiv {
    padding: 35px;
    margin: auto;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    vertical-align: middle;
  }

  .contactHeader {
    color: whitesmoke;
    font-size: 0.8rem;
    padding: 25px;
  }

  .contactForm {
    color: white;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  .submit-button {
    padding: 85px;
    margin: auto;
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
