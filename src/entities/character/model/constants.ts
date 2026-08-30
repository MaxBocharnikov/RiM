import type { ISelectOption, TDotTone } from '@/shared';

import type { TCharacterStatus, TGender } from './types';

export const STATUS_LABELS: Record<TCharacterStatus, string> = {
  Alive: 'Alive',
  Dead: 'Dead',
  unknown: 'Unknown'
};

export const STATUS_TONE: Record<TCharacterStatus, TDotTone> = {
  Alive: 'success',
  Dead: 'danger',
  unknown: 'warning'
};

export const STATUS_OPTIONS: ISelectOption<TCharacterStatus>[] = [
  { label: STATUS_LABELS.Alive, value: 'Alive' },
  { label: STATUS_LABELS.Dead, value: 'Dead' },
  { label: STATUS_LABELS.unknown, value: 'unknown' }
];

export const GENDER_OPTIONS: ISelectOption<TGender>[] = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
  { label: 'Genderless', value: 'Genderless' },
  { label: 'Unknown', value: 'unknown' }
];

export const SPECIES_OPTIONS: ISelectOption<string>[] = [
  { label: 'Human', value: 'Human' },
  { label: 'Alien', value: 'Alien' },
  { label: 'Humanoid', value: 'Humanoid' },
  { label: 'Animal', value: 'Animal' },
  { label: 'Robot', value: 'Robot' },
  { label: 'Cronenberg', value: 'Cronenberg' },
  { label: 'Disease', value: 'Disease' },
  { label: 'Unknown', value: 'Unknown' }
];
