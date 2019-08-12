import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  label,
  name,
  id,
  placeholder,
  required,
  value,
  disabled,
  fieldHelp,
  className = '',
  parentClassName = '',
}) => (
  <div className={'form-group ' + (parentClassName ? parentClassName : '')}>
    <label htmlFor={id}>
      {label}
      {required === true ? <span className="required"> *</span> : null}
    </label>
    {required && (
      <input
        type={type}
        className={'form-control ' + (className ? className : '')}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
      />
    )}
    {!required && (
      <input
        type={type}
        className={'form-control ' + (className ? className : '')}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
    )}
    {fieldHelp && (
      <small id={`${id}-emailHelp`} class="form-text text-muted">
        {fieldHelp}
      </small>
    )}
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
