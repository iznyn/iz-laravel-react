/**
 * components/Button/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonContent = (props) => {
  const { label, icon, iconPosition, color, size } = props;

  let pos = iconPosition;
  if (!pos) {
    pos = 'right';
  }

  let sizeClass = '';
  switch (size) {
    case 'xs':
      sizeClass = 'text-base';
      break;
    case 'sm':
      sizeClass = 'text-lg';
      break;
    case 'lg':
    case 'xl':
      sizeClass = 'text-2xl';
      break;
    default:
      sizeClass = 'text-xl';
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
        `button__content flex items-center text-${color}`,
        pos === 'right' ? 'flex-row' : 'flex-row-reverse',
        sizeClass,
      ])}
    >
      <span className="button__content__label">{label}</span>
      {getIcon(icon)}
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
};

export default ButtonContent;
