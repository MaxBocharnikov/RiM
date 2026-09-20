import { mainLogo } from '@/assets';
import { CharactersList } from '@/widgets';

import styles from './CharactersListPage.module.scss';

export const CharactersListPage = () => (
  <>
    <img
      src={mainLogo}
      className={styles.main_logo}
      alt='main_logo'
    />
    <CharactersList />
  </>
);
