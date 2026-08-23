import { useState } from 'react';

import { Link } from 'react-router';

import { type ICharacter } from '../../entities';
import { Loader } from '../../shared';
import { CharacterCard, CharacterFilters, type ICharacterFilters } from '../../widgets';

import styles from './CharactersList.module.scss';

const MOCK_CHARACTER: ICharacter = {
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick Sanchez',
  gender: 'Male',
  species: 'Human',
  location: 'Earth',
  status: 'Alive'
};

const initialFilters: ICharacterFilters = {
  name: '',
  species: null,
  gender: null,
  status: null
};

export const CharactersList = () => {
  const [filters, setFilters] = useState<ICharacterFilters>(initialFilters);
  const [character, setCharacter] = useState<ICharacter>(MOCK_CHARACTER);

  return (
    <>
      {/*
        ToDo: test navigation to character details page on click of the image title and show loader until the details page is loaded
      */}
      <Link
        className={styles.details_link}
        to={'/character/1'}
      >
        <h3>Open Details Page</h3>
      </Link>

      <section className={styles.filters_section}>
        <CharacterFilters
          value={filters}
          onChange={setFilters}
        />
      </section>

      <section className={styles.card_showcase}>
        <h4 className={styles.card_showcase_title}>Карточка персонажа</h4>
        <CharacterCard
          character={character}
          onSave={setCharacter}
        />
      </section>

      <div className={styles.loader_wrapper}>
        <Loader />
      </div>
    </>
  );
};
