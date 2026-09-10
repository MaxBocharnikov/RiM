export type TCharacterStatus = 'Alive' | 'Dead' | 'unknown';

export type TGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface ICharacter {
  id: number;
  image: string;
  name: string;
  gender: TGender;
  species: string;
  location: string;
  status: TCharacterStatus;
}
