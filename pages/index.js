import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PrestationLayout from '../src/components/PrestationLayout';
import Layout from '../src/components/Layout';
import ContactFooter from '../src/components/ContactFooter';
import Prestations from '../src/components/Prestations';

const useStyles = makeStyles(() => ({
  offers: {
    flexDirection: 'column',
    margin: '10px 0',
    display: 'flex',
  },
  contact: {
    paddingBottom: '20px',
  },
}));

const Index = () => {
  const classes = useStyles();

  return (
    <Layout>
      <PrestationLayout page="index">
        <div
          style={{
            paddingTop: '10px',
          }}
        >
          <p>
            Installée dans le Bas-Rhin, à BENFELD près de Strasbourg, la société
            2MBi est spécialisée dans la maintenance, la réparation et le
            bobinage de moteurs électriques, ainsi que toutes opérations sur
            réducteurs, pompes, variateurs, démarreurs, ventilation, etc.
          </p>
          <h3>Histoire</h3>
          <div>
            La societe 2MBI a été fondée en 2007 par Philippe Bricola, lors de
            la reprise de l&apos;atelier Langmann historiquement basé à Erstein.
            L&apos;installation dans de nouveaux locaux à Benfeld a coincidé
            avec l&apos;élargissement des compétences, ainsi que de
            l&apos;effectif, passant de deux employés à près d&apos;une dizaine
            dorénavant. Outre l&apos;activité historique de rebobinage de
            moteurs, la société 2MBi est désormais spécialisé dans toutes les
            étapes, de la conception jusqu&apos;a la mise en service et la
            maintenance d&apos;installations industrielles
          </div>
        </div>
        <div className={classes.offers}>
          <h3>Nos prestations</h3>
          <div>
            La société 2MBi assure la vente, la maintenance sur site ou dans
            notre atelier, ainsi que de dépannage de tout les équipements
            suivants:
          </div>
          <Prestations />
        </div>
        <div className={classes.contact}>
          N&apos;hésitez pas à nous rendre visite ou à nous contacter pour plus
          d&apos;informations:
        </div>
      </PrestationLayout>
      <ContactFooter />
    </Layout>
  );
};

export default Index;
