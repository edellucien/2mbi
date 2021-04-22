import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MdLabel, MdBuild } from 'react-icons/md';
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

const reducteurs = () => {
  const classes = useStyles();

  return (
    <Layout>
      <PrestationLayout page="reducteurs">
        <p>
          <h3 className={classes.flex}>
            <MdBuild className={classes.icon} />
            Vente, maintenance et réparation de moto-réducteurs & réducteurs
          </h3>
        </p>
        <p>
          Les réducteurs sont des équipements nécessaires pour ajuster le couple
          et la vitesse du moteur et sont une composante clé de nombreuses
          installations industrielles et lignes de productions.
        </p>
        <p>
          La société 2MBi fournit, installe et entretien tout types de
          réducteurs:
        </p>
        <ul>
          <li>
            <MdLabel />à engrenage cylindrique - coaxiaux
          </li>
          <li>
            <MdLabel />
            axes orthogonaux
          </li>
          <li>
            <MdLabel />à roues et vis sans fin
          </li>
          <li>
            <MdLabel />
            pendulaires
          </li>
          <li>
            <MdLabel />
            planétaires
          </li>
          <li>
            <MdLabel />à jeux réduits
          </li>
          <li>
            <MdLabel />à couples coniques
          </li>
          <li>
            <MdLabel />
            tandem
          </li>
          <li>
            <MdLabel />
            renvoi d&apos;angle et indexeurs
          </li>
        </ul>
      </PrestationLayout>
    </Layout>
  );
};

export default reducteurs;
