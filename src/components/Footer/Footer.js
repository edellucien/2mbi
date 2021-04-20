import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.colors.primaryBlack,
    fontSize: '16px',
    color: '#767676',
    position: 'relative',
    padding: '18px 0',
    borderTop: '1px solid rgba(252,252,252,0.25)',
  },
  footerContent: {
    display: 'flex',
    fontSize: '14px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
  legals: {
    color: theme.colors.secondaryGray,
    textDecoration: 'none',
  },
}));

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg" className={classes.footerContent}>
        <span>© 2MBI, tous droits réservés | </span>
        <Link href="/legals">
          <a className={classes.legals}>&nbsp;Mentions légales&nbsp;</a>
        </Link>
      </Container>
    </div>
  );
};

export default Navbar;
