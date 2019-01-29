import styled from "styled-components";

export const StyledPiece = styled.div`
  /* Mobile first queries */
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.8);
  max-width: 300px;
  margin: 10px;
  padding:15px
  align-items: center;

  h2 {
    font-weight: 300;
  }
  img {
    max-width: 290px;
    max-height: auto;
  }

  strong {
    font-weight: 200;
  }
  .editButton {
    background: darkred;
    border: border-box 1px;
    border-color: black;
  }
  /* Larger than mobile */
  @media (min-width: 400px) {
    color: whitesmoke;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 15px;
    max-width: 380px;
    margin: 10px;

    h2 {
      font-weight: 300;
    }
    img {
      max-width: 350px;
      max-height: auto;
    }

    strong {
      font-weight: 200;
    }
    .editButton {
      background: darkred;
      border: border-box 1px;
      border-color: black;
    }
  }

  /* Larger than phablet */
  @media (min-width: 550px) {
    color: whitesmoke;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 15px;
    max-width: 320px;
    margin: 10px;

    h2 {
      font-weight: 300;
    }
    img {
      max-width: 300px;
      max-height: auto;
    }

    strong {
      font-weight: 200;
    }
    .editButton {
      background: darkred;
      border: border-box 1px;
      border-color: black;
    }
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    color: whitesmoke;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 15px;
    max-width: 320px;
    margin: 10px;
    align-items: baseline;

    h2 {
      font-weight: 300;
    }
    img {
      max-width: 300px;
      max-height: auto;
    }

    strong {
      font-weight: 200;
    }
    .editButton {
      background: darkred;
      border: border-box 1px;
      border-color: black;
    }
  }

  /* Larger than desktop */
  @media (min-width: 1000px) {
    color: whitesmoke;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 15px;
    max-width: 320px;
    margin: 10px;
    align-items: center;

    h2 {
      font-weight: 300;
    }
    img {
      max-width: 300px;
      max-height: auto;
    }

    strong {
      font-weight: 200;
    }
    .editButton {
      background: darkred;
      border: border-box 1px;
      border-color: black;
    }
  }

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
    color: whitesmoke;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 15px;
    max-width: 320px;
    margin: 10px;

    h2 {
      font-weight: 300;
    }
    img {
      max-width: 300px;
      max-height: auto;
    }

    strong {
      font-weight: 200;
    }
    .editButton {
      background: darkred;
      border: border-box 1px;
      border-color: black;
    }
  }
`;
