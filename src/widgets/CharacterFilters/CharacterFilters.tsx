import { LoupeIcon } from '@/assets';
import { CharacterStatusDot, GENDER_OPTIONS, SPECIES_OPTIONS, STATUS_OPTIONS } from '@/entities';
import { Input, Select } from '@/shared';

import type { ICharacterFilters } from './types';

import styles from './CharacterFilters.module.scss';

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
