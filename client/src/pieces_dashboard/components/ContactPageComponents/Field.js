import React from "react";
import PropTypes from "prop-types";

const Field = props => (
  <div>
    <lable> {props.lable}</lable>
    <input
      onChange={props.onChange}
      type={props.textarea ? "textarea" : "text"}
      value={props.value}
    />
  </div>
);

Field.propTypes = {
  lable: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool.isRequired
};

Field.defaultProps = {
  textarea: false
};

export default Field;
