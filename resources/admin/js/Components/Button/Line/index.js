/**
 * components/Button/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '../Base';
import ButtonLoader from '../Loader';
import ButtonContent from './Content';

const Button = (props) => {
  const {
    color,
    variant,
    size,
    label,
    icon,
    iconPosition,
    loading,
    disabled,
    ...others
  } = props;

  return (
    <ButtonBase disabled={loading || disabled} {...others}>
      {loading ? (
        <ButtonLoader color={color} size={size} />
      ) : (
        <ButtonContent
          label={label}
          icon={icon}
          iconPosition={iconPosition}
          disabled={disabled}
          color={color}
          size={size}
        />
      )}
    </ButtonBase>
  );
};

Button.defaultProps = {
  color: 'primary',
  variant: 'solid',
  size: 'md',
};

Button.propTypes = {
  color: PropTypes.oneOf(['clean', 'dark', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['solid', 'line']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  full: PropTypes.bool,
  label: PropTypes.string,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  outside: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  handler: PropTypes.func,
  buttonProps: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
};

export default Button;
