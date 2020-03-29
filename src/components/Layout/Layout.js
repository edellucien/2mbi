import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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
        <Typography color="textPrimary">
          <Navbar isVerySmall={isVerySmall} />
          <Container maxWidth="lg">
            <div className={css.wrapper}>{children}</div>
          </Container>
          <Footer />
        </Typography>
      </ThemeProvider>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Lato');

        body {
          font-family: 'Lato', sans-serif;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

Layout.propTypes = propTypes;

export default Layout;
