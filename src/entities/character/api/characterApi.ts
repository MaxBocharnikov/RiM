import { apiClient } from '@/shared';

import type { ICharacter } from '../model/types';
import { mapCharacter } from './mapper';
import type { ICharacterListParams, ICharacterListResponse } from './types';

export const characterApi = {
  async getCharacters(params?: ICharacterListParams, signal?: AbortSignal): Promise<ICharacter[]> {
    const { data } = await apiClient.get<ICharacterListResponse>('/character', { params, signal });
    return data.results.map(mapCharacter);
  }
};
