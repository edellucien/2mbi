import React from 'react';
import Layout from '../src/components/Layout';
import PrestationLayout from '../src/components/PrestationLayout';

const reducteurs = () => (
  <Layout>
    <PrestationLayout page="reducteurs">
      <p>
        <b>Maintenance et réparation de moto-réducteurs & réducteurs</b>
      </p>
      <ul>
        <li>à engrenage cylindrique - coaxiaux</li>
        <li>axes orthogonaux</li>
        <li>à roues et vis sans fin</li>
        <li>pendulaires</li>
        <li>planétaires</li>
        <li>à jeux réduits</li>
        <li>à couples coniques</li>
        <li>tandem</li>
        <li>renvoi d&apos;angle et indexeurs</li>
      </ul>
    </PrestationLayout>
  </Layout>
);

export default reducteurs;
