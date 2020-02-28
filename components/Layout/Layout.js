import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Navbar from '../Navbar';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>2mbi</title>
    </Head>
    <Navbar />
    <div className="container">{children}</div>
    <style jsx global>{`
      body {
        margin: 0;
        font-family: sans-serif;
      }
    `}</style>
  </div>
);

Layout.propTypes = propTypes;

export default Layout;
