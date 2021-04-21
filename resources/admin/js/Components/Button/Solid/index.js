/**
 * components/Button/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ButtonBase from '../Base';
import ButtonContent from './Content';

const Button = (props) => {
  const {
    color,
    variant,
    size,
    full,
    label,
    icon,
    iconPosition,
    loading,
    disabled,
    ...others
  } = props;

  let spaceClass = '';
  switch (size) {
    case 'xs': {
      spaceClass = 'py-2 px-2.5';
      break;
    }
    case 'sm': {
      spaceClass = 'py-2 px-3.5';
      break;
    }
    case 'lg': {
      spaceClass = 'py-3 px-5';
      break;
    }
    case 'xl': {
      spaceClass = 'py-3.5 px-6';
      break;
    }
    default: {
      spaceClass = 'py-2.5 px-4';
      break;
    }
  }

  const buttonClasses = classNames(
    `button bg-${color} flex items-center justify-center rounded-4xl`,
    { 'opacity-80 cursor-not-allowed': disabled },
    { 'w-full block': full },
    spaceClass,
  );

  return (
    <ButtonBase
      disabled={loading || disabled}
      className={buttonClasses}
      {...others}
    >
      <ButtonContent
        label={label}
        icon={icon}
        iconPosition={iconPosition}
        disabled={disabled}
        color={color}
        size={size}
        loading={loading}
      />
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
