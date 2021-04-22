import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MdLabel, MdToys } from 'react-icons/md';
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

const ventilation = () => {
  const classes = useStyles();
  return (
    <Layout>
      <PrestationLayout page="ventilation">
        <p>
          <h3 className={classes.flex}>
            <MdToys className={classes.icon} />
            Vente, maintenance et réparation de ventilations
          </h3>
        </p>
        <p>
          La société 2MBi fournit, installe et entretien tout types de pièces de
          ventilation:
        </p>
        <ul>
          <li>
            <MdLabel />
            axiaux compacts
          </li>
          <li>
            <MdLabel />
            moto-hélices à rotor extérieur
          </li>
          <li>
            <MdLabel />
            hélicoïdes
          </li>
          <li>
            <MdLabel />
            tangentielles
          </li>
          <li>
            <MdLabel />
            centrifuges
          </li>
          <li>
            <MdLabel />
            moto-turbines
          </li>
          <li>
            <MdLabel />
            moteurs de ventilations
          </li>
          <li>
            <MdLabel />
            caisson ( pour chaufferie, basse-pression, air chaud, VMC)
          </li>
          <li>
            <MdLabel />
            désenfumage
          </li>
          <li>
            <MdLabel />
            tourelles de toit hélicoïdes
          </li>
          <li>
            <MdLabel />
            tourelles de toit centrifuges
          </li>
          <li>
            <MdLabel />
            domestiques (pour gaine murale ou plafond)
          </li>
          <li>
            <MdLabel />
            accessoires de ventilation (hélices, variateurs, détecteur,
            régulation)
          </li>
        </ul>
      </PrestationLayout>
    </Layout>
  );
};

export default ventilation;
