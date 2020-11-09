import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../src/components/Layout';

const Legals = () => (
  <Layout>
    <Container maxWidth="lg">
      <h1>Mentions légales</h1>

      <h2>Editeur:</h2>
      <div>2MBi</div>
      <div>ZAC des Nations - 4, rue d&apos;Italie - 67230 BENFELD</div>
      <div>tel : 03 88 74 10 90</div>
      <div>fax : 03 90 57 65 95</div>

      <h2>Conception:</h2>
      <span>Edel Lucien</span>
      <div>
        contact: <a href="mailto:edellucien@gmail.com">edellucien@gmail.com</a>
      </div>
      <div>
        github:{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/edellucien/2mbi"
        >
          https://github.com/edellucien/2mbi
        </a>
      </div>

      <h2>Hébergeur:</h2>
      <div>...</div>
    </Container>
  </Layout>
);

export default Legals;
