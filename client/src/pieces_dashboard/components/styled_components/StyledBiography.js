import styled from "styled-components";
import img from "../../../images/bioBackground.jpg";

export const StyledBiography = styled.div`
  /* @media (max-width: 623px) {
    .kelly {
      display: none;
    }
    .bioContent {
      width: 100%;
      height: 100vh;
    }
    .bio {
      font-size: 1.2rem;
    }
  } */

  /* Mobile first queries */

  /* Larger than mobile */
  @media (min-width: 400px) {
    position: relative;
    height: 100vh;
    background-image: url(${img});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: wrap-reverse;

    .bioHeader {
      font-size: 3rem;
      margin-top: auto;
      padding-top: 75px;
      color: whitesmoke;
    }

    .bio {
      max-width: 85%;
      padding: 25px;
      margin: auto;
      text-align: left;
      font-size: 1.5rem;
      color: whitesmoke;
    }
    .bioContent {
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      margin-left: auto;
      margin-right: auto;
      line-height: 35px;
      min-width: 312px;
    }
    .kelly {
      display: none;
    }
  }

  /* Larger than phablet */
  @media (min-width: 550px) {
    position: relative;
    height: 100vh;
    background-image: url(${img});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: wrap-reverse;

    .bioHeader {
      font-size: 2.5rem;
      margin-top: auto;
      padding-top: 75px;
      color: whitesmoke;
    }

    .bio {
      max-width: 85%;
      padding: 25px;
      margin: auto;
      text-align: left;
      font-size: 1.1rem;
      color: whitesmoke;
    }
    .bioContent {
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      margin-left: auto;
      margin-right: auto;
      line-height: 30px;
      min-width: 312px;
    }
    .kelly {
      display: none;
    }
    .bioParallax {
      height: 100%;
    }
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    position: relative;
    height: 100vh;
    background-image: url(${img});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: wrap-reverse;

    .bioHeader {
      font-size: 3rem;
      margin-top: auto;
      padding-top: 75px;
      color: whitesmoke;
    }

    .bio {
      max-width: 85%;
      padding: 25px;
      margin: auto;
      text-align: left;
      font-size: 1.3rem;
      color: whitesmoke;
    }
    .bioContent {
      width: 50%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      margin-left: auto;
      margin-right: auto;
      line-height: 30px;
      min-width: 312px;
    }
    .kelly {
      height: 100vh;
      width: 50%;
      min-width: 312px;
      background: rgba(0, 0, 0, 0.7);
    }
    .bioParallax {
      height: 100%;
    }
  }

  /* Larger than desktop */
  @media (min-width: 1000px) {
    position: relative;
    height: 100vh;
    background-image: url(${img});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: wrap-reverse;

    .bioHeader {
      font-size: 3rem;
      margin-top: auto;
      padding-top: 75px;
      color: whitesmoke;
    }

    .bio {
      max-width: 85%;
      padding: 25px;
      margin: auto;
      text-align: left;
      font-size: 1.5rem;
      color: whitesmoke;
    }
    .bioContent {
      width: 50%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      margin-left: auto;
      margin-right: auto;
      line-height: 35px;
      min-width: 312px;
    }
    .kelly {
      height: 100vh;
      width: 50%;
      min-width: 312px;
      background: rgba(0, 0, 0, 0.7);
    }
    .bioParallax {
      height: 100%;
    }
  }

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
    position: relative;
    height: 100vh;
    background-image: url(${img});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: wrap-reverse;

    .bioHeader {
      font-size: 3rem;
      margin-top: auto;
      padding-top: 75px;
      color: whitesmoke;
    }

    .bio {
      max-width: 85%;
      padding: 25px;
      margin: auto;
      text-align: left;
      font-size: 1.5rem;
      color: whitesmoke;
    }
    .bioContent {
      width: 50%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      margin-left: auto;
      margin-right: auto;
      line-height: 35px;
      min-width: 312px;
    }
    .kelly {
      height: 100vh;
      width: 50%;
      min-width: 312px;
      background: rgba(0, 0, 0, 0.7);
    }
    .bioParallax {
      height: 100%;
    }
  }
`;
