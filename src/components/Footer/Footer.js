import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import { FaLinkedin } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.colors.primaryBlack,
    fontSize: '16px',
    color: theme.colors.secondaryLightGray,
    position: 'relative',
    padding: '18px 0',
    borderTop: '1px solid rgba(252,252,252,0.25)',
  },
  footerContent: {
    display: 'flex',
    fontSize: '14px',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& a': {
      color: theme.colors.secondaryLightGray,
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
  linkedin: {
    height: '30px',
    width: '30px',
  },
}));

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg" className={classes.footerContent}>
        <a
          href="https://www.linkedin.com/in/philippe-bricola-62ab0a155/"
          title="Philippe Bricola"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin className={classes.linkedin} />
        </a>
        <div>
          <span>© 2MBI, tous droits réservés | </span>
          <Link href="/legals">
            <a>&nbsp;Mentions légales&nbsp;</a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
