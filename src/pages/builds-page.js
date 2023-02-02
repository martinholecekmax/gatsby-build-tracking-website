import React from 'react';

import Builds from '../components/builds-page/builds/builds';
import TriggerButton from '../components/builds-page/trigger-button/trigger-button';

import styles from './builds-page.module.css';

const BuildsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Build History</div>
        <TriggerButton />
      </div>
      <Builds />
    </div>
  );
};

export default BuildsPage;
