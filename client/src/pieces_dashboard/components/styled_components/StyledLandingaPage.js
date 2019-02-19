import styled from "styled-components";

export const StyledLandingPage = styled.div`
  @media (min-width: 320px) {
    height: 100vh;
    position: relative;
    overflow: hidden;

    .landingPageHeader {
      padding: 25px;
      font-size: 10vw;
      font-weight: 500;
      align-content: center;
      margin-left: auto;
      margin-right: auto;
      max-width: 60%;
      background: rgba(0, 0, 0, 0.6);
      color: whitesmoke;
      margin-top: 10%;
    }
  }

  @media (min-width: 400px) {
    height: 100vh;
    position: relative;

    .landingPageHeader {
      padding: 25px;
      font-size: 10vw;
      font-weight: 500;
      align-content: center;
      margin-left: auto;
      margin-right: auto;
      max-width: 60%;
      background: rgba(0, 0, 0, 0.6);
      color: whitesmoke;
      margin-top: 10%;
    }
  }

  /* Larger than phablet */
  @media (min-width: 550px) {
    height: 100vh;
    position: relative;

    .landingPageHeader {
      padding: 25px;
      font-size: 9vw;
      font-weight: 500;
      align-content: center;
      margin-left: auto;
      margin-right: auto;
      max-width: 60%;
      background: rgba(0, 0, 0, 0.6);
      color: whitesmoke;
      margin-top: 8%;
    }
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    height: 100vh;
    position: relative;

    .landingPageHeader {
      padding: 25px;
      font-size: 7vw;
      font-weight: 500;
      align-content: center;
      margin-left: auto;
      margin-right: auto;
      max-width: 60%;
      background: rgba(0, 0, 0, 0.6);
      color: whitesmoke;
      margin-top: 10%;
    }
  }

  /* Larger than desktop */
  @media (min-width: 1000px) {
    height: 100vh;
    position: relative;

    .landingPageHeader {
      padding: 25px;
      font-size: 6vw;
      font-weight: 500;
      align-content: center;
      margin-left: auto;
      margin-right: auto;
      max-width: 60%;
      background: rgba(0, 0, 0, 0.6);
      color: whitesmoke;
      margin-top: 10%;
    }
  }

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
    height: 100vh;
    position: relative;

    .landingPageHeader {
      padding: 25px;
      font-size: 5vw;
      font-weight: 500;
      align-content: center;
      margin-left: auto;
      margin-right: auto;
      max-width: 60%;
      background: rgba(0, 0, 0, 0.6);
      color: whitesmoke;
      margin-top: 5%;
    }
  }
`;
