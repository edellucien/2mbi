import React from 'react';
import Layout from '../src/components/Layout';
import PrestationLayout from '../src/components/PrestationLayout';

const ventilation = () => (
  <Layout>
    <PrestationLayout page="ventilation">
      <p>
        <b>Maintenance et réparation de ventilations</b>
      </p>
      <ul>
        <li>axiaux compacts</li>
        <li>moto-hélices à rotor extérieur</li>
        <li>hélicoïdes</li>
        <li>tangentielles</li>
        <li>centrifuges</li>
        <li>moto-turbines</li>
        <li>moteurs de ventilations</li>
        <li>caisson ( pour chaufferie, basse-pression, air chaud, VMC)</li>
        <li>désenfumage</li>
        <li>tourelles de toit hélicoïdes</li>
        <li>tourelles de toit centrifuges</li>
        <li>domestiques (pour gaine murale ou plafond)</li>
        <li>
          accessoires de ventilation (hélices, variateurs, détecteur,
          régulation)
        </li>
      </ul>
    </PrestationLayout>
  </Layout>
);

export default ventilation;
