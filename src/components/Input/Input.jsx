import React from 'react';
import T from 'prop-types';

const Input = ({ name, label, type, value, handleChange, placeholder, maxLength, autocomplete, errorMessage }) => {
  const inputStyle = errorMessage[name] ? 'control__input control__input--error' : 'control__input';

  return (
    <label className="control" htmlFor={name}>
      <span className="control__label">{label}</span>
      <input
        className={inputStyle}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autocomplete}
      />
      {errorMessage[name] ? <span className="control__error-messsage">{errorMessage[name]}</span> : ''}
    </label>
  );
};

Input.defaultProps = {
  errorMessage: {},
  value: '',
};

Input.propTypes = {
  name: T.string.isRequired,
  label: T.string.isRequired,
  type: T.string.isRequired,
  value: T.oneOfType([T.string, T.number]),
  handleChange: T.func.isRequired,
  placeholder: T.string.isRequired,
  maxLength: T.number.isRequired,
  autocomplete: T.string.isRequired,
  errorMessage: T.shape({
    name: T.string,
    phone: T.string,
  }),
};

export default Input;
