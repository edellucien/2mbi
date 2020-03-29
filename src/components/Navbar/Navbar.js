import React from 'react';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import css from './Navbar.scss';

import logo from './logo.png';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => (
  <div className={css.navbar}>
    <Container maxWidth="lg" className={css.container}>
      <div className={css.main}>
        <img alt="logo" src={logo} />
        <div className={css.title}>
          <a href="/">2MBi</a>
          <span>Maintenance Moteur Bobinage Industriel</span>
        </div>
      </div>
      <ul className="test">
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Informations</a>
          </Link>
        </li>
      </ul>
    </Container>
  </div>
);

export default Navbar;
