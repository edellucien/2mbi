import React from 'react';
import { MdLabel } from 'react-icons/md';
import Layout from '../src/components/Layout';
import PrestationLayout from '../src/components/PrestationLayout';

const moteursPage = () => (
  <Layout>
    <PrestationLayout page="moteurs">
      <p>
        <b>
          La société 2MBI est spécialisée dans la maintenance, le bobinage et la
          réparation de moteurs électriques
        </b>
      </p>

      Liste des taches:
      bobinage en atelier,
      remplacemnt de pieces, reparation
      remplacement et vente: differente certifiation de moteurs
      voir gamme en dessous (voir plus pour toggle tout les moteurs)

      <span>Nous intervenons sur une large gamme de moteurs:</span>
      <ul>
        <li>
          <MdLabel />
          Moteurs à courant continu
        </li>
        <li>
          <MdLabel />
          Moteurs à bagues
        </li>
        <li>
          <MdLabel />
          Moteurs frein (continu triphasé)
        </li>
        <li>
          <MdLabel />
          Moteurs triphasés
        </li>
        <li>
          <MdLabel />
          Moteurs anti-déflagrants
        </li>
        <li>
          <MdLabel />
          Moteurs multi-vitesses
        </li>
        <li>
          <MdLabel />
          Moteurs de positionnement
        </li>
        <li>
          <MdLabel />
          Moteurs extra-plats
        </li>
        <li>
          <MdLabel />
          Moteurs à sécurité augmentée
        </li>
        <li>
          <MdLabel />
          Moteurs monophasés
        </li>
        <li>
          <MdLabel />
          Tambours moteurs
        </li>
        <li>
          <MdLabel />
          Servomoteurs
        </li>
        <li>
          <MdLabel />
          Moteurs vibreurs
        </li>
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
