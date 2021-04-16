import React from 'react';
import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';

const LayoutMaster = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

LayoutMaster.propTypes = {
  children: PropTypes.node,
};

export default LayoutMaster;
