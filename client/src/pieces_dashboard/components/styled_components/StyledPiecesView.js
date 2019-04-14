import styled from "styled-components";

export const StyledPiecesView = styled.div`
  height: calc(100vh - 56px);
  display: flex;
  align-content: center;
  overflow: hidden;

  .piece-container {
    height: calc(100vh - 56px);
    display: flex;
    align-content: center;
    margin-left: 0;
    overflow-x: auto;
  }
  .piece-container::-webkit-scrollbar {
    /* display: none; */
  }

  @media (min-width: 360px) {
    height: calc(95vh - 56px);
    .piece-container {
      height: calc(95vh - 56px);
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
  }
  /* Larger than desktop */
  @media (min-width: 1000px) {
  }
  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
  }
`;
