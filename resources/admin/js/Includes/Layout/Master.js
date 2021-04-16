import React from 'react';
import PropTypes from 'prop-types';
// import { ChakraProvider } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { usePage } from '@inertiajs/inertia-react';

const LayoutMaster = ({ children }) => {
  const {
    pageTitle,
    pageDescription,
    pageKeywords,
    pageThumbnail,
    siteName,
  } = usePage().props;

  let title = siteName;
  if (pageTitle && pageTitle !== '') {
    title = `${pageTitle} | ${title}`;
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        <meta name="og:url" content="" />
        <meta name="og:image" content={pageThumbnail} />
      </Helmet>
      {children}
    </>
  );
};

LayoutMaster.propTypes = {
  children: PropTypes.node,
};

export default LayoutMaster;
