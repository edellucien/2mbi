import React from 'react';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import css from './Footer.scss';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => (
  <div className={css.footer}>
    <Container maxWidth="lg">
      <div>other content</div>
      <div className={css.footerBottom}>
        <span>© 2MBI, tous droits réservés | </span>
        <Link href="/legals">
          <a>Mentions légales</a>
        </Link>
        {' | '}
        <Link href="/siteMap">
          <a>Plan du site</a>
        </Link>
        {' | '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/edellucien/2mbi"
        >
          Conception du site internet : Edel Lucien
        </a>
      </div>
    </Container>
  </div>
);

export default Navbar;
