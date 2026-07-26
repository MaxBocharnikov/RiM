import { Link } from 'react-router';

import { Logo } from '../../ui';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
    </header>
  );
};
