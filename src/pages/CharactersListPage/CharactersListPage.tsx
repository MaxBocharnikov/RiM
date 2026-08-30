import { useState } from 'react';

import { Link } from 'react-router';

import { useLoadCharacters } from '@/entities';
import { Loader } from '@/shared';
import { CharacterCard, CharacterFilters, type ICharacterFilters } from '@/widgets';

import styles from './CharactersListPage.module.scss';

const initialFilters: ICharacterFilters = {
  name: '',
  species: null,
  gender: null,
  status: null
};

export const CharactersListPage = () => {
  const { characters, isLoading } = useLoadCharacters();

  const [filters, setFilters] = useState<ICharacterFilters>(initialFilters);

  if (isLoading) {
    return (
      <div className={styles.loader_wrapper}>
        <Loader />
      </div>
    );
  }

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
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              // ToDo: персистентность правок карточки — отдельная задача
              onSave={() => {}}
            />
          ))}
        </div>
      </section>
    </>
  );
};
