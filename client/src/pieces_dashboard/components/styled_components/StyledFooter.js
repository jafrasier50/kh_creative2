import styled from "styled-components";

export const StyledFooter = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
  font-family: "Roboto Mono", monospace;

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
  h4 {
    font-size: 0.9rem;
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
