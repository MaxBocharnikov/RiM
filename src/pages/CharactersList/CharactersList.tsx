import { useState } from 'react';

import { Link } from 'react-router';

import { LoupeIcon } from '../../assets';
import { Input, Loader, Select } from '../../shared';
import { CharacterCard, CharacterStatusDot, type ICharacter, type TCharacterStatus } from '../../widgets';

import styles from './CharactersList.module.scss';

const MOCK_CHARACTER: ICharacter = {
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick Sanchez',
  gender: 'Male',
  species: 'Human',
  location: 'Earth',
  status: 'Alive'
};

const SPECIES_OPTIONS = [
  { label: 'Human', value: 'human' },
  { label: 'Alien', value: 'alien' },
  { label: 'Humanoid', value: 'humanoid' },
  { label: 'Animal', value: 'animal' },
  { label: 'Robot', value: 'robot' }
];

const STATUS_OPTIONS = [
  { label: 'Alive', value: 'Alive' as const },
  { label: 'Dead', value: 'Dead' as const },
  { label: 'Unknown', value: 'unknown' as const }
];

export const CharactersList = () => {
  const [species, setSpecies] = useState<string | null>(null);
  const [status, setStatus] = useState<TCharacterStatus | null>('Alive');

  const [formName, setFormName] = useState('Rick Sanchez');
  const [filterName, setFilterName] = useState('');

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

      <section className={styles.select_showcase}>
        <div className={styles.select_showcase_column}>
          <h4 className={styles.select_showcase_title}>Большой вариант</h4>
          <Select
            size='medium'
            placeholder='Species'
            value={species}
            onChange={setSpecies}
            options={SPECIES_OPTIONS}
            clearable
          />
        </div>

        <div className={styles.select_showcase_column}>
          <h4 className={styles.select_showcase_title}>Малый вариант</h4>
          <Select
            size='small'
            clearable
            value={status}
            onChange={setStatus}
            options={STATUS_OPTIONS}
            renderDecoration={(option) => <CharacterStatusDot status={option.value} />}
          />
        </div>
      </section>

      <section className={styles.input_showcase}>
        <div className={styles.input_showcase_column}>
          <h4 className={styles.input_showcase_title}>Underline вариант</h4>
          <Input
            variant='underline'
            label='Name'
            value={formName}
            onChange={setFormName}
            onClear={() => setFormName('')}
          />
        </div>

        <div className={styles.input_showcase_column}>
          <h4 className={styles.input_showcase_title}>Outline вариант</h4>
          <Input
            variant='outline'
            label='Filter by name...'
            leftIcon={<LoupeIcon className={styles.search_icon} />}
            value={filterName}
            onChange={setFilterName}
            onClear={() => setFilterName('')}
          />
        </div>
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
