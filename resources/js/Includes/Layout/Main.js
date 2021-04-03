import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import LayoutMaster from './Master';

const LayoutMain = ({ children }) => (
  <LayoutMaster>
    <Header />
    <main>{children}</main>
    <Footer />
  </LayoutMaster>
);

LayoutMain.propTypes = {
  children: PropTypes.node,
};

export default LayoutMain;
