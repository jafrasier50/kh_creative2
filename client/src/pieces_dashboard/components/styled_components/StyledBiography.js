import styled from "styled-components";
import img from "../../../images/bioBackground.jpg";

export const StyledBiography = styled.div`
  /* Mobile first queries */
  height: 100vh;
  background-image: url(${img});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  overflow: hidden;

  .bio-wrapper {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    color: whitesmoke;
  }
  .bio-content {
    padding-top: 7%;
    margin: auto;
    vertical-align: center;
  }
  .bioHeader {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .bio {
    max-width: 90%;
    padding: 10px;
    margin: auto;
    /* font-size: 0.9rem; */
    font-size: 5vw;
    text-align: center;
    line-height: 1.3rem;
  }

  @media (min-width: 320px) and (min-height: 550px) {
    .bio {
      /* font-size: 1rem; */
      font-size: 5vw;
      line-height: 1.5rem;
    }
  }

  @media (min-width: 360px) {
    .bioHeader {
      font-size: 2rem;
    }
    .bio {
      /* font-size: 1.3rem; */
      font-size: 5vw;
      line-height: 1.7rem;
    }
  }

  @media (min-width: 375px) and (min-height: 800px) {
    .bio-content {
      padding-top: 15%;
      margin: auto;
      vertical-align: center;
    }
    .bioHeader {
      font-size: 2.5rem;
    }
    .bio {
      /* font-size: 1.5rem; */
      font-size: 6vw;
      line-height: 2rem;
    }
  }

  /* Larger than mobile */
  @media (min-width: 400px) {
    .bio-content {
      padding-top: 5%;
      margin: auto;
      vertical-align: center;
    }
    .bioHeader {
      font-size: 2rem;
    }
    .bio {
      /* font-size: 1.5rem; */
      font-size: 5.2vw;
      line-height: 1.9rem;
    }
  }

  /* Larger than phablet */
  @media (min-width: 550px) {
    .bioHeader {
      font-size: 3.5rem;
    }
    .bio {
      /* font-size: 1.8rem; */
      font-size: 5vw;
      line-height: 2.8rem;
    }
  }

  @media (min-width: 550px) and (max-height: 750px) {
    .bio-content {
      padding-top: 0;
    }
    .bioHeader {
      font-size: 2.6rem;
    }
    .bio {
      /* font-size: 1.5rem; */
      font-size: 4vw;
      line-height: 2.8rem;
    }
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    .bio-content {
    }
    .bio {
      /* font-size: 2.3rem; */
      font-size: 4vw;
      line-height: 3rem;
    }
  }
  /* @media (min-width: 750px) and (max-height: 750px) {
    .bioHeader {
      font-size: 2.6rem;
    }
    .bio {
      font-size: 1.5rem;
      font-size: 4vw;
      line-height: 2.8rem;
    }
  } */

  /* Ipad Pro */

  @media (min-width: 1020px) and (max-height: 1370px) {
    .bio-content {
      padding-top: 2%;
    }
    .bioHeader {
      font-size: 4rem;
      margin-bottom: 3rem;
    }
    .bio {
      /* font-size: 3rem; */
      font-size: 3vw;
      line-height: 3.5rem;
      text-align: left;
    }
  }

  @media (min-width: 1000px) and (min-height: 500px) and (max-height: 900) {
    .bioHeader {
      font-size: 3.5rem;
      margin-bottom: 3rem;
    }
    .bio {
      /* font-size: 3rem; */
      font-size: 3vh;
      line-height: 4rem;
    }
  }

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
    .bioHeader {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    .bio {
      text-align: left;
      /* font-size: 2.8rem; */
      font-size: 5vh;

      line-height: 3.5rem;
    }
  }

  @media (min-width: 1700px) {
    .bio-content {
      padding-top: 1%;
    }
    .bio {
      line-height: 4rem;
    }
  }
`;
