import type { ICharacter } from '../model/types';
import type { IApiCharacter } from './types';

export const mapCharacter = (raw: IApiCharacter): ICharacter => ({
  id: raw.id,
  image: raw.image,
  name: raw.name,
  gender: raw.gender,
  species: raw.species,
  location: raw.location.name,
  status: raw.status
});
