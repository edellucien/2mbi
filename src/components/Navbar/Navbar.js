import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { IoIosArrowUp } from 'react-icons/io';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import prestationRows from '../../content/prestations';

const useStyles = makeStyles(theme => ({
  header: {
    color: theme.colors.secondaryText,
    background: theme.colors.white,
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 999,
    height: '65px',
    display: 'flex',
    alignItems: 'center',
  },
  headerCompany: {
    color: theme.colors.primaryRed,
    margin: 0,
    height: '100%',
  },
  headerTitle: {
    marginLeft: '35px',
    fontSize: '18px',
    color: theme.colors.secondaryGray,
    opacity: 0.75,
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },
  navbar: {
    color: theme.colors.secondaryText,
    background: theme.colors.secondaryLightGray,
    borderBottomStyle: 'solid',
    borderBottomWidth: '3px',
    borderBottomColor: theme.colors.secondaryGray,
    position: 'fixed',
    top: 65,
    right: 0,
    left: 0,
    zIndex: 999,
    height: '65px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    '& a': {
      color: theme.colors.primaryRed,
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 25px',
    },
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& a': {
      color: theme.colors.secondaryText,
      textDecoration: 'none',
    },
    '& ul': {
      listStyle: 'none',
      display: 'flex',
      '& li': {
        fontSize: '18px',
        [theme.breakpoints.down('xs')]: {
          fontSize: '16px',
        },
      },
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },
  prestaTitle: {
    marginRight: 10,
    [theme.breakpoints.down('xs')]: {
      marginRight: 5,
    },
  },
  arrow: {
    transition: 'transform .25s ease-in-out',
  },
  navBtn: {
    marginRight: 35,
    '&:hover': {
      color: theme.colors.primaryRed,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 5,
    },
  },
  popover: {
    top: '17px !important',
  },
  grow: {
    backgroundColor: theme.colors.secondaryLightGray,
  },
  menuList: {
    display: 'flex',
    flexDirection: 'column',
    borderTopWidth: '3px',
    borderTopStyle: 'solid',
    borderTopColor: theme.colors.primaryRed,
  },
}));

const buttonStyles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '18px',
    padding: 0,
    backgroundColor: 'transparent',
    color: theme.colors.secondaryText,
    lineHeight: 1.5,
    border: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: 'none',
      boxShadow: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },
});

const NavButton = withStyles(buttonStyles)(Button);

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [prestaOpen, setPrestaOpen] = useState(false);

  const handleToggle = () => {
    setPrestaOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setPrestaOpen(false);
  };

  return (
    <>
      <div className={classes.header}>
        <Container maxWidth="lg" className={classes.container}>
          <a href="/">
            <h1 className={classes.headerCompany}>2MBi</h1>
          </a>
          <b className={classes.headerTitle}>
            Maintenance Moteur Bobinage Industriel
          </b>
        </Container>
      </div>
      <div className={classes.navbar}>
        <Container maxWidth="lg" className={classes.navContainer}>
          <ul>
            <li>
              <Link href="/">
                <a className={classes.navBtn}>Accueil</a>
              </Link>
            </li>
            <li>
              <NavButton
                ref={anchorRef}
                className={classes.navBtn}
                onClick={handleToggle}
                disableRipple
              >
                <span className={classes.prestaTitle}>Prestations</span>
                <IoIosArrowUp
                  className={classes.arrow}
                  style={{
                    transform: prestaOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </NavButton>
            </li>
            <li>
              <Link href="/contact">
                <a className={classes.navBtn}>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/joinus">
                <a className={classes.navBtn}>Rejoignez-nous</a>
              </Link>
            </li>
          </ul>
          <Popper
            open={prestaOpen}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            className={classes.popover}
          >
            {({ TransitionProps }) => (
              <Grow
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...TransitionProps}
                className={classes.grow}
              >
                <Paper square>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      className={classes.menuList}
                      autoFocusItem={prestaOpen}
                    >
                      {prestationRows.flat().map(prest => (
                        <MenuItem
                          onClick={() => {
                            Router.push(`/${prest.url}`).then(() =>
                              window.scrollTo(0, 0),
                            );
                          }}
                        >
                          {prest.title}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
