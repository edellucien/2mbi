import React from 'react';
import Layout from '../src/components/Layout';
import PrestationLayout from '../src/components/PrestationLayout';

const pompes = () => (
  <Layout>
    <PrestationLayout page="pompes">
      <p>
        <b>Maintenance et réparation de pompes</b>
      </p>
      <ul>
        <li>relevage</li>
        <li>assainissement</li>
        <li>chantiers</li>
        <li>centrifuges</li>
        <li>immergées</li>
        <li>pour applications industrielles</li>
        <li>machines outils</li>
        <li>piscines</li>
      </ul>
    </PrestationLayout>
  </Layout>
);

export default pompes;
