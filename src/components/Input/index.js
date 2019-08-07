import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, label, name, id, placeholder, required, value }) => (
  <div className="form-group">
    <label htmlFor={id}>
      {label}
      {required === true ? <span className="required"> *</span> : null}
    </label>
    {required && (
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        required
      />
    )}
    {!required && (
      <input type={type} className="form-control" id={id} name={name} placeholder={placeholder} value={value} />
    )}
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
