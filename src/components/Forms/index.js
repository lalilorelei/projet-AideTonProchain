import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, label, name, id, placeholder, required }) => (
  <div className="form-group">
    <label htmlFor={id}>
      {label}
      {required === true ? <span className="required"> *</span> : null}
    </label>
    <input type={type} className="form-control" id={id} name={name} placeholder={placeholder} />
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

export default Input;
