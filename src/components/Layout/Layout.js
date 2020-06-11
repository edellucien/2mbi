import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../../themes/2mbi-theme';
import Navbar from '../Navbar';
import Footer from '../Footer';

import css from './Layout.scss';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const Layout = ({ children }) => {
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div>
      <Head>
        <title>2mbi</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Typography component="div" color="textPrimary">
          <Navbar isVerySmall={isVerySmall} />
          <div className={css.wrapper}>{children}</div>
          <Footer />
        </Typography>
      </ThemeProvider>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Lato');

        body {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          font-family: 'Lato', sans-serif;
          margin: 0;
        }

        #__next {
          height: calc(100% - 60px);
          position: relative;
        }
      `}</style>
    </div>
  );
};

Layout.propTypes = propTypes;

export default Layout;
