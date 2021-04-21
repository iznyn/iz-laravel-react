/**
 * components/Button/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ButtonLoader from '../Loader';

const ButtonContent = (props) => {
  const { label, icon, iconPosition, color, size, loading } = props;

  let pos = iconPosition;
  if (!pos) {
    pos = 'right';
  }

  let sizeClass = 'text-base';
  if (size !== 'md') {
    sizeClass = `text-${size}`;
  }
  if (['md', 'lg', 'xl'].includes(size)) {
    sizeClass += ' font-bold';
  }

  let colorClass = 'text-white';
  if (color === 'clean') {
    colorClass = 'text-primary';
  }

  const getIcon = (iconImg) => (
    <React.Fragment>
      {icon ? (
        <span
          className={classNames([
            'button__content__icon',
            pos === 'right' ? 'ml-6' : 'mr-6',
          ])}
        >
          {typeof icon === 'string' ? <img src={iconImg} alt="" /> : <icon />}
        </span>
      ) : null}
    </React.Fragment>
  );

  return (
    <div
      className={classNames([
        `button__content flex items-center`,
        pos === 'right' ? 'flex-row' : 'flex-row-reverse',
        colorClass,
        sizeClass,
      ])}
    >
      {loading ? (
        <ButtonLoader size={size} />
      ) : (
        <React.Fragment>
          <span className="button__content__label">{label}</span>
          {getIcon(icon)}
        </React.Fragment>
      )}
    </div>
  );
};

ButtonContent.defaultProps = {
  color: 'primary',
  size: 'md',
};

ButtonContent.propTypes = {
  label: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  color: PropTypes.oneOf(['clean', 'dark', 'primary', 'secondary']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  loading: PropTypes.bool,
};

export default ButtonContent;
