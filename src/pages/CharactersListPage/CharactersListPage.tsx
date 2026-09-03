import { useState } from 'react';

import mainLogo from '@/assets/images/main_logo.jpg';
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
      <img
        src={mainLogo}
        className={styles.main_logo}
        alt='main_logo'
      />
      <section className={styles.filters_section}>
        <CharacterFilters
          value={filters}
          onChange={setFilters}
        />
      </section>

      <section className={styles.card_showcase}>
        <div className={styles.card_grid}>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onSave={() => {}}
            />
          ))}
        </div>
      </section>
    </>
  );
};
