import { Link } from 'react-router';
import { Loader } from '../../components';

import './CharactersList.css';

export const CharactersList = () => {
  return (
    <section>
      {/*
        ToDo: test navigation to character details page on click of the image title and show loader until the details page is loaded
      */}
      <Link
        className='details_link'
        to={'/character/1'}
      >
        <h3>Open Details Page</h3>
      </Link>
      <div className={'loader_wrapper'}>
        <Loader
          show={true}
          label='Loading characters...'
        />
      </div>
    </section>
  );
};
