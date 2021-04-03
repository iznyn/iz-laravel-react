import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Section = (props) => {
  const {
    title,
    titleTag,
    after,
    before,
    children,
    textSize,
    topSpace,
    bottomSpace,
  } = props;

  return (
    <div
      className={classNames([
        'section',
        `section--${textSize}`,
        `pt-${topSpace}`,
        `pb-${bottomSpace}`,
      ])}
    >
      {before ? <>{before}</> : null}
      {title ? (
        <div className="section__title" as={titleTag}>
          {title}
        </div>
      ) : null}
      <div className="section__main">{children}</div>
      {after ? <>{after}</> : null}
    </div>
  );
};

Section.defaultProps = {
  titleTag: 'h2',
  topSpace: '10',
  bottomSpace: '10',
  textSize: 'md',
};

Section.propTypes = {
  topSpace: PropTypes.string,
  bottomSpace: PropTypes.string,
  textSize: PropTypes.string,
  title: PropTypes.node,
  titleTag: PropTypes.string,
  children: PropTypes.node,
  after: PropTypes.node,
  before: PropTypes.node,
};

export default Section;
