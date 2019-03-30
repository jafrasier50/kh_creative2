import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: row;

  .dashboard-pieces__wrapper {
    width: 100%;
    display: inline-flex;
  }

  .dashBoardPieces {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 900px) {
    .dashBoardPieces {
      overflow-y: auto;
      justify-content: center;
      align-items: stretch;
      flex-direction: row;
      margin: 0;
      width: 80%;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
