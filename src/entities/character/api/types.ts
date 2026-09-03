import type { TCharacterStatus, TGender } from '../model/types';

export interface ICharacterListResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: IApiCharacter[];
}

export interface IApiCharacter {
  id: number;
  name: string;
  status: TCharacterStatus;
  species: string;
  gender: TGender;
  image: string;
  location: {
    name: string;
    url: string;
  };
}
