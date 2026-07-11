import { useState } from 'react';

import { Link } from 'react-router';

import { Loader, Select, StatusDot } from '../../components';

import './CharactersList.css';

const SPECIES_OPTIONS = [
  { label: 'Human', value: 'human' },
  { label: 'Alien', value: 'alien' },
  { label: 'Humanoid', value: 'humanoid' },
  { label: 'Animal', value: 'animal' },
  { label: 'Robot', value: 'robot' }
];

type Status = 'alive' | 'dead' | 'unknown';

const STATUS_OPTIONS: { label: string; value: Status }[] = [
  { label: 'Alive', value: 'alive' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' }
];

export const CharactersList = () => {
  const [species, setSpecies] = useState<string | null>(null);
  const [status, setStatus] = useState<Status | null>('alive');

  return (
    <>
      {/*
        ToDo: test navigation to character details page on click of the image title and show loader until the details page is loaded
      */}
      <Link
        className='details_link'
        to={'/character/1'}
      >
        <h3>Open Details Page</h3>
      </Link>

      <section className='select_showcase'>
        <div className='select_showcase__column'>
          <h4 className='select_showcase__title'>Большой вариант</h4>
          <Select
            size='medium'
            placeholder='Species'
            value={species}
            onChange={setSpecies}
            options={SPECIES_OPTIONS}
            clearable
          />
        </div>

        <div className='select_showcase__column'>
          <h4 className='select_showcase__title'>Малый вариант</h4>
          <Select
            size='small'
            clearable
            value={status}
            onChange={setStatus}
            decorationSlot={status ? <StatusDot status={status} /> : null}
            options={STATUS_OPTIONS}
          />
        </div>
      </section>

      <div className={'loader_wrapper'}>
        <Loader
          show={true}
          label='Loading characters...'
        />
      </div>
    </>
  );
};
