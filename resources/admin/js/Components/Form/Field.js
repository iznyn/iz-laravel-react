import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Field = (props) => {
  const { id, label, icon, children, className, size, variant, last } = props;
  const marginSize = size === 'lg' ? 'mb-10' : 'mb-8';

  return (
    <div
      className={classNames(
        'field',
        `field--${variant}`,
        `field--${size}`,
        last ? '' : marginSize,
        className,
      )}
    >
      <label htmlFor={`input-${id}`} className="field__label block mb-3">
        {label}
      </label>
      <div className={classNames('field__input relative', icon ? 'pl-9' : '')}>
        {icon ? (
          <div className="field__icon absolute left-0 inset-y-0 text-light2 text-2xl">
            {icon}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
};

Field.defaultProps = {
  size: 'md',
  variant: 'default',
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  last: PropTypes.bool,
  children: PropTypes.node,
};

export default Field;
