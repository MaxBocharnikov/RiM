import { Link } from 'react-router';

import { BackIcon } from '../../components';

import './CharacterInfo.css';

export const CharacterInfo = () => {
  return (
    <>
      <Link
        to={'/'}
        className='back_link'
      >
        <BackIcon />
        <h3 className='back_link_label'>GO BACK</h3>
      </Link>
    </>
  );
};
