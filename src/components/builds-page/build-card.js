import React from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment/moment';

import { BUILD_STATUS } from '../../utils/constants';
import BuildStatus from '../build-status/build-status';

import styles from './build-card.module.css';

const BuildCard = ({ build, onCancelBuild }) => {
  const createdAt = moment(build.createdAt).format('MMMM Do YYYY, HH:mm A');

  console.log('build.duration', build.duration);
  const showCancelButton =
    build.status === BUILD_STATUS.QUEUED ||
    build.status === BUILD_STATUS.BUILDING;

  return (
    <div key={build.id} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Build Triggered</div>
        <div className={styles.buttons}>
          <Link to={`/builds/${build._id}`}>View Build</Link>
          {showCancelButton ? (
            <div
              className={`${styles.cancelButton}`}
              onClick={() => onCancelBuild(build._id)}
            >
              Cancel Build
            </div>
          ) : null}
        </div>
      </div>
      <BuildStatus
        status={build.status}
        createdAt={build.createdAt}
        duration={build.duration}
      />
      <div className={styles.content}>
        <div className={styles.buildId}>{build._id}</div>
        <div>{build.authorName}</div>
        <div>{createdAt}</div>
      </div>
    </div>
  );
};

export default BuildCard;
