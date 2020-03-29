import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../src/components/Layout';
import Prestations from '../src/components/Prestations';

import { offers } from './index.scss';

const presentation = (
  <div>
    <h2>2MBi, un savoir-faire à votre service</h2>

    <p>
      <b>Maintenance, bobinage et réparation de moteurs industriels</b>
    </p>
    <p>
      Installée dans le Bas-Rhin, à BENFELD près de Strasbourg, la société 2MBi
      est spécialisée dans la maintenance, la réparation et le bobinage de
      moteurs électriques. Moteurs, réducteurs, pompes, variateurs et
      démarreurs, ventilation, pièces détachées...
    </p>

    <p>
      <b>Entretien et réparation en atelier & sur site</b>
    </p>
    <p>
      La maintenance et la réparation se font sur site ou dans nos ateliers.
    </p>

    <p>
      <b>Pièces détachées et matériel neuf</b>
    </p>
    <p>
      Nous disposons d&apos;un stock de matériel neuf (nous consulter) pour
      remplacement immédiat.
    </p>

    <p>
      <b>Câblage d&apos;armoire électrique</b>
    </p>
    <p>
      Nos professionnels sont également spécialisés dans l&apos;étude de
      conception, la réalisation et la mise en service d&apos;armoires
      électriques. Nous assurons par ailleurs la maintenance et le dépannage des
      armoires électriques existantes.
    </p>
  </div>
);

const Index = () => (
  <Layout>
    {presentation}
    <div className={offers}>
      <b>Nos prestations</b>
      <Container maxWidth="lg">
        <Prestations />
      </Container>
    </div>
  </Layout>
);

export default Index;
