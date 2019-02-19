import styled from "styled-components";

export const StyledPiecesView = styled.div`
  /* Mobile first queries */
  height: 450px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .card {
    width: 100%;
    min-height: 200px;
    display: flex;
    overflow-x: auto;
  }
  .card::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 360px) {
    height: 95vh;

    .card {
      height: 90%;
    }
  }
  /* Larger than mobile */
  @media (min-width: 400px) {
  }

  /* Larger than phablet */
  @media (min-width: 550px) {
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    height:100vh;
    .card{
      height:auto;
      }
    }
  }

  /* Larger than desktop */
  @media (min-width: 1000px) {
  }

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
  }
`;
