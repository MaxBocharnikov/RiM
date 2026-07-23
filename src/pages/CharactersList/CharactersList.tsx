import { useState } from 'react';

import { Link } from 'react-router';

import { Input, Loader, LoupeIcon, Select, StatusDot } from '../../components';

import './CharactersList.css';

const SPECIES_OPTIONS = [
  { label: 'Human', value: 'human' },
  { label: 'Alien', value: 'alien' },
  { label: 'Humanoid', value: 'humanoid' },
  { label: 'Animal', value: 'animal' },
  { label: 'Robot', value: 'robot' }
];

type Status = 'alive' | 'dead' | 'unknown';

const STATUS_OPTIONS = [
  { label: 'Alive', value: 'alive', decorationSlot: <StatusDot status='alive' /> },
  { label: 'Dead', value: 'dead', decorationSlot: <StatusDot status='dead' /> },
  { label: 'Unknown', value: 'unknown', decorationSlot: <StatusDot status='unknown' /> }
] satisfies { label: string; value: Status; decorationSlot: React.ReactNode }[];

export const CharactersList = () => {
  const [species, setSpecies] = useState<string | null>(null);
  const [status, setStatus] = useState<Status | null>('alive');

  const [formName, setFormName] = useState('Rick Sanchez');
  const [filterName, setFilterName] = useState('');

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
            options={STATUS_OPTIONS}
          />
        </div>
      </section>

      <section className='input_showcase'>
        <div className='input_showcase__column'>
          <h4 className='input_showcase__title'>Underline вариант</h4>
          <Input
            variant='underline'
            label='Name'
            value={formName}
            onChange={setFormName}
            onClear={() => setFormName('')}
          />
        </div>

        <div className='input_showcase__column'>
          <h4 className='input_showcase__title'>Outline вариант</h4>
          <Input
            variant='outline'
            label='Filter by name...'
            leftIcon={<LoupeIcon />}
            value={filterName}
            onChange={setFilterName}
            onClear={() => setFilterName('')}
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
