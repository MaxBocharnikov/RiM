import type { ICharacterListParams } from '@/entities';

import type { ICharacterFilters } from '../model/types';

export const mapFiltersToParams = ({ name, species, gender, status }: ICharacterFilters): ICharacterListParams => {
  const params: ICharacterListParams = {};

  const trimmedName = name.trim();

  if (trimmedName) params.name = trimmedName;
  if (species) params.species = species;
  if (gender) params.gender = gender.toLowerCase();
  if (status) params.status = status.toLowerCase();

  return params;
};
