import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../src/components/Layout';
import PrestationLayout from '../src/components/PrestationLayout';
import ContactComp from '../src/components/Contact';

const useStyles = makeStyles(theme => ({
  contactWrapper: {
    display: 'flex',
    padding: '0 0 20px 0',
    '& a': {
      color: '#444',
      '&:hover': {
        color: '#CA0B00',
      },
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));

const Joinus = () => {
  const classes = useStyles();

  return (
    <Layout>
      <PrestationLayout page="joinus">
        <h3>Rejoindre l&apos;équipe 2MBi</h3>
        <p>
          Pour permettre à l&apos;entreprise d&apos;honorer les demandes
          toujours croissantes, nous sommes toujours à l&apos;écoute de
          candidatures spontanées, venant de profils expérimentés dans le monde
          de l&apos;électrotechnique.
        </p>
        <p>
          Toutefois, des places d&apos;apprentis sont régulierement disponibles,
          pour des niveaux ..., ayant une grand capacité d&apos;apprentissage et
          un intérêt certain pour le travail méticuleux et autonome, dans le
          monde de l&apos;industrie alsacienne.
        </p>
        <p>
          N&apos;hésitez pas à nous rendre visite ou à nous contacter pour plus
          d&apos;informations:
        </p>
        <div className={classes.contactWrapper}>
          <ContactComp />
        </div>
      </PrestationLayout>
    </Layout>
  );
};

export default Joinus;
