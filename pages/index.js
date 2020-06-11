import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../src/components/Layout';
import Prestations from '../src/components/Prestations';

import { offers } from './index.scss';

const presentation = (
  <div
    style={{
      paddingTop: '10px',
    }}
  >
    <h2>2MBi, un savoir-faire à votre service</h2>

    <p>
      Installée dans le Bas-Rhin, à BENFELD près de Strasbourg, la société 2MBi
      est spécialisée dans la maintenance, la réparation et le bobinage de
      moteurs électriques, ainsi que toutes opérations sur réducteurs, pompes,
      variateurs, démarreurs, ventilation, etc.
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
    <Container maxWidth="lg">
      {presentation}
      <div className={offers}>
        <b>Nos prestations</b>
        <Prestations />
      </div>
    </Container>
  </Layout>
);

export default Index;
