import { classNames } from '../../lib';

import styles from './Dot.module.scss';

export type TDotTone = 'success' | 'danger' | 'warning';

type Props = {
  tone: TDotTone;
};

export const Dot = ({ tone }: Props) => <span className={classNames(styles.dot, styles[`dot_${tone}`])} />;
