import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div className="form-group">
      <textarea
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && (
        <div return div className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  value: propTypes.string,
  info: propTypes.string,
  error: propTypes.string,
  onChange: propTypes.func.isRequired
};

export default TextAreaFieldGroup;
