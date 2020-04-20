import React from 'react';
import Layout from '../src/components/Layout';
import PrestationLayout from '../src/components/PrestationLayout';

const moteursPage = () => (
  <Layout>
    <PrestationLayout page="moteurs">
      <p>
        <b>Maintenance, bobinage et réparation de moteurs électriques</b>
      </p>
      <ul>
        <li>moteurs à courant continu</li>
        <li>moteurs à bagues</li>
        <li>moteurs frein (continu triphasé)</li>
        <li>moteurs triphasés</li>
        <li>moteurs anti-déflagrants</li>
        <li>moteurs multi-vitesses</li>
        <li>moteurs de positionnement</li>
        <li>moteurs extra-plats</li>
        <li>moteurs à sécurité augmentée</li>
        <li>moteurs monophasés</li>
        <li>tambours moteurs</li>
        <li>servomoteurs</li>
        <li>moteurs vibreurs</li>
      </ul>

      <p>
        Partenaire:
        <br />
        <img alt="logo-sew" src="../static/images/sew.png" />
      </p>
    </PrestationLayout>
  </Layout>
);

export default moteursPage;
