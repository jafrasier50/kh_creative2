import styled from "styled-components";
import img from "../../../images/sideDrawerBackground.jpg";

export const StyledDashboardPiece = styled.div`
  /* Mobile first queries */
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.7);
  max-height: 390px;
  max-width: 300px;
  margin: 10px;
  padding: 10px;
  align-items: center;

  .styledPieceDiv {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-weight: 300;
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
  img {
    max-width: 150px;
    max-height: 350px;
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

  @media (min-width: 360px) {
    max-height: 100%;
    max-width: 350px;
    margin: 10px;
    padding: 10px;

    h2 {
      font-weight: 300;
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
    img {
      max-width: 320px;
      max-height: 300px;
    }

    strong {
      font-weight: 500;
      font-size: 0.8rem;
    }
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
    max-width: 80%;
    margin: 10px;

    h2 {
      font-weight: 300;
    }
    img {
      max-width: 400px;
      max-height: 550px;
    }

    strong {
      font-weight: 400;
      font-size: 1rem;
    }
    .editButton {
      background: darkred;
      border: border-box 1px;
      border-color: black;
    }
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.5);
    color: whitesmoke;
    background-color: green;
    height: auto;
    width: 100%;
    min-width: 600px;
    margin: 10px;
    align-items: baseline;
    padding: 0;

    .styledPieceDiv {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .ImgTitle-img {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      width: 70%;
      height: 100%;
    }
    .pieceStats {
      padding-left: 10px;
      padding-right: 10px;
      background-image: url(${img});
      background-attachment: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 30%;
      height: 100%;
    }

    h2 {
      font-weight: 400;
      font-size: 2em;
    }
    img {
      padding-top: 20px;
      max-width: 100%;
      height: auto;
    }

    strong {
      font-weight: 500;
      font-size: 1em;
    }

    p {
      font-size: 1.3em;
    }
    .editButton {
      background: darkred;
      border: border-box 1px;
      border-color: black;
    }
  }

  /* Larger than desktop */
  @media (min-width: 1000px) {
  }

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
  }
`;
