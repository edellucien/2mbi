import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MdLabel, MdFlashOn, MdSchool, MdShoppingCart } from 'react-icons/md';
import Layout from '../src/components/Layout';
import PrestationLayout from '../src/components/PrestationLayout';

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '5px',
    width: '20px',
    height: '20px',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const electricite = () => {
  const classes = useStyles();
  return (
    <Layout>
      <PrestationLayout page="electricite">
        <p>
          <h3 className={classes.flex}>
            <MdFlashOn className={classes.icon} />
            Installation, maintenance et réparation de variateurs,
            d&apos;automatismes & d&apos;installations électriques industrielles
          </h3>
        </p>
        <p>
          La société 2MBi peut vous accompagner dans vos projets
          d&apos;extension ou de mise en place de nouvelles infrastructures
          électriques industrielles, de l&apos;étude préalable des besoins
          jusqu&apos;à la mise en route et la veille de l&apos;installation.
        </p>
        Faite appel à nous pour:
        <p> - La conception et le cablage d&apos;armoires électriques</p>
        <p>
          - La maintenance et dépannage de toutes installations électriques
          industrielles
        </p>
        <p>
          - L&apos;installation et la programmation de variateurs de vitesse
          ainsi que d&apos;équipements d&apos;automatisme industriel.
        </p>
        <p className={classes.flex} style={{ padding: '10px 0' }}>
          <MdShoppingCart className={classes.icon} />
          Nous proposons de la vente au detail de condensateurs et de divers
          fournitures électriques.
        </p>
        <p>
          <b className={classes.flex}>
            <MdSchool className={classes.icon} />
            Certifications & habilitations
          </b>
          <ul>
            <li>
              <MdLabel />
              Certif 1
            </li>
            <li>
              <MdLabel />
              Certif 2
            </li>
          </ul>
        </p>
      </PrestationLayout>
    </Layout>
  );
};

export default electricite;
