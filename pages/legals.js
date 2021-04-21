import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { IoLogoGithub } from 'react-icons/io';
import { MdMood, MdEmail } from 'react-icons/md';
import Layout from '../src/components/Layout';
import MUITheme from '../src/themes/2mbi-theme';
import ContactComp from '../src/components/Contact';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: '20px',
    paddingBottom: '20px',
    '& a': {
      color: '#444',
      textDecoration: 'none',
    },
  },
  contactWrapper: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  infosWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    '& p': {
      marginBlockEnd: '0.5em',
      marginBlockStart: '0.5em',
    },
  },
  conceptionWrapper: {
    '& p': {
      display: 'flex',
      alignItems: 'center',
      marginBlockEnd: '0.5em',
      marginBlockStart: '0.5em',
      '& svg': {
        height: '20px',
        width: '20px',
        paddingRight: '5px',
      },
    },
  },
}));

const Legals = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(MUITheme.breakpoints.down('xs'));

  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container}>
        <h1>Mentions légales</h1>
        <h2>
          <b>Site internet</b>
        </h2>
        <div>www.2mbi.fr</div>
        <h2>
          <b>Sarl 2MBI</b>
        </h2>
        <div className={classes.infosWrapper}>
          <p>Sarl au capital de 12.000€</p>
          <p>SIRET: 501 265 896 00024</p>
          <p>TVA intercommunautaire: FR 07 501 265 896</p>
          <p>Responsable de la publication: Philippe BRICOLA</p>
        </div>
        <div className={classes.contactWrapper}>
          <ContactComp />
        </div>
        <h2>Conception</h2>
        <div className={classes.conceptionWrapper}>
          <p>
            <MdMood />
            Edel Lucien
          </p>
          <p>
            <MdEmail />
            e-mail:&nbsp;
            <a href="mailto:edellucien@gmail.com">edellucien@gmail.com</a>
          </p>
          {isMobile ? (
            <>
              <p>
                <IoLogoGithub />
                github:&nbsp;
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/edellucien/2mbi"
                >
                  https://github.com/edellucien/2mbi
                </a>
              </p>
            </>
          ) : (
            <p>
              <IoLogoGithub />
              github:&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/edellucien/2mbi"
              >
                https://github.com/edellucien/2mbi
              </a>
            </p>
          )}
        </div>
        <h2>Hébergeur</h2>
        <div>
          <b>OVH</b>
          <p>2, rue Kellermann - 59100 Roubaix - France</p>
          <p>SIRET: 424 761 419 00045</p>
        </div>
      </Container>
    </Layout>
  );
};

export default Legals;
