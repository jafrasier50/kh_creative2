import styled from "styled-components";

export const StyledDashboardPiece = styled.div`
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 2px 2px 7px 1px black;
  height: 420px;
  width: 330px;
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
    max-width: 180px;
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
    color: whitesmoke;
    border: border-box 1px;
    border-radius: 3px;
    border-color: black;
  }

  @media (min-width: 360px) {
  }

  @media (min-width: 400px) {
  }

  @media (min-width: 550px) {
  }

  @media (min-width: 750px) {
  }

  @media (min-width: 980px) {
    color: whitesmoke;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 2px 2px 7px 1px black;
    height: 400px;
    width: 310px;
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
      margin-top: 3px;
      height: 30px;
      width: 75px;
      background: darkred;
      color: whitesmoke;
      border: border-box 1px;
      border-color: black;
      border-radius: 8px;
    }
  }

  @media (min-width: 1200px) {
  }
`;
