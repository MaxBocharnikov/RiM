import { LoupeIcon } from '../../assets';
import { Input, Select, type ISelectOption } from '../../shared';
import { CharacterStatusDot } from '../CharacterCard';
import type { TCharacterStatus, TGender } from '../CharacterCard';
import type { ICharacterFilters } from './types';

import styles from './CharacterFilters.module.scss';

const SPECIES_OPTIONS: ISelectOption<string>[] = [
  { label: 'Human', value: 'Human' },
  { label: 'Alien', value: 'Alien' },
  { label: 'Humanoid', value: 'Humanoid' },
  { label: 'Animal', value: 'Animal' },
  { label: 'Robot', value: 'Robot' },
  { label: 'Cronenberg', value: 'Cronenberg' },
  { label: 'Disease', value: 'Disease' },
  { label: 'Unknown', value: 'Unknown' }
];

const GENDER_OPTIONS: ISelectOption<TGender>[] = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
  { label: 'Genderless', value: 'Genderless' },
  { label: 'Unknown', value: 'unknown' }
];

const STATUS_OPTIONS: ISelectOption<TCharacterStatus>[] = [
  { label: 'Alive', value: 'Alive' },
  { label: 'Dead', value: 'Dead' },
  { label: 'Unknown', value: 'unknown' }
];

type Props = {
  value: ICharacterFilters;
  onChange: (next: ICharacterFilters) => void;
};

export const CharacterFilters = (props: Props) => {
  const { value, onChange } = props;

  const handleFilterChange = <K extends keyof ICharacterFilters>(key: K, newValue: ICharacterFilters[K]) => {
    onChange({
      ...value,
      [key]: newValue
    });
  };

  return (
    <div className={styles.character_filters}>
      <Input
        variant='outline'
        label='Filter by name...'
        leftIcon={<LoupeIcon className={styles.search_icon} />}
        value={value.name}
        onChange={(next) => handleFilterChange('name', next)}
        onClear={() => handleFilterChange('name', '')}
      />

      <Select
        clearable
        placeholder='Species'
        value={value.species}
        onChange={(next) => handleFilterChange('species', next)}
        options={SPECIES_OPTIONS}
      />

      <Select
        clearable
        placeholder='Gender'
        value={value.gender}
        onChange={(next) => handleFilterChange('gender', next)}
        options={GENDER_OPTIONS}
      />

      <Select
        clearable
        placeholder='Status'
        value={value.status}
        onChange={(next) => handleFilterChange('status', next)}
        options={STATUS_OPTIONS}
        renderDecoration={(option) => <CharacterStatusDot status={option.value} />}
      />
    </div>
  );
};
