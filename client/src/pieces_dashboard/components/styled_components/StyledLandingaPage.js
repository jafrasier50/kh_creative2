import styled from "styled-components";
import img from "../../../images/LandingPageImage.jpg";
export const StyledLandingPage = styled.div`
@import url('https://fonts.googleapis.com/css?family=VT323');

  height: calc(100vh - 56px);

  /* Mobile first queries */

  .wrapper {
    /* The height needs to be set to a fixed value for the effect to work.
   * 100vh is the full height of the viewport. */
    height: calc(100vh - 56px);
    width: 100%;
    /* The scaling of the images would add a horizontal scrollbar, so disable x overflow. */
    overflow-x: hidden;
    /* Enable scrolling on the page. */
    overflow-y: hidden;
    /* Set the perspective to 2px. This is essentailly the simulated distance from the viewport to transformed objects.*/
    perspective: 3px;
  }

  .section {
    /* Needed for children to be absolutely positioned relative to the parent. */
    position: relative;
    /* The height of the container. Must be set, but it doesn't really matter what the value is. */
    height: calc(100vh - 56px);

    /* For text formatting. */
    display: flex;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    text-shadow: 0 0 5px #000;
  }

  .landing-text {
    box-shadow: 1px 1px 5px black;
    background: rgba(0, 0, 0, 0.7);
    height: auto;
    width: 70%;
    max-width:1200px;
    border-radius: 6px;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 3s;
  }

  .section h1 {
    font-family: 'VT323', monospace;
    font-size: 3.5rem;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .section h2 {
    font-family: 'VT323', monospace;
    font-size: 1.9rem;
    padding: 0;
    margin-top: 0;
  }
  .def-not-cursed {
    margin: 0;
    color:#AC3521;
  }
 

  .parallax::after {
    /* Display and position the pseudo-element */
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    /* Move the pseudo-element back away from the camera,
   * then scale it back up to fill the viewport.
   * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
    transform: translateZ(-1px) scale(1.5);
    /* Force the background image to fill the whole element. */
    background-size: 100%;
    /* Keep the image from overlapping sibling elements. */
    z-index: -1;
  }

  /* Sets the actual background images to adorable kitties. This part is crucial. */
  .bg1::after {
    background: url(${img}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  @keyframes fadeInOpacity {
    0%{
      opacity: 0
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* iPhone X */
  @media (width: 375px) and (height: 812px) {
    .landing-text {
    box-shadow: 1px 1px 5px black;
    background: rgba(0, 0, 0, 0.7);
    height: auto;
    width: 75%;
    height:60%
    max-width:1200px;
    border-radius: 6px;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 3s;
  }

  .section h1 {
    font-family: 'VT323', monospace;
    font-size: 4rem;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .section h2 {
    font-family: 'VT323', monospace;
    font-size: 2rem;
    padding: 0;
    margin-top: 0;
    line-height:50px;
  }
  .def-not-cursed {
    margin: 0;
    color:#AC3521;
  }
  }
  /* Larger than mobile */
  @media (min-width: 392px) {
    .section h1 {
      font-size: 3.5rem;
      padding: 0.3rem;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .section h2 {
      font-size:2rem;
      padding: 0.3rem;
      margin-top: 0;
    }
    .def-not-cursed {
      margin: 0;
      margin-bottom: 0.5rem;
    }
  }

  /* Larger than phablet */
  @media (min-width: 550px) {
    .section h1 {
      font-size: 4.3rem;
      padding: 0.5rem;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .section h2 {
      font-size: 2.9rem;
      padding: 0.5rem;
      margin-top: 0;
    }
    .def-not-cursed {
      margin: 0;
      margin-bottom: 0.5rem;
    }
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
  }

  /* Larger than desktop */
  @media (min-width: 1000px) {
    .section h1 {
      font-size: 6rem;
      padding: 0.3rem;
      margin-top: 1.2rem;
      margin-bottom: 1.2rem;
    }
    .section h2 {
      line-height:75px;
      font-size: 4rem;
      padding: 0.3rem;
      margin-top: 0;
    }
    .def-not-cursed {
      font-style:italic;
      margin: 0;
      margin-bottom: 0.5rem;
    }
  }
  }

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
  }
`;
