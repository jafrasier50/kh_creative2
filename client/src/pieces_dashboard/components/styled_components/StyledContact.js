import styled from "styled-components";
import img from "../../../images/ContactBackground.jpg";
export const StyledContact = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  .contactContent {
    padding: 50px;
    position: relative;
  }

  .contactFormWrapper {
    display: inline-block;
    width: 100%;
  }
`;
