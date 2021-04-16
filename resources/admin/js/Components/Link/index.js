import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { InertiaLink } from '@inertiajs/inertia-react';

const Link = (props) => {
  const { to, href, outside, children, variant, className } = props;
  const styles = classNames(
    'link',
    `link--${variant}`,
    'text-primary text-xl hover:underline',
    className,
  );

  if (to) {
    return (
      <InertiaLink href={to} className={styles}>
        {children}
      </InertiaLink>
    );
  }

  const linkProps = outside ? { target: '_blank' } : {};
  return (
    <a href={href} className={styles} {...linkProps}>
      {children}
    </a>
  );
};

Link.defaultProps = {
  variant: 'default',
};

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  outside: PropTypes.bool,
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
};

export default Link;
