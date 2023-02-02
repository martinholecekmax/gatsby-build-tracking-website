import React from 'react';
import { Link } from 'react-router-dom';

import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Home</div>
      <Link to='/builds'>Show Builds</Link>
    </div>
  );
};

export default Home;
