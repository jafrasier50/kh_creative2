import styled from "styled-components";

export const StyledDrawerToggle = styled.div`
  .toggle-button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
  }

  .toggle-button:focus {
    outline: none;
  }

  .toggle-button__line {
    width: 25px;
    height: 2px;
    background: whitesmoke;
  }
`;
