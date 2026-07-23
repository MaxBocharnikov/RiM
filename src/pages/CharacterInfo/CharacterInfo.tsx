import { Link } from 'react-router';

import { BackIcon } from '../../components';

import './CharacterInfo.scss';

export const CharacterInfo = () => {
  return (
    <>
      <Link
        to={'/'}
        className='back-link'
      >
        <BackIcon />
        <h3 className='back-link-label'>GO BACK</h3>
      </Link>
    </>
  );
};
