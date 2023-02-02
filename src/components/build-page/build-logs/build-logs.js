import React, { useCallback, useEffect, useState } from 'react';
import Log from './build-log';
import axios from '../../../services/axios';

import styles from './build-logs.module.css';

const BuildLogs = ({ id, socket }) => {
  const [logs, setLogs] = useState([]);

  const fetchBuild = useCallback(async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/logs/${id}`
    );
    console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL);
    console.log('response', response);
    const currentLogs = response.data || [];
    setLogs(currentLogs);
  }, [id]);

  useEffect(() => {
    fetchBuild();
  }, [fetchBuild]);

  useEffect(() => {
    socket.on('build-logs', (data) => {
      console.log('data', data);
      const logs = data?.payload;
      const belongsToBuild = id === data?.id;
      if (logs && logs.length > 0 && belongsToBuild) {
        setLogs((prevLogs) => {
          const currentLogs = [...prevLogs];
          // Check if log already exists
          logs.forEach((log) => {
            const logIndex = currentLogs.findIndex(
              (current) => current._id === log._id
            );
            if (logIndex === -1) {
              currentLogs.push(log);
            }
          });
          return currentLogs;
        });
      }
    });
  }, [id, socket]);

  const logList = logs.map((log) => {
    return <Log key={log._id} log={log} />;
  });

  if (!logs || logs.length === 0) {
    return null;
  }

  return <div className={styles.container}>{logList}</div>;
};

export default BuildLogs;
