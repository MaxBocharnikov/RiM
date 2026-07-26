import { classNames } from '../../lib';

import styles from './StatusDot.module.scss';

type Status = 'alive' | 'dead' | 'unknown';

type Props = {
  status: Status;
};

export const StatusDot = ({ status }: Props) => (
  <span className={classNames(styles.status_dot, styles[`status_dot_${status}`])} />
);
