import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import Input from './Input';

const FieldText = (props) => {
  const { id, size, placeholder, inputProps, ...others } = props;

  return (
    <Field id={id} size={size} {...others}>
      <div className="field__text">
        <Input
          type="text"
          name={id}
          size={size}
          placeholder={placeholder}
          {...inputProps}
        />
      </div>
    </Field>
  );
};

FieldText.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  placeholder: PropTypes.string,
  inputProps: PropTypes.object,
};

export default FieldText;
