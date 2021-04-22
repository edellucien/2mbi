import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MUITheme from '../../themes/2mbi-theme';
import Navbar from '../Navbar';
import Footer from '../Footer';

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: '120px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '105px',
    },
    '& ul': {
      paddingInlineStart: 0,
      '& li': {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0',
        borderTop: '1px solid #ddd',
        '& svg': {
          paddingRight: '5px',
        },
      },
    },
  },
}));

const propTypes = {
  children: PropTypes.element.isRequired,
};

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>2mbi</title>
        <meta
          name="keywords"
          content="2mbi,moteurs,réducteurs,strasbourg,bas rhin,maintenance,bobinage,benfeld,réparation,moteurs industriels,bricola,philippe bricola,variateurs"
        />
      </Head>
      <ThemeProvider theme={MUITheme}>
        <Typography component="div" color="textPrimary">
          <Navbar />
          <div className={classes.wrapper}>{children}</div>
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
