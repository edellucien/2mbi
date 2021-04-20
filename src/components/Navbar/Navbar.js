import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import logo from './logo.png';

const propTypes = {
  isVerySmall: PropTypes.bool.isRequired,
};

const useStyles = makeStyles(theme => ({
  navbar: {
    color: theme.colors.secondaryText,
    background: theme.colors.secondaryLightGray,
    borderBottom: '1px solid #e5e5e5',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 999,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& a': {
      color: theme.colors.secondaryText,
      textDecoration: 'none',
    },
    '& ul': {
      listStyle: 'none',
      display: 'flex',
      '& li': {
        fontSize: '18px',
        marginRight: '20px',
      },
    },
  },
  main: {
    display: 'flex',
    '& a': {
      display: 'flex',

      '& img': {
        width: '90px',
        height: '70px',
        paddingRight: '10px',
      },
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  navBtn: {
    '&:hover': {
      color: theme.colors.primaryRed,
    },
  },
}));

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = ({ isVerySmall }) => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.main}>
          <a href="/">
            <img alt="logo" src={logo} />
            <div className={classes.title}>
              <span>2MBi</span>
              {!isVerySmall ? (
                <span>Maintenance Moteur Bobinage Industriel</span>
              ) : null}
            </div>
          </a>
        </div>
        <ul className="test">
          <li>
            <Link href="/">
              <a className={classes.navBtn}>Accueil</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={classes.navBtn}>Contact</a>
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

Navbar.propTypes = propTypes;

export default Navbar;
