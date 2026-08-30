import { useState } from 'react';

import { Link } from 'react-router';

import { type ICharacter } from '@/entities';
import { Loader } from '@/shared';
import { CharacterCard, CharacterFilters, type ICharacterFilters } from '@/widgets';

import styles from './CharactersList.module.scss';

const MOCK_CHARACTER: ICharacter = {
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick Sanchez',
  gender: 'Male',
  species: 'Human',
  location: 'Earth',
  status: 'Alive'
};

const MOCK_CHARACTERS: ICharacter[] = Array.from({ length: 4 }, () => ({ ...MOCK_CHARACTER }));

const initialFilters: ICharacterFilters = {
  name: '',
  species: null,
  gender: null,
  status: null
};

export const CharactersList = () => {
  const [filters, setFilters] = useState<ICharacterFilters>(initialFilters);
  const [characters, setCharacters] = useState<ICharacter[]>(MOCK_CHARACTERS);

  // Temporary handler for saving character updates, while working with MOCKUPS
  const handleSave = (index: number, update: ICharacter) => {
    setCharacters((prev) => prev.map((item, i) => (i === index ? update : item)));
  };

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
        <div className={styles.card_grid}>
          {characters.map((character, index) => (
            <CharacterCard
              key={index}
              character={character}
              onSave={(next) => handleSave(index, next)}
            />
          ))}
        </div>
      </section>

      <div className={styles.loader_wrapper}>
        <Loader />
      </div>
    </>
  );
};
