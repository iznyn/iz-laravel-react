import React from 'react';
import PropTypes from 'prop-types';

import LayoutMaster from './Master';

const LayoutBlank = ({ children }) => <LayoutMaster>{children}</LayoutMaster>;

LayoutBlank.propTypes = {
  children: PropTypes.node,
};

export default LayoutBlank;
