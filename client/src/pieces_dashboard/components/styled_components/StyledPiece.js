import styled from "styled-components";
import img from "../../../images/sideDrawerBackground.jpg";

export const StyledPiece = styled.div`
  color: whitesmoke;
  height: calc(100vh - 75px);
  margin-left: 20vw;
  margin-right: 20vw;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  box-shadow: 3px 3px 5px black;
  align-self: center;
  display: grid;
  grid-auto-columns: auto;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "title"
    "piece"
    "description"
    "stats";

  h2 {
    grid-area: title;
    font-size: 1.2rem;
    font-weight: 300;
    align-self: center;
    margin: 0;
  }

  .piece-image {
    padding: 5px;
  }
  img {
    grid-area: piece;
    max-height: 265px;
    max-width: 85vw;
    margin: 0;
    box-shadow: 3px 3px 5px black;
    align-self: center;
    border-radius: 2px;
  }

  p {
    grid-area: description;
    font-size: 0.9rem;
    margin: 0;
    align-self: start;
  }

  .pieceStats {
    grid-area: stats;
    font-size: 0.8rem;
    margin: 0;
    align-self: end;
  }

  .editButton {
    background: darkred;
    border: border-box 1px;
    border-color: black;
    margin: 0;
  }

  @media (min-width: 320px) and (min-height: 550px) {
    h2 {
      font-size: 2rem;
      font-weight: 200;
    }
  }
  /* Galaxy S9+
  @media (min-width: 360px) and (min-height: 740px) {
    height: calc(100vh - 190px);
    grid-template-rows: auto 370px auto auto;

    h2 {
      grid-area: title;
      font-size: 2rem;
      font-weight: 200;
      align-self: center;
      margin: 0;
      margin-bottom: 5px;
    }

    img {
      margin: 0;
      box-shadow: 3px 3px 5px black;
      align-self: center;
      border-radius: 2px;
    }

    p {
      grid-area: description;
      font-size: 1.3rem;
      margin: 0;
      align-self: center;
    }

    .pieceStats {
      grid-area: stats;
      margin: 0;
      align-self: flex-end;
    }
  } */

  @media (min-width: 360px) {
    height: calc(90vh - 100px);
    img {
      max-height: 300px;
    }
  }

  /* Larger than mobile */
  @media (min-width: 400px) {
    img {
      max-height: 400px;
    }
    p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 550px) {
    width: 40vw;
    height:70vh;

    h2 {
      font-size: 5vh;

    }

    img {
    
      max-width:100%;
      max-height:40vh;
      

    }    
    p {
      font-size: 3vh;
    }  
    }
  }

  /* Larger than phablet */
  @media (min-width: 600px) {
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    margin-left: 5vw;
    margin-right: 5vw;
    box-shadow: 4px 4px 6px black;
    display:flex;
    height: 80%;
    width: 80vw;
    max-width:690px;
    padding:0;

    .piece-title{
      margin:1rem;
    }

    .peice__title-and-image{
      padding:.5rem;
      display:flex;
      flex-direction:column;
      justify-content:center;
      width:70%;
      height:100%;
    }

    .piece-image{
      max-height:90%;
    }
    h2{
      font-size:6vh;
    }
    img {
      max-width:100%;
      max-height:90%;
      

    }

    .piece-info{
      background-image: url(${img});
      background-attachment:fixed;
      display:flex;
      flex-direction:column;
      justify-content:center;
      text-align:center;
      padding:1rem;
      width:30%;
      height:100%;
    }

    p{
      font-size: 1.5rem;
      margin-bottom:2rem;
    }
    .pieceStats{
      font-size:1rem;
    }
  /* Larger than desktop */
  @media (min-width: 1000px) {
  }

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
    h2{
      font-size: 5vh;
    }
  }
`;
