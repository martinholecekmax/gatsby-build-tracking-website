import React, { useCallback, useEffect, useState } from 'react';
import axios from '../../../services/axios';

import moment from 'moment';

import BuildStatus from '../../build-status/build-status';

import styles from './build-details.module.css';
import { BUILD_STATUS } from '../../../utils/constants';

const BuildDetails = ({ id, socket }) => {
  const [build, setBuild] = useState({});

  const fetchBuild = useCallback(async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/builds/${id}`
    );
    console.log('response', response);
    const currentBuild = response.data.build || {};
    setBuild(currentBuild);
  }, [id]);

  const onCancelBuild = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/cancel-build/${id}`
    );
    console.log('response', response);
  };

  useEffect(() => {
    fetchBuild();
  }, [fetchBuild]);

  useEffect(() => {
    socket.on('build-updated', (data) => {
      console.log('data', data);
      const build = data?.payload;
      const belongsToBuild = id === data?.id;
      if (build && belongsToBuild) {
        setBuild(build);
      }
    });
  }, [id, socket]);

  const createdAt = moment(build.createdAt).format('MMMM Do YYYY, HH:mm A');
  const buildAuthor = build.authorName;

  const showCancelButton =
    build.status === BUILD_STATUS.QUEUED ||
    build.status === BUILD_STATUS.BUILDING;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Build Details</div>
        {showCancelButton ? (
          <button
            className={`btn ${styles.cancelButton}`}
            onClick={onCancelBuild}
          >
            Cancel Build
          </button>
        ) : null}
      </div>
      <BuildStatus
        status={build.status}
        createdAt={build.createdAt}
        duration={build.duration}
      />
      <div className={styles.content}>
        {/* <div className={styles.buildId}>Build ID: {build._id}</div> */}
        <div>{buildAuthor}</div>
        <div>{createdAt}</div>
      </div>
    </div>
  );
};

export default BuildDetails;
