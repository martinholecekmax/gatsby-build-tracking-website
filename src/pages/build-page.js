import React from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

import BuildDetails from '../components/build-page/build-details/build-details';
import BuildLogs from '../components/build-page/build-logs/build-logs';

import styles from './build-page.module.css';

const Build = () => {
  const socket = io.connect(process.env.REACT_APP_API_URL);
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <BuildDetails id={id} socket={socket} />
      <BuildLogs id={id} socket={socket} />
    </div>
  );
};

export default Build;
