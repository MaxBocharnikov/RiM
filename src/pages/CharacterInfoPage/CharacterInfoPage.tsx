import { Link } from 'react-router';

import { BackIcon } from '@/assets';

import styles from './CharacterInfoPage.module.scss';

export const CharacterInfoPage = () => {
  return (
    <>
      <Link
        to={'/'}
        className={styles.back_link}
      >
        <BackIcon />
        <h3 className={styles.back_link_label}>GO BACK</h3>
      </Link>
    </>
  );
};
