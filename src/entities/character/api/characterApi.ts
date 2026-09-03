import { apiClient } from '@/shared';

import type { ICharacter } from '../model/types';
import { mapCharacter } from './mapper';
import type { ICharacterListResponse } from './types';

export const characterApi = {
  async getCharacters(): Promise<ICharacter[]> {
    const { data } = await apiClient.get<ICharacterListResponse>('/character');
    return data.results.map(mapCharacter);
  }
};
