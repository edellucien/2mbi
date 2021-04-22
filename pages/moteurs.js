import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  MdBuild,
  MdLabel,
  MdSchool,
  MdAccessTime,
  MdShoppingCart,
} from 'react-icons/md';
import Layout from '../src/components/Layout';
import PrestationLayout from '../src/components/PrestationLayout';

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: '5px',
      width: '20px',
      height: '20px',
    },
  },
  justified: {
    justifyContent: 'center',
  },
  icon: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  sew: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '15px',
  },
  sewLogo: {
    width: '120px',
    height: '120px',
  },
  divers: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  diversMobile: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));

const moteursPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <PrestationLayout page="moteurs">
        <p>
          <h3 className={classes.flex}>
            <MdBuild className={classes.icon} />
            La société 2MBI est spécialisée dans la maintenance, le bobinage et
            la réparation de moteurs électriques
          </h3>
        </p>
        <p>
          En fonction de la panne et de l&apos;état du moteur un remplacement
          n&apos;est pas systématiquement nécessaire. Pour ce faire la société
          2MBi dispose d&apos;un solide savoir faire pour remplacer au mieux les
          bobines et de réparer les éventuelles pièces défectueuses pour
          restituter dans les meilleurs délais un moteur à nouveau fonctionnel.
        </p>
        Nous fournissons et intervenons sur une large gamme de moteurs:
        <ul>
          <li>
            <MdLabel />
            Moteurs à courant continu
          </li>
          <li>
            <MdLabel />
            Moteurs à bagues
          </li>
          <li>
            <MdLabel />
            Moteurs frein (continu triphasé)
          </li>
          <li>
            <MdLabel />
            Moteurs triphasés
          </li>
          <li>
            <MdLabel />
            Moteurs anti-déflagrants
          </li>
          <li>
            <MdLabel />
            Moteurs multi-vitesses
          </li>
          <li>
            <MdLabel />
            Moteurs de positionnement
          </li>
          <li>
            <MdLabel />
            Moteurs extra-plats
          </li>
          <li>
            <MdLabel />
            Moteurs à sécurité augmentée
          </li>
          <li>
            <MdLabel />
            Moteurs monophasés
          </li>
          <li>
            <MdLabel />
            Tambours moteurs
          </li>
          <li>
            <MdLabel />
            Servomoteurs
          </li>
          <li>
            <MdLabel />
            Moteurs vibreurs
          </li>
        </ul>
        <div className={classes.flex}>
          <MdShoppingCart className={classes.icon} />
          <span className={classes.divers}>
            En plus de la vente de moteurs électriques, nous proposons de la
            vente au detail de divers fournitures, tels que
          </span>
          <span className={classes.diversMobile}>
            En plus de la vente de moteurs électriques, nous proposons de la
            vente au detail de divers fournitures, tels que des condensateurs,
            des roulements, poulies, courroies, etc.
          </span>
        </div>
        <span className={classes.divers}>
          des condensateurs, des roulements, poulies, courroies, etc.
        </span>
        <div className={classes.sew}>
          La société 2MBi fait partie du réseau de partenaires SEW:
          <div className={`${classes.flex} ${classes.justified}`}>
            <img
              alt="logo-sew"
              className={classes.sewLogo}
              src="../static/images/sew.png"
            />
          </div>
        </div>
        <div className={`${classes.flex} ${classes.justified}`}>
          <MdAccessTime className={classes.icon} />
          Nous garantissons une prise en charge rapide et efficace en cas de
          panne.
        </div>
        <p>
          <b className={classes.flex}>
            <MdSchool />
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

export default moteursPage;
