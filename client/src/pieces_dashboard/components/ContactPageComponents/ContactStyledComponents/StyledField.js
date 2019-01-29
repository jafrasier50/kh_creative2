import styled from "styled-components";

export const StyledField = styled.div`
  height: auto;
  width: 100%;

  textarea[type="textarea"] {
    height: 140px;
    resize: none;
    margin-bottom: 15px;
  }

  textarea {
    outline: none;
    font-size: 1rem;
    color: whitesmoke;
    width: 80%;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: #646464;
    height: 25px;
    padding-bottom: 15px;
    resize: none;
  }

  /* Larger than mobile */
  @media (min-width: 400px) {
  }

  /* Larger than phablet */
  @media (min-width: 550px) {
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
  }

  /* Larger than desktop */
  @media (min-width: 1000px) {
  }

  /* Larger than Desktop HD */
  @media (min-width: 1200px) {
  }
`;
