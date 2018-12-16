import React from "react";
import PropTypes from "prop-types";

const Field = props => (
  <input
    onChange={props.onChange}
    type={props.textarea ? "textarea" : "text"}
    value={props.value}
  />
);

Field.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool.isRequired
};

Field.defaultProps = {
  textarea: false
};

export default Field;
