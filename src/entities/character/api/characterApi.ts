import { apiClient } from '@/shared';

import type { ICharacter } from '../model/types';
import { mapCharacter } from './mapper';
import type { ICharacterListParams, ICharacterListResponse } from './types';

export const characterApi = {
  async getCharacters(params?: ICharacterListParams): Promise<ICharacter[]> {
    const { data } = await apiClient.get<ICharacterListResponse>('/character', { params });
    return data.results.map(mapCharacter);
  }
};
