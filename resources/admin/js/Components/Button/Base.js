/**
 * components/Button/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Base';

const ButtonBase = (props) => {
  const {
    children,
    className,
    disabled,
    outside,
    path,
    handler,
    buttonProps,
  } = props;

  if (handler) {
    const func = (evt) => evt.preventDefault();
    const clickHandler = disabled ? func : handler;
    return (
      <button
        className={className}
        disabled={disabled}
        type="button"
        onClick={clickHandler}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
  return (
    <>
      {outside ? (
        <a
          className={className}
          disabled={disabled}
          href={path}
          target="_blank"
          {...buttonProps}
        >
          {children}
        </a>
      ) : (
        <Link
          className={className}
          to={path}
          disabled={disabled}
          {...buttonProps}
        >
          {children}
        </Link>
      )}
    </>
  );
};

ButtonBase.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  outside: PropTypes.bool,
  disabled: PropTypes.bool,
  handler: PropTypes.func,
  buttonProps: PropTypes.object,
};

export default ButtonBase;
