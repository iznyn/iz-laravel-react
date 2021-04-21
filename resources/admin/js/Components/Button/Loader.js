/**
 * Components/Button/Loader.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CgSpinner } from 'react-icons/cg';

const ButtonLoader = ({ size }) => {
  let sizeClass = '';
  switch (size) {
    case 'xs':
    case 'sm':
      sizeClass = 'text-lg';
      break;
    case 'lg':
    case 'xl':
      sizeClass = 'text-3xl';
      break;
    default:
      sizeClass = 'text-2xl';
  }

  return (
    <div className={classNames(['button__loader animate-spin', sizeClass])}>
      <CgSpinner />
    </div>
  );
};

ButtonLoader.defaultProps = {
  size: 'md',
};

ButtonLoader.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

export default ButtonLoader;
