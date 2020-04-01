import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import css from './Navbar.scss';

import logo from './logo.png';

const propTypes = {
  isVerySmall: PropTypes.bool.isRequired,
};

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = ({ isVerySmall }) => (
  <div className={css.navbar}>
    <Container maxWidth="lg" className={css.container}>
      <div className={css.main}>
        <img alt="logo" src={logo} />
        <div className={css.title}>
          <a href="/">2MBi</a>
          {!isVerySmall ? (
            <span>Maintenance Moteur Bobinage Industriel</span>
          ) : null}
        </div>
      </div>
      <ul className="test">
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/information">
            <a>Informations</a>
          </Link>
        </li>
      </ul>
    </Container>
  </div>
);

Navbar.propTypes = propTypes;

export default Navbar;
