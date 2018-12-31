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
    margin-bottom: 0;
    height: 300px;
  }

  .social-icons-div {
    margin: auto;
    padding: 15px;
  }
  .social-icons {
    margin: auto;
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: center;
    padding-bottom: 25px;
  }
  .social-icons li {
    padding-right: 10px;
  }

  h1 {
    color: whitesmoke;
  }

  .credits {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 10px;
  }

  .credits a {
    color: darkgreen;
  }
`;
