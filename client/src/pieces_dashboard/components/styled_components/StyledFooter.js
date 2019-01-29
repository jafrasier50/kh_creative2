import styled from "styled-components";

export const StyledFooter = styled.div`
  color: white;

  .footer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: absolute;
    width: 100%;
    background: black;
    height: 250px;
  }

  .icon {
    height: 30px;
    width: 30px;
    margin: auto;
    margin-right: 10px;
  }
  .social-icons-div {
    position: relative;
    margin: auto;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: whitesmoke;
  }

  .credits {
    font-size: 0.7rem;
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .credits a {
    color: darkgreen;
    text-decoration: none;
  }
`;
