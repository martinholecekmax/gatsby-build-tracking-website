import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import BuildCard from '../build-card/build-card';

import axios from '../../../services/axios';

import styles from './builds.module.css';

const Builds = () => {
  const socket = io.connect(process.env.REACT_APP_API_URL);
  const [builds, setBuilds] = useState([]);

  const fetchBuilds = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/builds`);
    console.log('response', response);
    setBuilds(response.data);
  };

  const onCancelBuild = async (buildId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/cancel-build/${buildId}`
    );
    console.log('response', response);
    // fetchBuilds();
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
  }, [socket]);

  const buildList = builds.map((build) => {
    return (
      <BuildCard key={build._id} build={build} onCancelBuild={onCancelBuild} />
    );
  });

  return <div className={styles.container}>{buildList}</div>;
};

export default Builds;
