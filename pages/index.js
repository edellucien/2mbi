import React from 'react';
import PrestationLayout from '../src/components/PrestationLayout';
import Layout from '../src/components/Layout';
import Prestations from '../src/components/Prestations';

import { offers } from './index.scss';

const presentation = (
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
    <p>
      /.. En cours Héritage le l&apos;atelier Langmann, basé
      historiquement à Erstein. l&apos;Entreprise, reprise en 20.. par
      Philippe Bricola, a su se developper, pour s&apos;installer dans de
      nouveaux locaux a Benfled en 20.. Progressivement un elargissement
      des competences ../
    </p>

    <p>
      La maintenance et la réparation se font sur site ou dans nos ateliers.
    </p>
  </div>
);

const Index = () => (
  <Layout>
    <PrestationLayout page="index">
      {presentation}
      <div className={offers}>
        <h1>Nos prestations</h1>
        <Prestations />
      </div>
    </PrestationLayout>
  </Layout>
);

export default Index;
