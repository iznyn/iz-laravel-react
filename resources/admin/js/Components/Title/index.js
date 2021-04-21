import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Title = (props) => {
  const { as, style, size, children, styles } = props;
  const TitleTag = `${as}`;

  return (
    <TitleTag
      className={classNames(
        'title',
        `title--${style}`,
        `text-black uppercase text-${size} md-${size}`,
        styles,
      )}
    >
      <span>{children}</span>
    </TitleTag>
  );
};

Title.defaultProps = {
  as: 'h2',
  size: 'md',
  style: 'default',
};

Title.propTypes = {
  as: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  style: PropTypes.oneOf(['default']),
  children: PropTypes.node,
  styles: PropTypes.object,
};

export default Title;
