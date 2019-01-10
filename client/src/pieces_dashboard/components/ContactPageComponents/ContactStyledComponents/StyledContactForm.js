import styled from "styled-components";

export const StyledContactForm = styled.div`
  /* Mobile first queries */
  .contact-innerdiv {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-container {
    margin: auto;
    width: 85%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .contactHeader {
    margin: auto;
    color: whitesmoke;
    font-size: 0.8rem;
    padding: 25px;
  }

  .CForm {
    width: 70%;
  }

  .kelly-info {
    text-align: auto;
    width: 30%;
    min-width: 100px;
    color: whitesmoke;
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
