import styled from "styled-components";
import img from "../../../images/bioBackground.jpg";

export const StyledBiography = styled.div`
  /* Mobile first queries */
  position: relative;
  height: 100vh;
  background-image: url(${img});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap-reverse;
  overflow: hidden;

  .bioHeader {
    font-size: 1.7rem;
    margin-top: 10px;
    padding-top: 25px;
    color: whitesmoke;
  }

  .bio {
    max-width: 85%;
    padding: 10px;
    margin: auto;
    text-align: left;
    font-size: 0.9rem;
    color: whitesmoke;
  }
  .bioContent {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    margin-left: auto;
    margin-right: auto;
    line-height: 25px;
    min-width: 312px;
  }
  .kelly {
    display: none;
  }
  .bioParallax {
    display: none;
  }

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
      font-size: 2.3rem;
      margin-top: auto;
      padding-top: 40px;
      color: whitesmoke;
    }

    .bio {
      max-width: 85%;
      padding: 15px;
      margin: auto;
      text-align: left;
      font-size: 1.4rem;
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
      padding-top: 45px;
      color: whitesmoke;
    }

    .bio {
      display: flex;
      max-width: 85%;
      padding: 25px;
      margin: auto;
      text-align: left;
      font-size: 1.7rem;
      color: whitesmoke;
    }
    .bioContent {
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      margin-left: auto;
      margin-right: auto;
      line-height: 35px;
    }
    .kelly {
      height: 100vh;
      width: 50%;
      background: rgba(0, 0, 0, 0.7);
    }
    .bioParallax {
      width: 100%;
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
      font-size: 1.9rem;
      color: whitesmoke;
    }
    .bioContent {
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      margin-left: auto;
      margin-right: auto;
      line-height: 40px;
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
      font-size: 2.3rem;
      color: whitesmoke;
    }
    .bioContent {
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      margin-left: auto;
      margin-right: auto;
      line-height: 50px;
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
      font-size: 4rem;
      margin-top: auto;
      padding-top: 75px;
      color: whitesmoke;
    }

    .bio {
      max-width: 85%;
      padding: 25px;
      margin: auto;
      text-align: left;
      font-size: 2.3rem;
      color: whitesmoke;
    }
    .bioContent {
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      margin-left: auto;
      margin-right: auto;
      line-height: 55px;
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
