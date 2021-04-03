import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from './styles';

const Title = (props) => {
  const { as, style, size, children, styles } = props;
  const classes = useStyles();
  const TitleTag = `${as}`;

  const twClasses = ['text-black uppercase'];
  switch (size) {
    case '2xs':
      twClasses.push('mb-3 text-xs');
      break;
    case 'xs':
      twClasses.push('mb-5 text-sm');
      break;
    case 'sm':
      twClasses.push('mb-7 text-base');
      break;
    case 'lg':
      twClasses.push('mb-15 text-xl');
      break;
    case 'xl':
      twClasses.push('mb-20 text-2xl');
      break;
    case '2xl':
      twClasses.push('mb-25 text-3xl');
      break;
    default:
      twClasses.push('mb-10 text-lg');
  }

  return (
    <TitleTag
      className={classNames(
        'title',
        `title--${style}`,
        classes.root,
        twClasses,
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
  size: PropTypes.oneOf(['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  style: PropTypes.oneOf(['default']),
  children: PropTypes.node,
  styles: PropTypes.object,
};

export default Title;
