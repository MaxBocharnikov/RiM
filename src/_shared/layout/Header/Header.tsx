import { Link } from 'react-router';

import { Logo } from '../../ui';

import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
    </header>
  );
};
