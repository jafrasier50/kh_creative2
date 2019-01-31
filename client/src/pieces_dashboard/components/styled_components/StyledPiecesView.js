import styled from "styled-components";

export const StyledPiecesView = styled.div`
  height: 90vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    min-width: 100%;
    min-height: 200px;
    display: flex;
    overflow-x: auto;
  }
  .card::-webkit-scrollbar {
    display: none;
  }
`;
