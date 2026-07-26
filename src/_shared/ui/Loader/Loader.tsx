import portalImg from '../../../assets/images/loading_image.png';
import { classNames } from '../../lib';

import styles from './Loader.module.scss';

type Props = {
  show: boolean;
  size?: 'small' | 'large';
  label?: string;
};

export const Loader = (props: Props) => {
  const { show, label, size = 'large' } = props;

  if (!show) return null;

  return (
    <div className={styles.loader}>
      <img
        className={classNames(styles.loader_portal, styles[`loader_portal_${size}`])}
        src={portalImg}
        alt='loader'
        aria-hidden='true'
      />
      {label && <p className={styles.loader_label}>{label}</p>}
    </div>
  );
};
