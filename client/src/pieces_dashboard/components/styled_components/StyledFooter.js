import styled from "styled-components";

export const StyledFooter = styled.div`
  color: white;
  .footer {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    width: 100%;
    background: black;
    margin-bottom: 0;
    height: 200px;
  }

  h1 {
    color: whitesmoke;
  }

  .social-icons {
    width: 50%;
  }

  .site-information {
    width: 50%;
  }

  .credits {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 10px;
  }

  .credits a {
    color: lightgray;
  }
`;
