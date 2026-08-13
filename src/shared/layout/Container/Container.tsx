import React from 'react';

import styles from './Container.module.scss';

interface Props {
  children: React.ReactNode;
}

export const Container = (props: Props) => {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
};
