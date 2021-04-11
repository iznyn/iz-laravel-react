import React from 'react';
import PropTypes from 'prop-types';

const LayoutMaster = ({ children }) => <div>{children}</div>;

LayoutMaster.propTypes = {
  children: PropTypes.node,
};

export default LayoutMaster;
