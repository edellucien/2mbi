import React from 'react';

export default {
  contact: {
    backgroundImage: 'worker.jpg',
    info: <h2>Contact</h2>,
    mobileInfo: <h3>Contact</h3>,
  },
  joinus: {
    backgroundImage: 'worker.jpg',
    info: <h2>Rejoignez-nous</h2>,
    mobileInfo: <h3>Rejoignez-nous</h3>,
  },
  index: {
    backgroundImage: 'motors.jpg',
    info: (
      <div>
        <h2>
          <span>2MBi, un savoir-faire à votre service</span>
        </h2>
        <span>
          <i>
            L&apos;assurance d&apos;une prise en charge rapide et efficace de
            toutes opérations de maintenance industrielles
          </i>
        </span>
      </div>
    ),
    mobileInfo: null,
  },
  moteurs: {
    backgroundImage: 'repair.jpg',
    info: <h2>Moteurs électriques</h2>,
    mobileInfo: <h3>Moteurs électriques</h3>,
  },
  reducteurs: {
    backgroundImage: 'repair.jpg',
    info: <h2>Moto-réducteurs & réducteurs</h2>,
    mobileInfo: (
      <>
        <h3>Moto-réducteurs</h3>
        <h3>réducteurs</h3>
      </>
    ),
  },
  ventilation: {
    backgroundImage: 'ventilation.jpg',
    info: <h2>Ventilation</h2>,
    mobileInfo: <h3>Ventilation</h3>,
  },
  pompes: {
    backgroundImage: 'pump.jpg',
    info: <h2>Pompes</h2>,
    mobileInfo: <h3>Pompes</h3>,
  },
  electricite: {
    backgroundImage: 'elec.jpg',
    info: <h2>Electricité, automatismes & variateurs</h2>,
    mobileInfo: (
      <>
        <h3>Electricité, automatismes</h3>
        <h3>variateurs</h3>
      </>
    ),
  },
};
