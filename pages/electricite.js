import React from 'react';
import Layout from '../src/components/Layout';
import PrestationLayout from '../src/components/PrestationLayout';

const electricite = () => (
  <Layout>
    <PrestationLayout page="electricite">
      <p>
        <b>
          Installation, maintenance et réparation de variateurs,
          d&apos;automatismes & installations industrielles électriques
        </b>
      </p>
    </PrestationLayout>
  </Layout>
);

export default electricite;
