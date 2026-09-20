import { useState } from 'react';

import { CharacterCard, useLoadCharacters } from '@/entities';
import { CharacterFilters, mapFiltersToParams, type ICharacterFilters } from '@/features';
import { Loader, useDebounce } from '@/shared';

import styles from './CharactersList.module.scss';

const initialFilters: ICharacterFilters = {
  name: '',
  species: null,
  gender: null,
  status: null
};

export const CharactersList = () => {
  const [filters, setFilters] = useState<ICharacterFilters>(initialFilters);

  const debouncedName = useDebounce(filters.name);
  const params = mapFiltersToParams({ ...filters, name: debouncedName });

  const { characters, isLoading } = useLoadCharacters(params);

  return (
    <div className={styles.container}>
      <div className={styles.filters_section}>
        <CharacterFilters
          value={filters}
          onChange={setFilters}
        />
      </div>

      <section className={styles.card_showcase}>
        {isLoading ? (
          <div className={styles.loader_wrapper}>
            <Loader />
          </div>
        ) : (
          <div className={styles.card_grid}>
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onSave={() => {}}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
