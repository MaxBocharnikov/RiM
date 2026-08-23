import type { TCharacterStatus, TGender } from '../CharacterCard';

export interface ICharacterFilters {
  name: string;
  species: string | null;
  gender: TGender | null;
  status: TCharacterStatus | null;
}
