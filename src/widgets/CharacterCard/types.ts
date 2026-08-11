export type TCharacterStatus = 'Alive' | 'Dead' | 'unknown';

export interface ICharacter {
  image: string;
  name: string;
  gender: string;
  species: string;
  location: string;
  status: TCharacterStatus;
}
