import { Link } from 'react-router';

import Logo from '../../../assets/icons/logo.svg?react';

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
