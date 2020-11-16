import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import theme from '../../themes/2mbi-theme';
import css from './Footer.scss';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={css.footer}>
      <Container
        maxWidth="lg"
        className={isVerySmall ? css.footerContentSmall : css.footerContent}
      >
        <span>© 2MBI, tous droits réservés | </span>
        <Link href="/legals">
          <a>&nbsp;Mentions légales&nbsp;</a>
        </Link>
        |
        <div>
          &nbsp;
          Conception du site internet :
          &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/edellucien/2mbi"
          >
            Edel Lucien
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
