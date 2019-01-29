import React from "react";
import PropTypes from "prop-types";
import { StyledField } from "./ContactStyledComponents/StyledField";

const Field = props => (
  <StyledField>
    <textarea
      onChange={props.onChange}
      type={props.textarea ? "textarea" : "text"}
      wrap="hard"
      value={props.value}
      placeholder={props.lable}
    />
  </StyledField>
);

Field.propTypes = {
  lable: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool.isRequired,
  wrap: PropTypes.string
};

Field.defaultProps = {
  textarea: false
};

export default Field;
