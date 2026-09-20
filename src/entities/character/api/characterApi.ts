import { apiClient } from '@/shared';
import axios from 'axios';

import { mapCharacter } from './mapper';
import type { ICharacterListParams, ICharacterListResponse, ICharactersPage } from './types';

export const characterApi = {
  async getCharacters(params?: ICharacterListParams, signal?: AbortSignal): Promise<ICharactersPage> {
    try {
      const { data } = await apiClient.get<ICharacterListResponse>('/character', { params, signal });
      return { characters: data.results.map(mapCharacter), hasNext: data.info.next !== null };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return { characters: [], hasNext: false };
      }
      throw error;
    }
  }
};
