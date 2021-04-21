/**
 * components/Button/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import ButtonSolid from './Solid';
import ButtonLine from './Line';

const Button = (props) => {
  const { variant, ...others } = props;

  if (variant === 'line') {
    return <ButtonLine {...others} />;
  }
  return <ButtonSolid {...others} />;
};

Button.defaultProps = {
  variant: 'solid',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['solid', 'line']),
};

export default Button;
