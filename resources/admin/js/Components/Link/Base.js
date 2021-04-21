import React from 'react';
import PropTypes from 'prop-types';
import { InertiaLink } from '@inertiajs/inertia-react';

const LinkBase = (props) => {
  const { to, children, className, ...others } = props;

  return (
    <InertiaLink href={to} className={className} {...others}>
      {children}
    </InertiaLink>
  );
};

LinkBase.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default LinkBase;
