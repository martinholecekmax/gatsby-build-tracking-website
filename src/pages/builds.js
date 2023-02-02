import React, { useEffect, useState } from 'react';

import io from 'socket.io-client';
import axios from '../services/axios';

import BuildCard from '../components/builds-page/build-card';

import styles from './builds.module.css';

const socket = io.connect(process.env.REACT_APP_API_URL);

const Builds = () => {
  const [builds, setBuilds] = useState([]);

  const fetchBuilds = async () => {
    const response = await axios.get('/builds');
    console.log('response', response);
    setBuilds(response.data);
  };

  const triggerBuild = async (clearCache = false) => {
    const response = await axios.post(`/trigger-build`, {
      clearCache,
      authorName: 'Martin Holecek',
      authorId: '1234567890',
    });
    console.log('response', response);
  };

  const onBuildTriggered = () => {
    triggerBuild(false);
  };

  const onBuildTriggeredClear = () => {
    triggerBuild(true);
  };

  const onCancelBuild = async (buildId) => {
    const response = await axios.get(`/cancel-build/${buildId}`);
    console.log('response', response);
    fetchBuilds();
  };

  useEffect(() => {
    fetchBuilds();
  }, []);

  useEffect(() => {
    socket.on('build-updated', (data) => {
      const build = data?.payload;
      if (build) {
        setBuilds((prevBuilds) => {
          const currentBuilds = [...prevBuilds];
          const buildIndex = currentBuilds.findIndex(
            (current) => current._id === build._id
          );
          if (buildIndex !== -1) {
            currentBuilds[buildIndex] = build;
          } else {
            currentBuilds.push(build);
          }
          const uniqueBuilds = currentBuilds.filter(
            (build, index, self) =>
              index === self.findIndex((t) => t._id === build._id)
          );
          const sortedBuilds = uniqueBuilds.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          return sortedBuilds;
        });
      }
    });
  }, []);

  const buildList = builds.map((build) => {
    return (
      <BuildCard key={build._id} build={build} onCancelBuild={onCancelBuild} />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Build History</div>
        <div className={styles.buttons}>
          <button
            className={`btn ${styles.triggerButton}`}
            onClick={onBuildTriggered}
          >
            Trigger build
          </button>
          <button
            className={`btn  btn-success ${styles.clearButton}`}
            onClick={onBuildTriggeredClear}
          >
            Clear cache
          </button>
        </div>
      </div>
      <div className={styles.content}>{buildList}</div>
    </div>
  );
};

export default Builds;
