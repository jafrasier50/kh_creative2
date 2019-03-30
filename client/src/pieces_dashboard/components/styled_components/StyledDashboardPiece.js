import styled from "styled-components";
import img from "../../../images/sideDrawerBackground.jpg";

export const StyledDashboardPiece = styled.div`
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.8);
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
    border: border-box 1px;
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

  @media (min-width: 1000px) {
  }

  @media (min-width: 1200px) {
  }
`;
