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

const pompes = () => {
  const classes = useStyles();
  return (
    <Layout>
      <PrestationLayout page="pompes">
        <p>
          <h3 className={classes.flex}>
            <MdBuild className={classes.icon} />
            Vente, maintenance et réparation de pompes
          </h3>
        </p>
        <p>
          La société 2MBi fournit, installe et entretien tout types de pompes et
          pièces pour:
        </p>
        <ul>
          <li>
            <MdLabel />
            relevage
          </li>
          <li>
            <MdLabel />
            assainissement
          </li>
          <li>
            <MdLabel />
            chantiers
          </li>
          <li>
            <MdLabel />
            centrifuges
          </li>
          <li>
            <MdLabel />
            immergées
          </li>
          <li>
            <MdLabel />
            pour applications industrielles
          </li>
          <li>
            <MdLabel />
            machines outils
          </li>
          <li>
            <MdLabel />
            piscines
          </li>
        </ul>
      </PrestationLayout>
    </Layout>
  );
};

export default pompes;
