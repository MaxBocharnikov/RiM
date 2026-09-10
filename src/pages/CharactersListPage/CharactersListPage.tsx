import { useState } from 'react';

import { mainLogo } from '@/assets';
import { CharacterCard, useLoadCharacters } from '@/entities';
import { CharacterFilters, mapFiltersToParams, type ICharacterFilters } from '@/features';
import { Loader, useDebounce } from '@/shared';

import styles from './CharactersListPage.module.scss';

const initialFilters: ICharacterFilters = {
  name: '',
  species: null,
  gender: null,
  status: null
};

export const CharactersListPage = () => {
  const [filters, setFilters] = useState<ICharacterFilters>(initialFilters);

  const debouncedName = useDebounce(filters.name);
  const params = mapFiltersToParams({ ...filters, name: debouncedName });

  const { characters, isLoading } = useLoadCharacters(params);

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
      <div className={styles.filters_section}>
        <CharacterFilters
          value={filters}
          onChange={setFilters}
        />
      </div>

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
