import React from 'react';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import css from './Footer.scss';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => (
  <div className={css.footer}>
    <Container maxWidth="lg" className={css.footerContent}>
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

export default Navbar;
